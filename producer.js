const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })
const produceMessage = async () => {
    try {
      await producer.send({
        topic: 'topic-one',
        messages: [
          {
            value: `number is ${Math.floor(Math.random() * 10 + 1)}`,
            key: `${Math.floor(Math.random() * 10 + 1)}`
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

const run = async () => {
  // Producing
  await producer.connect()
  setInterval(produceMessage, 1000
    )

  // Consuming
  
}

run().catch(console.error)