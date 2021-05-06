const BASE_URL = 'http://localhost:3000'

export const getCompanies = ({ priceHistory = false }) => {
  let url = `${BASE_URL}/company`

  if (priceHistory) {
    url += '?price_history=true'
  }
  return fetch(url).then((resp) => resp.json())
}
