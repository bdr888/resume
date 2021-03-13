/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header sx={{ variant: 'layout.header' }}>
      <Text sx={{ fontSize: [4, 5], fontWeight: 'bold', cursor: 'pointer' }}>
        <Link href="/">
          <a sx={{ px: 2, cursor: 'pointer' }}>Brian D. Ridge</a>
        </Link>
      </Text>

      <nav>
        <Link href="/Resume">
          <a sx={{ px: 2, cursor: 'pointer' }}>Resume</a>
        </Link>
        <Link href="/Contact">
          <a sx={{ px: 2, cursor: 'pointer' }}>Contact</a>
        </Link>
        <a
          href="https://github.com/briandridge/resume"
          target="_blank"
          sx={{ px: 2 }}
          rel="noreferrer"
        >
          Github
        </a>
      </nav>
    </header>
  )
}

export default Header
