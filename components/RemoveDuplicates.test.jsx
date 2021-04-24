import React from 'react'
import { debug, render, screen } from '../test/test-utils'
import RemoveDuplicates, {
  removeDuplicatesFromArray,
} from '@components/RemoveDuplicates'

const arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4, 'hello', 'hello']
const arrayNoDuplicates = [1, 2, 3, 4, 'hello']

// test function
test('function removes duplicates from array', () => {
  expect(removeDuplicatesFromArray(arrayWithDuplicates)).toEqual([
    1,
    2,
    3,
    4,
    'hello',
  ])
})

test('function doesnt remove non-duplicates', () => {
  expect(removeDuplicatesFromArray(arrayNoDuplicates)).toEqual([
    1,
    2,
    3,
    4,
    'hello',
  ])
})

// test React component displays correctly
describe('RemoveDuplicates componenent ', () => {
  it('should render without duplicates', async () => {
    render(<RemoveDuplicates data={arrayWithDuplicates} />)
    const element = await screen.findAllByText(/1/i)
    expect(element.length).toHaveLength(1)
  })
})
