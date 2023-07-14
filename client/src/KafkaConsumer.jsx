import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const RANDOMURL= "http://localhost:3000/"
export default function KafkaConsumer() {
  const [message, setMessage] = useState(null);


    useEffect(()=>{
        fetchApi();
    })

    async function fetchApi(){
        const response = await fetch(RANDOMURL);
    const jsonResponse = await response.json();
    
    setMessage(jsonResponse)
    }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Topic Name</h1>
          <p>{message && message.topic}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Key</h2>
          <p>{message && message.key}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Value</h3>
          <p>{message && message.value}</p>
        </Col>
      </Row>
    </Container>
  );
}
