const getPriceVolatility = (prices) => {
  const values = prices.map((p) => p.price)
  const highest = Math.max(...values)
  const lowest = Math.min(...values)

  return highest - lowest
}

export default (value, direction) => (a, b) => {
  // If no value to sort by, or already sorted, don't sort
  let sortValue = 0

  if (value === 'SCORE') {
    sortValue = a.score.total - b.score.total
  }

  if (value === 'VOLATILITY') {
    const aVariability = getPriceVolatility(a.closingPrices)
    const bVariability = getPriceVolatility(b.closingPrices)

    sortValue = aVariability - bVariability
  }

  // Reverse the sorting direction
  if (direction === 'DESC') {
    return sortValue * -1
  }

  return sortValue
}
