import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Price from './price'
import ForWho from './forWhom'
import styles from './prices.styles'

const whos = [
  {
    name: 'alakarte',
    src: '/logo.png',
  },
  {
    name: 'Fabien',
    src: 'https://avatars1.githubusercontent.com/u/17828231?s=460&v=4',
  },
  {
    name: 'Guillaume',
    src: 'https://avatars1.githubusercontent.com/u/26094222?s=460&v=4',
  },
]

const Prices = ({ prices, response, add }) => (
  <Fragment>
    <div className={styles.block}>
      <h2>Prix</h2>
      <div className={styles.buttons}>
        {prices.map(price => (
          <Price key={price} price={price} selected={price === prices[0]} />
        ))}
      </div>
    </div>
    <div className={styles.block}>
      <h2>For whom ?</h2>
      <div className={styles.buttons}>
        {whos.map(who => (
          <ForWho key={who.name} {...who} selected={who.name === whos[0].name} />
        ))}
      </div>
    </div>
    <button onClick={add}>ADD</button>
    <div>{response}</div>
  </Fragment>
)

Prices.propTypes = {
  prices: PropTypes.array,
  response: PropTypes.string,
  add: PropTypes.func,
}

Prices.defaultProps = {
  prices: [],
  response: '',
  add: undefined,
}

export default Prices
