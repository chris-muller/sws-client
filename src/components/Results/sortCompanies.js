const getPriceVolatility = (prices) => {
  const values = prices.map((p) => p.price)
  const highest = Math.max(...values)
  const lowest = Math.min(...values)

  return highest - lowest
}

export default (value, direction) => (a, b) => {
  if (value === 'SCORE') {
    if (direction === 'DESC') {
      return b.score.total - a.score.total
    }

    return a.score.total - b.score.total
  }

  if (value === 'VOLATILITY') {
    const aVariability = getPriceVolatility(a.closingPrices)
    const bVariability = getPriceVolatility(b.closingPrices)

    // if (direction === 'ASC') {
    if (direction === 'DESC') {
      return bVariability - aVariability
    }

    return aVariability - bVariability
  }

  // If no value to sort by, or already sorted, don't sort
  return 0
}
