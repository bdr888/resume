/** @jsxRuntime classic /
/* @jsx jsx */
// see this issue about the jsxRuntime classic thing: https://github.com/vercel/next.js/discussions/18440

import { jsx, Text, Flex, Spinner } from 'theme-ui'
import Layout from '../components/Layout'
import gql from 'graphql-tag'
import DataFetcher from '@components/DataFetcherComponent'

export const GET_INTODUCTION = gql`
  query Introduction {
    introduction(id: "6qvmw5D39EZLXedzxuN9L8") {
      introduction {
        json
      }
    }
  }
`

const Home = () => (
  <Layout pageHeading="About">
    <Flex sx={{ flexDirection: 'column' }}>
      <DataFetcher query={GET_INTODUCTION}>
        {data =>
          data.introduction.introduction.json.content.map(paragraph => (
            <Text key={paragraph.content[0].value} sx={{ p: 2 }}>
              {paragraph.content[0].value}
            </Text>
          ))
        }
      </DataFetcher>
    </Flex>
  </Layout>
)

export default Home
