import React from 'react'
import styled from 'styled-components'

const Price = styled.div`
  font-size: 24px;
  font-size: 18px;

  .positive,
  .negative {
    padding: 4px;
    font-size: 12px;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
`

export default ({ price, currency, positive }) => {
  const showTrend = positive != null

  // Formatting of the currency could
  // be better handled if I had more time
  const formattedPrice = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency,
  }).format(price)

  return (
    <Price>
      <span className="value">
        {formattedPrice} {currency}
      </span>
      {showTrend && (
        <>
          {positive && <span className="positive">&#9650;</span>}
          {!positive && <span className="negative">&#9660;</span>}
        </>
      )}
    </Price>
  )
}
