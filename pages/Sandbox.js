/** @jsxRuntime classic /
/* @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'
import BlackJack from '@components/BlackJack'
import MyBlackJack from '@components/MyBlackJack'
const draw = deck => {
  const randomCardIndex = deck[Math.floor(Math.random() * deck.length)]
  const randomCard = deck[randomCardIndex]
  const updatedDeck = deck.splice(randomCardIndex, 1)
  return { randomCard, updatedDeck }
}

const Sandbox = () => {
  // const [deck, setDeck] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  // const { card, newDeck } = draw(deck)
  // console.log('🤘💀🔥🤘💀🔥', 'card: ', card, '🤘💀🔥🤘💀🔥')
  // console.log('🤘💀🔥🤘💀🔥', 'newDeck: ', newDeck, '🤘💀🔥🤘💀🔥')
  return (
    <Layout>
      <MyBlackJack />
      {/* <BlackJack /> */}
    </Layout>
  )
}

export default Sandbox
