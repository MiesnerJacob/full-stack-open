import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ text, stat }) => <p>{text} {stat}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  const calculateAverage = ({ good, neutral, bad }) => {
    const goods = Array(good).fill(1)
    const neutrals = Array(neutral).fill(0)
    const bads = Array(bad).fill(-1)

    const nums = [...goods, ...neutrals, ...bads]

    if (nums.length === 0) {
      return 'No ratings submmitted yet...'
    }

    const numsSum = nums.reduce((acc, val) => acc + val, 0)
    const numsLength = nums.length
    return numsSum / numsLength
  }

  const calculatePctPositive = ({ good, neutral, bad }) => {
    const totalVotes = (good + neutral + bad)
    if (totalVotes === 0) {
      return 'No ratings submmitted yet...'
    }

    return (good / totalVotes * 100) + '%'
  }

  let average = calculateAverage({ good, neutral, bad })
  let pctPositive = calculatePctPositive({ good, neutral, bad })

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics text='good' stat={good}/>
      <Statistics text='neutral' stat={neutral}/>
      <Statistics text='bad' stat={bad}/>
      <Statistics text='total' stat={total}/>
      <Statistics text='average' stat={average}/>
      <Statistics text='positive' stat={pctPositive}/>
    </div>
  )
}

export default App