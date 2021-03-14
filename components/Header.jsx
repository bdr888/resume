/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header sx={{ variant: 'layout.header' }}>
      <Link href="/">
        <a sx={{ px: 2, cursor: 'pointer' }}>
          <Text
            sx={{
              fontFamily: 'brand',
              fontSize: [5, 6],
              fontWeight: 'bold',
              letterSpacing: '0.6rem',
            }}
          >
            Brian D. Ridge
          </Text>
        </a>
      </Link>

      <nav>
        <Link href="/Resume">
          <a sx={{ px: 2, cursor: 'pointer', fontFamily: 'Montserrat' }}>
            Resume
          </a>
        </Link>
        <Link href="/Blog">
          <a sx={{ px: 2, cursor: 'pointer', fontFamily: 'Montserrat' }}>
            Blog
          </a>
        </Link>
        <a
          href="https://github.com/briandridge/resume"
          rel="noreferrer"
          sx={{ px: 2, cursor: 'pointer', fontFamily: 'Montserrat' }}
          target="_blank"
        >
          Github
        </a>
      </nav>
    </header>
  )
}

export default Header
