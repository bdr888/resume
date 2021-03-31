/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import DataCard from '../components/DataCard'

// https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

const arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4]
const removeDuplicatesFromArray = arr =>
  arr.filter((item, index) => arr.indexOf(item) === index)
const dedupedresult = removeDuplicatesFromArray(arrayWithDuplicates)

const Sandbox = () => {
  return (
    <Layout>
      <DataCard data={dedupedresult} />
      <DataCard data={[]} />
    </Layout>
  )
}

export default Sandbox
