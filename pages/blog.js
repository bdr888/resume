/** @jsxRuntime classic /
/* @jsx jsx */

import { Card, jsx, Text, Flex, Divider, Spinner } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import DataFetcher from '@components/DataFetcherComponent'

export const GET_ALL_BLOG_POSTS = gql`
  query {
    blogPostCollection {
      items {
        sys {
          id
        }
        title
        subtitle
        slug
        date
        tags
        mainBodyContent {
          json
        }
        image {
          url
        }
      }
    }
  }
`

const Blog = () => {
  return (
    <Layout pageHeading="Blog">
      <DataFetcher query={GET_ALL_BLOG_POSTS}>
        {data =>
          data.blogPostCollection.items.map(post => (
            <Card
              key={post.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
              variant="primary"
            >
              <Link
                href={{
                  pathname: '/blog/[slug]/[id]',
                  query: {
                    slug: encodeURIComponent(post.slug),
                    id: post.sys.id,
                  },
                }}
              >
                <div>
                  <Text as="h3">{post.title}</Text>
                  {/* {post.image ? (
                    <Image
                      height={200}
                      objectFit="cover"
                      src={post.image.url}
                      width={200}
                    />
                  ) : null} */}
                  <Text sx={{ fontWeight: 'bold' }}>{post.subtitle}</Text>
                  <div>
                    {post.mainBodyContent.json.content.map(item => {
                      return item.content.map(itemContent => (
                        <div key={itemContent.value}>{itemContent.value}</div>
                      ))
                    })}
                  </div>
                </div>
              </Link>
            </Card>
          ))
        }
      </DataFetcher>
    </Layout>
  )
}

export default Blog
