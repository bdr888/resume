/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Header from './Header'

// provides header, head, main, container, and footer structure to every page
const Layout = ({ title, favicon = '/favicon.ico', children }) => {
  return (
    <div sx={{ variant: 'layout.root' }}>
      <Head>
        <title>Brian D. Ridge {title ? `| ${title}` : null}</title>
        <link rel="icon" href={favicon} />
      </Head>
      <Header />
      <main sx={{ variant: 'layout.main' }}>
        <div sx={{ variant: 'layout.container' }}>{children}</div>
      </main>
      <footer sx={{ variant: 'layout.footer' }}>footer</footer>
    </div>
  )
}

export default Layout
