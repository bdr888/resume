/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
  return (
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
  )
}

export default Header
