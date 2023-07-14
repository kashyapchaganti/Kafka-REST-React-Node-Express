# Real time visualization of high-velocity Kafka streams

 A Real Time application that utilizes REST API, Kafka, and React. It consists of a backend server written in Express.js for consuming Kafka messages from topics and a frontend React component for displaying the consumed messages.

## Tech Stack

- Kafka
- Node
- ReactJS

## Introduction 
- So, what is the importance of real-time data visualization? I will give you 3 examples from different domains where analyzing high speed real time data is crucial.

- Financial Services: Real-time visualization with Kafka can be valuable in the financial services industry. For example, stock market data feeds can be streamed into Kafka topics, and real-time visualization tools can process and display this data in a visually appealing and informative manner. Traders and analysts can monitor stock prices, trends, and other relevant metrics in real time, enabling them to make informed decisions quickly.

- Internet of Things (IoT): The IoT generates a massive amount of data from various devices and sensors. Kafka is commonly used as a messaging system to collect, process, and distribute IoT data streams. Real-time visualization tools can consume these Kafka topics and provide visual insights into the status, performance, and patterns of IoT devices. This can be particularly useful in industrial IoT applications, smart cities, and monitoring systems.

- Operational Monitoring and Analytics: Real-time visualization with Kafka can be employed for operational monitoring and analytics in various industries. For instance, in a manufacturing plant, data from sensors and equipment can be streamed into Kafka, and real-time visualization tools can create dashboards and charts to monitor production metrics, machine performance, and identify anomalies or bottlenecks. This allows operators to take immediate action and optimize processes.

 ## Prerequisites
- Node.js
- React.js 
- Kafka (Topics, producer, consumer, broker, kraft, server basics) 
- CORS support (enabled by default in the backend server)

## Backend
The backend server is responsible for consuming messages from a Kafka topic and exposing an API endpoint to retrieve the last consumed message. It uses the kafkajs library for interacting with Kafka.

## Frontend

The frontend component is a React component that fetches the last consumed message from the backend API and displays its details. It uses the axios library for making API requests and react-bootstrap for styling.

## Kafka Producer

The Kafka producer code is responsible for generating random messages and producing them to any topic. It uses the kafkajs library for interacting with Kafka.

## Note

Make sure to have the backend server running and the frontend component running to consume and display the messages respectively.

## Installation

### Backend Instructions

```
$ npm install

```

```
$ npm start

```

Access the following URL to retrieve the last consumed message:
```
http://localhost:3000/

```


### Frontend Instructions

```
$ npm install

```

```
$ npm run dev

```

Access the following URL to retrieve the last consumed message:
```
http://localhost:5174/

```

## Kafkaproducer Instructions

- start zookeeper server / or use kraft
- start kafka server 
- create a topic of your choice and assign partitions and replication factors 
- start kafka console consumer to crosscheck the data that is flowing to your react app 


```
$ npm install

```

```
$ node producer.js

```






