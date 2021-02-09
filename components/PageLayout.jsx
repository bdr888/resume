/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Flex } from 'theme-ui'

// opinionated flex and padding layout for standard pages
const PageLayout = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 'calc(100vh - 8rem)', // header and footer are each 4 rem
        px: 3,
        py: 3,
      }}
    >
      {children}
    </Flex>
  )
}

export default PageLayout
