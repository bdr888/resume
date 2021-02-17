/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header sx={{ variant: 'layout.header' }}>
      <Text sx={{ fontSize: [4, 5], fontWeight: 'bold' }}>Brian D. Ridge</Text>

      <nav>
        <Link href="/">
          <a sx={{ px: 2 }}>Home</a>
        </Link>
        <Link href="/Resume">
          <a sx={{ px: 2 }}>Resume</a>
        </Link>
        <Link href="/Contact">
          <a sx={{ px: 2 }}>Contact</a>
        </Link>
        <a
          href="https://github.com/briandridge/resume"
          target="_blank"
          sx={{ px: 2 }}
        >
          Github
        </a>
      </nav>
    </header>
  )
}

export default Header
