/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text, Flex, Button } from 'theme-ui'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer sx={{ variant: 'layout.footer' }}>
      <Link href="/">Home</Link>
    </footer>
  )
}

export default Footer
