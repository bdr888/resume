/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text, Flex, Divider } from 'theme-ui'
import Layout from '../components/Layout'

const Blog = () => {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <Text
          sx={{
            fontFamily: 'Montserrat',
            fontSize: 4,
            pt: 3,
            as: 'h2',
          }}
        >
          Blog
        </Text>
        <Divider sx={{ mb: 4 }} />
        <Text sx={{ pb: 2 }}>Coming soon</Text>
      </Flex>
    </Layout>
  )
}

export default Blog
