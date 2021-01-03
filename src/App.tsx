import React, { useEffect, useState } from 'react'
import './App.css'
import { subscribe } from './subscription_client'

export default function App() {
  const [messages, setMessages] = useState([] as any[])
  
  useEffect(() => (
    subscribe(
      { query: `subscription { message }` }, 
      ({ data: { message } }: any) => setMessages(m => [...m, message])
    )
  ), [])

  const Message = (msg) => (
    <li key={msg}>
      {msg}
    </li>
  )

  return (
    <div>
      <ul>{ messages.map(Message) }</ul>
    </div>
  )
}
