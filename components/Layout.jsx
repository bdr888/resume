/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import Link from 'next/link'

// provides header, main, and footer structure to every page
// also includes the Head component
const Layout = ({ title, favicon = '/favicon.ico', children }) => {
  return (
    <div>
      <header sx={{ height: '4rem', bg: 'melon' }}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/Resume">
            <a>Resume</a>
          </Link>
        </nav>
      </header>
      <Head>
        <title>Brian D. Ridge {title ? `| ${title}` : null}</title>
        <link rel="icon" href={favicon} />
      </Head>
      <main>{children}</main>
      <footer sx={{ height: '4rem', bg: 'melon' }}>footer</footer>
    </div>
  )
}

export default Layout
