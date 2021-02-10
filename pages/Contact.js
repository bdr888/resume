/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui'
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
        <Text>brian.d.ridge@gmail.com</Text>
        <Text>7205120395</Text>
        <Text>github</Text>
        <Text>linkedin</Text>
        <Text>www.briandridge.co</Text>
      </Flex>
    </Layout>
  )
}

export default Contact
