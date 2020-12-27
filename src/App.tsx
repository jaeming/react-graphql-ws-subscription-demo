import React, { useEffect, useState } from 'react'
import './App.css'
import { subscribe } from './subscription_client'

export default function App() {
  const [messages, setMessages] = useState([] as any[])
  
  useEffect(() => (
    subscribe(
      { query: `subscription { downloadReady { id path name mimeType } }` }, 
      ({ data: { downloadReady } }: any) => setMessages(m => [...m, downloadReady])
    )
  ), [])

  const Message = ({name, id, path, mimeType}) => (
    <li key={id}>
      <p>{name}</p>
      <small>id: {id}, type: {mimeType}</small>
      <br/>
      <img src={path} alt={name}/>
    </li>
  )

  return (
    <div>
      <h3>client test</h3>
      <ul>{ messages.map(Message) }</ul>
    </div>
  )
}
