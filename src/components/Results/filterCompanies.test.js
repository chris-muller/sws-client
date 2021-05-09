import filterCompanies from './filterCompanies'

const companyFixtures = [
  {
    exchangeSymbol: 'ASX',
    score: {
      total: 9,
    },
  },
  {
    exchangeSymbol: 'NasdaqGS',
    score: {
      total: 12,
    },
  },
  {
    exchangeSymbol: 'ASX',
    score: {
      total: 14,
    },
  },
  {
    exchangeSymbol: 'ASX',
    score: {
      total: 17,
    },
  },
  {
    exchangeSymbol: 'NasdaqGS',
    score: {
      total: 22,
    },
  },
  {
    exchangeSymbol: 'NYSE',
    score: {
      total: 26,
    },
  },
]

test('filters by totals', () => {
  const filterBy9 = filterCompanies(companyFixtures, { filterTotal: 9 })
  const filterBy17 = filterCompanies(companyFixtures, { filterTotal: 17 })
  const filterBy26 = filterCompanies(companyFixtures, { filterTotal: 26 })
  const filterBy30 = filterCompanies(companyFixtures, { filterTotal: 30 })

  expect(filterBy9.length).toBe(6)
  expect(filterBy17.length).toBe(3)
  expect(filterBy26.length).toBe(1)
  expect(filterBy30.length).toBe(0)
})

test('filters by exchange', () => {
  const filterByASX = filterCompanies(companyFixtures, {
    filterExchange: 'ASX',
  })
  const filterByNYSE = filterCompanies(companyFixtures, {
    filterExchange: 'NYSE',
  })

  expect(filterByASX.length).toBe(3)
  expect(filterByNYSE.length).toBe(1)
})

test('filters by totals and exchange', () => {
  const filterByASXAnd14 = filterCompanies(companyFixtures, {
    filterExchange: 'ASX',
    filterTotal: 14,
  })
  expect(filterByASXAnd14.length).toBe(2)
})
