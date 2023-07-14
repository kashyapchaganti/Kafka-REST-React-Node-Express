// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// const RANDOMURL= "http://localhost:3000/"
// export default function KafkaConsumer() {
//   const [message, setMessage] = useState(null);


//     useEffect(()=>{
//         fetchApi();
//     })

//     async function fetchApi(){
//         const response = await fetch(RANDOMURL);
//     const jsonResponse = await response.json();
    
//     setMessage(jsonResponse)
//     }

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col>
//           <h1>Topic Name</h1>
//           <p>{message && message.topic}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h2>Key</h2>
//           <p>{message && message.key}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h3>Value</h3>
//           <p>{message && message.value}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Table } from 'react-bootstrap';

// const RANDOMURL = "http://localhost:3000/";

// export default function KafkaConsumer() {
//   const [messageMap, setMessageMap] = useState(new Map());

//   useEffect(() => {
//     fetchApi();
//   });

//   async function fetchApi() {
//     try {
//       const response = await axios.get(RANDOMURL);
//       const message = response.data;

//       if (message.key !== null) {
//         setMessageMap(prevMap => {
//           const updatedMap = new Map(prevMap);
//           updatedMap.set(message.key, message.value);
//           return updatedMap;
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching API:", error);
//     }
//   }

//   return (
//     <Container className="mt-5">
//       <Table striped bordered>
//         <thead>
//           <tr>
          
//             <th>Key</th>
//             <th>Topic Name</th>
//             <th>Value</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 10 }, (_, index) => {
//             const key = (index + 1).toString();
//             const value = messageMap.get(key);
//             console.log(messageMap)

//             return (
//               <tr key={key}>
                
//                 <td>{key}</td>
//                 <td>topic-one</td>
//                 <td>{value}</td>
                
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from 'react-bootstrap';

const RANDOMURL = "http://localhost:3000/";

export default function KafkaConsumer() {
  const [messageMap, setMessageMap] = useState(new Map());

  useEffect(() => {
    fetchApi();
  });

  async function fetchApi() {
    try {
      const response = await axios.get(RANDOMURL);
      const message = response.data;

      if (message.key !== null) {
        setMessageMap(prevMap => {
          const updatedMap = new Map(prevMap);
          updatedMap.set(message.key, {
            topic: message.topic,
            value: message.value,
            partition: message.partition, timestamp: new Date(Number(message.timestamp)).toLocaleString('en-US', { timeZone: 'UTC' })
          });
          return updatedMap;
        });
      }
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  }

  return (
    <Container className="mt-5">
      <Table striped bordered>
        <thead>
          <tr>
            <th>Key</th>
            <th>Topic Name</th>
            <th>Value</th>
            <th>Partition</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => {
            const key = (index + 1).toString();
            const message = messageMap.get(key);

            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{message ? message.topic : ''}</td>
                <td>{message ? message.value : ''}</td>
                <td>{message ? message.partition : ''}</td>
                <td>{message ? message.timestamp : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
