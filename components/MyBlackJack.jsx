/** @jsxRuntime classic /
/* @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, Flex, Button } from 'theme-ui'

const Dealer = () => <Flex>Dealer</Flex>

const generateDeck = () => {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  const suits = ['♦', '♣', '♥', '♠']
  const deck = []
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({ number: cards[i], suit: suits[j] })
    }
  }
  return deck
}

const makeDeck = () => {
  const cards = [2, 3]
  const suits = ['heart', 'spade']
  const deck = []
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({ number: cards[i], suit: suits[j] })
    }
  }
}

const MyBlackJack = () => {
  const [deck, setDeck] = useState(generateDeck())
  const [playerCards, setPlayerCards] = useState([])
  const [playerScore, setPlayerScore] = useState(0)
  console.log('🤘💀🔥🤘💀🔥', 'playerCards: ', playerCards, '🤘💀🔥🤘💀🔥')

  // draws a random card from the deck,
  const dealCard = deck => {
    const randomIndex = Math.floor(Math.random() * deck.length)
    const randomCard = deck[randomIndex]
    deck.splice(randomIndex, 1)
    return setDeck(deck), setPlayerCards([...playerCards, randomCard])
  }

  const getPlayerCount = () =>
    !playerCards.length
      ? 0
      : playerCards.reduce((total, card) => {
          return total + card.number
        }, 0)

  useEffect(() => {
    const newCount = getPlayerCount()
    return setPlayerScore(newCount)
  }, [playerCards])

  return (
    <Flex>
      <Flex>
        <Button onClick={() => dealCard(deck)}>Deal Card</Button>
      </Flex>
      <Flex>
        <div>{playerScore}</div>
        <div>
          {playerCards?.map((card, index) => (
            <div key={index}>
              {card.number}
              {card.suit}
            </div>
          ))}
        </div>
      </Flex>
    </Flex>
  )
}

export default MyBlackJack
