# Kafka-REST-React-Node-Express

 An application that utilizes REST API, Kafka, and React. It consists of a backend server written in Express.js for consuming Kafka messages from topics and a frontend React component for displaying the consumed messages.

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


