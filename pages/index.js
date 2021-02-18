/** @jsxRuntime classic /
/* @jsx jsx */

// see this issue about the jsxRuntime classic thing: https://github.com/vercel/next.js/discussions/18440

import { jsx, Text, Link } from 'theme-ui'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Text sx={{ mt: 4, p: 2 }}>
        Hi! I'm Brian, I'm a software engineer with deep front-end experience,
        currently focused on DevOps and Infrastructure as Code technologies.
      </Text>
      <Text sx={{ p: 2 }}>
        See the
        <Link
          variant="inlineText"
          href="https://github.com/briandridge/resume"
          target="_blank"
          sx={{ px: 2 }}
        >
          code for this project
        </Link>
        to see some of the patterns and approaches I like for front-end
        architecture and designing UI's: declaritive code, responsive design,
        accessibility, component reuse, etc...
      </Text>
      <Text sx={{ p: 2 }}>
        This is a work in progress (obviously). More to come soon!
      </Text>
    </Layout>
  )
}
