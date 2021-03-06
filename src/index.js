import React from 'react'
import ReactDom from 'react-dom'
import {  
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Context from './Context'
import {App} from './App'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('token')

  if(token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }

  return forward(operation)
})

const errorMiddleware = onError(
  ({networkError}) => {
    if(networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token');
      window.location = '/';
    }
  }
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-api-daniel.now.sh/graphql'
    })
  ])
})


ReactDom.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
