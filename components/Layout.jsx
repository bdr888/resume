/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import { string, node } from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

// provides header, head, main, and container structure to every page
const Layout = ({ title, favicon = '/favicon.ico', children }) => {
  return (
    <div sx={{ variant: 'layout.root' }}>
      <Head>
        <title>Brian D. Ridge {title ? `| ${title}` : null}</title>
        <link href={favicon} rel="icon" />
      </Head>
      <Header />
      <main sx={{ variant: 'layout.main' }}>
        <div sx={{ variant: 'layout.container' }}>{children}</div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: node,
  favicon: string,
  title: string,
}

export default Layout
