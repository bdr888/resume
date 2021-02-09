/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from './Header'

// provides header, main, and footer structure to every page
// also includes the Head component
const Layout = ({ title, favicon = '/favicon.ico', children }) => {
  return (
    <div>
      <Head>
        <title>Brian D. Ridge {title ? `| ${title}` : null}</title>
        <link rel="icon" href={favicon} />
      </Head>
      <Header />
      <main>{children}</main>
      <footer sx={{ height: '4rem', bg: 'melon' }}>footer</footer>
    </div>
  )
}

export default Layout
