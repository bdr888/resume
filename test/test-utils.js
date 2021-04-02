// test-utils.js
import React from 'react'
import { node } from 'prop-types'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../styles/theme'

// import withApolloClient from '../apollo/client'
// import { ApolloProvider } from '@apollo/react-hooks'
// import { MockedProvider } from '@apollo/client/testing';

const Providers = ({ children }) => {
  return (
    // <ApolloProvider client={apollo}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </ApolloProvider>
  )
}

Providers.propTypes = {
  children: node.isRequired,
}

// const AllProviders = withApolloClient(Providers)

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
