import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const RANDOMURL= "http://localhost:3000/"
export default function KafkaConsumer() {
  const [message, setMessage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://localhost:3000/');
//         setMessage(response.data);
//         console.log(response);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     // Fetch data initially
//     fetchData();

//     // Fetch data every 10 seconds
//     const interval = setInterval(fetchData, 10000);

//     // Clean up the interval on component unmount
//     return () => {
//       clearInterval(interval);
//     };
//   });
    useEffect(()=>{
        fetchApi();
    },[])

    async function fetchApi(){
        const response = await fetch(RANDOMURL);
    const jsonResponse = await response.json();
    // const randomQuote = jsonResponse.quote;
    // setQuote(randomQuote);
    // console.log(jsonResponse);
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
