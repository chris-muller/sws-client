import React from 'react'
import styled from 'styled-components'
import colorTransform from '../../utils/colorTransform'
import Snowflake from '../Snowflake'
import Symbol from './Symbol'
import Price from './Price'

const Summary = styled.section`
  color: #edeff0;
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  margin: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;

  header {
    display: flex;
    align-items: center;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Name = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  margin-right: 16px;
`

const Symbols = styled.aside`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(4, min-content);
  margin: 16px 0;
`

const castDate = (price) => ({ ...price, date: new Date(price.date) })
const sortPricesByDate = (p) => p.map(castDate).sort((a, b) => b.date - a.date)

export default ({ company }) => {
  const prices = company.closingPrices || []
  const [latestPrice, previousPrice] = sortPricesByDate(prices)
  const trendingUp = latestPrice.price > previousPrice.price
  const { total, ...companyScores } = company.score

  const scores = (({ value, future, past, health, dividend }) => ({
    // convert 0-10 to 0-1 scale
    // Add 0.02 to each value to avoid
    // thin lines in graphs from 0 values
    value: value / 10 + 0.02,
    future: future / 10 + 0.02,
    past: past / 10 + 0.02,
    health: health / 10 + 0.02,
    dividend: dividend / 10 + 0.02,
  }))(companyScores)

  const options = {
    color: colorTransform(total),
  }

  return (
    <Summary>
      <div className="content">
        <header>
          <Name>{company.name}</Name>
          <Price
            price={latestPrice.price}
            currency={company.listingCurrencyIiso}
            positive={trendingUp}
          />
        </header>
        <Symbols>
          <Symbol value={company.tickerSymbol}>Ticker</Symbol>
          <Symbol value={company.exchangeSymbol}>Exchange</Symbol>
          <Symbol value={company.exchangeCountryIiso}>Country</Symbol>
          <Symbol value={`${total}/30`}>total</Symbol>
        </Symbols>
      </div>
      {scores && <Snowflake data={scores} options={options} />}
    </Summary>
  )
}
