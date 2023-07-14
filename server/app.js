const express = require('express');
const app = express();
const { Kafka } = require('kafkajs');
const kafkaHost = 'localhost:9092'; // Replace with your Kafka broker address and port
const topic = 'topic-one'; // Replace with the name of the Kafka topic you want to consume
const cors = require('cors');
const kafka = new Kafka({
  clientId: 'your_client_id',
  brokers: [kafkaHost],
});

const consumer = kafka.consumer({ groupId: 'your_consumer_group_id' });

let lastMessage = null;
app.use(cors());
const fetchAllPartitions = async () => {
  const admin = kafka.admin();
  await admin.connect();

  const topicMetadata = await admin.fetchTopicMetadata({ topics: [topic] });

  admin.disconnect();

  const partitionMetadata = topicMetadata.topics[0].partitions;
  return partitionMetadata.map(partition => partition.partitionId);
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
      lastMessage = {
        topic,
        key: message.key !== null ? message.key.toString() : null,
        value: message.value !== null ? message.value.toString() : null,
        partition
      };
    },
  });
};

runConsumer().catch(error => {
  console.error('Consumer error:', error);
});

app.get('/', (req, res) => {
  if (lastMessage) {
    res.json(lastMessage);
  } else {
    res.send('No Kafka message received yet.');
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
