/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Flex, Spinner } from 'theme-ui'
import { useQuery } from '@apollo/client'

// Component to fetch data from GraphQl endpoint, and render loading, error, or success state
// children must be a function that takes "data" as an argument (render prop pattern)
const DataFetcher = ({ query, children }) => {
  const { loading, data, error } = useQuery(query)

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

  return children(data)
}

export default DataFetcher
