/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text, Flex, Link } from 'theme-ui'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text sx={{ pb: 2 }}>Denver, CO</Text>
        <Link href="mailto:brian.d.ridge@gmail.com">
          brian.d.ridge@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/briandridge/" target="_blank">
          LinkedIn
        </Link>
        <Link href="https://github.com/briandridge" target="_blank">
          Github
        </Link>
      </Flex>
    </Layout>
  )
}

export default Contact
