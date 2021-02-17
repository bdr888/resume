/** @jsxRuntime classic /
/* @jsx jsx */

// see this issue about the jsxRuntime classic thing: https://github.com/vercel/next.js/discussions/18440

import { jsx, Text } from 'theme-ui'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Text sx={{ p: 2 }}>
        Hi! I'm using this project to display some of the patterns and
        approaches I take to designing web apps, as well as deploying sites.
      </Text>
      <Text sx={{ p: 2 }}>
        See the code on
        <a
          href="https://github.com/briandridge/resume"
          target="_blank"
          sx={{ px: 2 }}
        >
          Github
        </a>
      </Text>
      <Text sx={{ p: 2 }}>
        It is a work in progress (obviously). More to come soon!
      </Text>
    </Layout>
  )
}
