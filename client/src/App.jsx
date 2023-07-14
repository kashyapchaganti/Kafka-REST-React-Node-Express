import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KafkaConsumer from './kafkaconsumer'

function App() {
  

  return (
    <>
      <div>
       <KafkaConsumer/>
      </div>
      
    </>
  )
}

export default App
