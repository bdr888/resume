/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/globals.css'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../styles/theme'
import withApolloClient from '../apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApolloClient(MyApp)
