import sortCompanies from './sortCompanies'

const companyFixtures = [
  {
    id: '1',
    score: {
      total: 9,
    },
    closingPrices: [
      {
        price: 100,
      },
      {
        price: 10,
      },
    ],
  },
  {
    id: '2',
    score: {
      total: 12,
    },
    closingPrices: [
      {
        price: 100,
      },
      {
        price: 30,
      },
    ],
  },
  {
    id: '3',
    score: {
      total: 18,
    },
    closingPrices: [
      {
        price: 100,
      },
      {
        price: 50,
      },
    ],
  },
]

test('sort by totals', () => {
  const sortByScoreAsc = [...companyFixtures].sort(
    sortCompanies('SCORE', 'ASC'),
  )
  const sortByScoreDesc = [...companyFixtures].sort(
    sortCompanies('SCORE', 'DESC'),
  )

  expect(sortByScoreAsc[0].id).toBe('1')
  expect(sortByScoreDesc[0].id).toBe('3')
})

test('sort by volatility', () => {
  const sortByVolatilityAsc = [...companyFixtures].sort(
    sortCompanies('VOLATILITY', 'ASC'),
  )
  const sortByVolatilityDesc = [...companyFixtures].sort(
    sortCompanies('VOLATILITY', 'DESC'),
  )

  expect(sortByVolatilityAsc[0].id).toBe('3')
  expect(sortByVolatilityDesc[0].id).toBe('1')
})
