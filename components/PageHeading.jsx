/** @jsxRuntime classic /
/* @jsx jsx */
import { string } from 'prop-types'
import { jsx, Flex, Text, Divider } from 'theme-ui'

const PageHeading = ({ pageHeading }) => {
  return (
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
        {pageHeading}
      </Text>
      <Divider sx={{ mb: 4 }} />
    </Flex>
  )
}

PageHeading.propTypes = {
  pageHeading: string.isRequired,
}

export default PageHeading
