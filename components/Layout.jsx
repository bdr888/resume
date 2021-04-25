/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import { string, node } from 'prop-types'
import Head from 'next/head'
import Header from '@components/Header'
import PageHeading from '@components/PageHeading'

// provides header, head, main, page heading, and container structure to every page
const Layout = ({ title, favicon = '/favicon.ico', children, pageHeading }) => {
  return (
    <div sx={{ variant: 'layout.root' }}>
      <Head>
        <title>Brian D. Ridge {title ? `| ${title}` : null}</title>
        <link href={favicon} rel="icon" />
      </Head>
      <Header />
      <main sx={{ variant: 'layout.main' }}>
        <div sx={{ variant: 'layout.container' }}>
          <PageHeading pageHeading={pageHeading} />
          {children}
        </div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: node,
  favicon: string,
  pageHeading: string,
  title: string,
}

export default Layout
