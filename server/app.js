const express = require('express');
const app = express();
const { Kafka } = require('kafkajs');
const kafkaHost = 'localhost:9092'; // Replace with your Kafka broker address and port
const topic = 'topic-one'; // Replace with the name of the Kafka topic you want to consume
const cors = require('cors');
app.use(cors());

const kafka = new Kafka({
  clientId: 'your_client_id',
  brokers: [kafkaHost],
});

const consumer = kafka.consumer({ groupId: 'your_consumer_group_id' });

const lastMessages = {};

const fetchAllPartitions = async () => {
  const admin = kafka.admin();
  await admin.connect();

  const topicMetadata = await admin.fetchTopicMetadata({ topics: [topic] });

  admin.disconnect();

  const partitionMetadata = topicMetadata.topics[0].partitions;
  return partitionMetadata.map(partition => partition.partitionId);
};

const updateLastMessage = ({ topic, partition, message }) => {
  const key = message.key !== null ? message.key.toString() : null;
  const value = message.value !== null ? message.value.toString() : null;
  const timestamp = message.timestamp;

  if (!lastMessages[key]) {
    lastMessages[key] = [];
  }

  if (lastMessages[key].length === 5) {
    lastMessages[key].shift(); // Remove the oldest message
  }

  lastMessages[key].push({ topic, key, value, partition, timestamp });
};

const runConsumer = async () => {
  await consumer.connect();
  const partitions = await fetchAllPartitions();

  partitions.forEach(partition => {
    consumer.subscribe({ topic, fromBeginning: true, partition });
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Received message:', message);
      updateLastMessage({ topic, partition, message });
    },
  });
};

runConsumer().catch(error => {
  console.error('Consumer error:', error);
});

app.get('/', (req, res) => {
  const key = req.query.key; // Get the key from the frontend

  if (lastMessages[key]) {
    res.json(lastMessages[key]);
  } else {
    res.json([]);
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

