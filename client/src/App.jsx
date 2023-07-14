import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KafkaConsumer from './kafkaconsumer'
// import MessageTable from "./MessageTable.jsx"

function App() {
  

  return (
    <>
      <div>
       <KafkaConsumer/>
       {/* <MessageTable/> */}
      </div>
      
    </>
  )
}

export default App
