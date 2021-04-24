import React from 'react'
import { render, screen } from '../test/test-utils'

import Sandbox, { removeDuplicatesFromArray } from '../pages/Sandbox'

const dupArr = [
  'hello',
  'hello',
  'brian',
  'want to work at the nyt',
  'brian',
  1,
  1,
  2,
]

const nonDupArr = ['hello', 'brian', 'want to work at the nyt', 'brian', 1, 2]

test('removes duplicates from an array', () => {
  // expect(removeDuplicatesFromArray(dupArr).length).toEqual(5)
  expect(removeDuplicatesFromArray(dupArr)).toContain(
    'hello',
    'brian',
    'want to work at the nyt',
    1,
    2
  )
})

test('removes duplicates from an array testing lenght', () => {
  expect(removeDuplicatesFromArray(dupArr).length).toEqual(5)
})

test(' doesnt remove non duplicates from  an array', () => {
  expect(removeDuplicatesFromArray(nonDupArr)).toContain(
    'hello',
    'brian',
    'want to work at the nyt',
    1,
    2
  )
})

describe('Card Page', () => {
  it('it doesnt render duplicate cards', async () => {
    render(<Sandbox />)
    const element = await screen.findAllByText(/hello/i)
    expect(element.length).toEqual(1)
  })
})
