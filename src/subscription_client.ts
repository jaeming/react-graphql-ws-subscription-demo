import { createClient } from 'graphql-ws'

const client = createClient({url: 'ws://localhost:4000/graphql'})

export function subscribe(payload, cb) {
  client.subscribe(payload, {
    next: cb,
    error: console.error,
    complete () { console.log('complete') },
  })
}