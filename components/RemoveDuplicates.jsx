/** @jsxRuntime classic /
/* @jsx jsx */
import { array } from 'prop-types'
import { Flex, Card, jsx } from 'theme-ui'

// https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

const arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4]

export const removeDuplicatesFromArray = arr =>
  arr.filter((item, index) => arr.indexOf(item) === index)

const data = removeDuplicatesFromArray(arrayWithDuplicates)

const RemoveDuplicates = ({ data }) => {
  return (
    <Flex>
      {/* <pre>{JSON.stringify(dedupedresult)}</pre> */}
      {data?.map((item, index) => (
        <Card key={index} variant="dataCard">
          {item}
        </Card>
      ))}
    </Flex>
  )
}

RemoveDuplicates.propTypes = {
  data: array.isRequired,
}

export default RemoveDuplicates
