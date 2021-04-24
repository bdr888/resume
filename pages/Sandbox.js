/** @jsxRuntime classic /
/* @jsx jsx */
import { Card, jsx } from 'theme-ui'
import Layout from '../components/Layout'

const dupArr = ['hello', 'brian', 'want to work at the nyt', 'brian', 1]

export const removeDuplicatesFromArray = array =>
  array.filter((item, index) => index === array.indexOf(item))

const result = removeDuplicatesFromArray(dupArr)

const Sandbox = () => {
  return (
    <Layout>
      <div>
        {result.map((item, index) => (
          <Card key={index} variant="dataCard">
            {item}
          </Card>
        ))}
      </div>
      {/* <pre>{JSON.stringify(result)}</pre> */}
    </Layout>
  )
}

export default Sandbox
