/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Flex, Spinner, Text } from 'theme-ui'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

export const GET_BLOG_POST = gql`
  query BlogPost($id: String!) {
    blogPost(id: $id) {
      title
      subtitle
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
`

const BlogPostContent = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, data, error } = useQuery(GET_BLOG_POST, {
    variables: { id },
  })

  if (loading)
    return (
      <Flex
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Spinner />
      </Flex>
    )

  if (error)
    return (
      <Flex
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        {error.message}
      </Flex>
    )

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Text as="h3" sx={{ pb: 1 }}>
        {data.blogPost.title}
      </Text>
      <Text as="h4" sx={{ pb: 3 }}>
        {data.blogPost.subtitle}
      </Text>
      {data.blogPost.mainBodyContent.json.content.map(item => {
        return item.content.map(itemContent => (
          <div key={itemContent.value}>{itemContent.value}</div>
        ))
      })}
    </Flex>
  )
}

const BlogPost = () => {
  return (
    <Layout pageHeading="Blog">
      <BlogPostContent />
    </Layout>
  )
}

export default BlogPost
