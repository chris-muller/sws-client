import React from 'react'
import styled from 'styled-components'
import colorTransform from '../../utils/colorTransform'
import Snowflake from '../Snowflake'

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
  }
`

const Name = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  margin-right: 16px;
`

const Symbols = styled.aside`
  display: flex;
  flex-direction: column;
`

const Label = styled.span`
  font-size: 18px;
  font-weight: 700;
`

const SymbolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  text-align: right;

  & > *:first-child {
    font-weight: 500;
    font-size: 16px;
  }

  & > *:last-child {
    font-weight: 200;
    color: #bdbdbd;
    text-transform: uppercase;
    font-size: 12px;
  }
`

const Symbol = ({ value, children }) => {
  return (
    <SymbolWrapper>
      <span>{value}</span>
      <span>{children}</span>
    </SymbolWrapper>
  )
}

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

const castDate = (price) => ({ ...price, date: new Date(price.date) })
const sortPricesByDate = (p) => p.map(castDate).sort((a, b) => b.date - a.date)

export default ({ company }) => {
  const prices = company.closingPrices || []
  const [latestPrice, previousPrice] = sortPricesByDate(prices)
  const trendingUp = latestPrice.price > previousPrice.price

  const formattedPrice = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: company.listingCurrencyIiso,
  }).format(latestPrice.price)

  const { total, ...companyScores } = company.score

  console.log(`company.score`, JSON.stringify(company.score, null, 5))

  const scores = (({ value, future, past, health, dividend }) => ({
    value: value / 10,
    future: future / 10,
    past: past / 10,
    health: health / 10,
    dividend: dividend / 10,
  }))(companyScores)

  console.log(`scores`, JSON.stringify(scores, null, 5))

  const options = {
    color: colorTransform(total),
  }

  console.log(`options`, JSON.stringify(options, null, 5))

  return (
    <Summary>
      <div className="content">
        <header>
          <Name>{company.name}</Name>
          <Price>
            <span className="value">
              {formattedPrice} {company.listingCurrencyIiso}
            </span>
            {trendingUp && <span className="positive">&#9650;</span>}
            {!trendingUp && <span className="negative">&#9660;</span>}
          </Price>
        </header>
        {scores && <Snowflake data={scores} options={options} />}
        <p>
          <Label>Date generated</Label>
          {company.dateGenerated}
        </p>
        <p>
          <Label>Security</Label>
          {company.securityName}
        </p>
        <p>
          <Label>URL</Label>
          {company.canonicalUrl}
        </p>
        <p>
          <Label>Name</Label>
          {company.uniqueSymbolSlug}
        </p>
      </div>
      <Symbols>
        <Symbol value={company.tickerSymbol}>Ticker</Symbol>
        <Symbol value={company.exchangeSymbol}>Exchange</Symbol>
        <Symbol value={company.exchangeCountryIiso}>Country</Symbol>
      </Symbols>
    </Summary>
  )
}
