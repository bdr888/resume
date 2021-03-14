/** @jsxRuntime classic /
/* @jsx jsx */

// see this issue about the jsxRuntime classic thing: https://github.com/vercel/next.js/discussions/18440

import { jsx, Text, Flex, Divider } from 'theme-ui'
import Layout from '../components/Layout'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const GET_INTODUCTION = gql`
  query Introduction {
    introduction(id: "6qvmw5D39EZLXedzxuN9L8") {
      introduction {
        json
      }
    }
  }
`
export default function Home() {
  const { loading, data, error } = useQuery(GET_INTODUCTION)

  if (loading) return <div>loading...</div>

  if (error) return <div>error...</div>

  return (
    <Layout>
      <Text
        sx={{
          fontFamily: 'Montserrat',
          fontSize: 4,
          pt: 3,
        }}
      >
        About
      </Text>
      <Divider sx={{ mb: 4 }} />
      <Flex sx={{ flexDirection: 'column' }}>
        {data.introduction.introduction.json.content.map(paragraph => (
          <Text key={paragraph.content[0].value} sx={{ p: 2 }}>
            {paragraph.content[0].value}
          </Text>
        ))}
      </Flex>
    </Layout>
  )
}
