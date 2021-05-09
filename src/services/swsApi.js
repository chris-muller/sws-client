export const getCompanies = ({ priceHistory = false }) => {
  let url = `${process.env.SWS_API_BASE}/company`

  if (priceHistory) {
    url += `?price_history=true`
  }

  return fetch(url).then((resp) => resp.json())
}
