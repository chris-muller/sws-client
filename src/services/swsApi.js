const BASE_URL = 'http://localhost:3000'

export const getCompanies = ({
  sortDirection,
  sortBy,
  priceHistory = false,
}) => {
  let url = `${BASE_URL}/company`

  const query = []

  if (sortBy) {
    query.push(`sort=${sortBy}`)
  }

  if (sortDirection) {
    query.push(`direction=${sortDirection}`)
  }

  if (priceHistory) {
    query.push(`price_history=true`)
  }

  if (query.length > 0) {
    url += `?${query.join('&')}`
  }

  return fetch(url).then((resp) => resp.json())
}
