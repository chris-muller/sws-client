const filterByTotals = (excludeBelow) => (company) => {
  // if no filter, don't filter
  if (!excludeBelow) return true

  return company.score.total >= excludeBelow
}

const filterByExchange = (exchange) => (company) => {
  // if no exchange provided, don't filter
  if (!exchange) return true

  return company.exchangeSymbol === exchange
}

export default (allCompanies = [], { filterTotal, filterExchange }) => {
  return allCompanies
    .filter(filterByTotals(filterTotal))
    .filter(filterByExchange(filterExchange))
}
