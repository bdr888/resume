/** @jsxRuntime classic /
/* @jsx jsx */
import { array } from 'prop-types'
import { jsx } from 'theme-ui'

// displays data for a card
const DataCard = ({ data = [] }) => {
  if (data.length < 1) return <div>sorry no data</div>
  return data?.map(item => <div key={item}>{item}</div>)
}

DataCard.propTypes = {
  data: array.isRequired,
}
export default DataCard
