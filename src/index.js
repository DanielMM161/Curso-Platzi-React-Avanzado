import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Context from './Context'

import {App} from './App'

const client = new ApolloClient({
  uri: 'https://petgram-api-daniel.now.sh/graphql',
  cache: new InMemoryCache(),
})


ReactDom.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
