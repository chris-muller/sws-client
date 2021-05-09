import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { getCompanies } from '../../services/swsApi'
import CompanySummary from '../CompanySummary'
import filterCompanies from './filterCompanies'
import sortCompanies from './sortCompanies'
import Select from './Select'

const Page = styled.div`
  margin: 16px;
`
const Search = styled.div`
  color: #edeff0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'sort spacing filter';

  .sort {
    grid-area: sort;
  }
  .filter {
    grid-area: filter;
  }

  & > * > *:last-child {
    margin-bottom: 0;
  }
`
const Results = styled.div`
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
`

const DIRECTION = {
  ASC: 'Ascending',
  DESC: 'Descending',
}

const SORT = {
  SCORE: 'Score',
  VOLATILITY: 'Volatility',
}

const SCORES = { '': 'Select option' }
for (let index = 1; index <= 30; index++) {
  SCORES[index] = `below ${index}`
}

const exchangeOptionsFromArray = (companies) => {
  const values = companies.map((c) => c.exchangeSymbol)

  // filter duplicates and transform into
  // nested arrays to convert to object
  const unique = [['', 'Select option']]
  const mappedValues = [...new Set(values)].map((e) => [e, e])

  unique.push(...mappedValues)

  // zip nested arrays into object
  return Object.fromEntries(unique)
}

export default () => {
  const [allCompanies, setCompanies] = useState([])
  const exchanges = exchangeOptionsFromArray(allCompanies)
  const [sortDirection, setSortDirection] = useState('DESC')
  const [sortBy, setSortBy] = useState('SCORE')
  const [filterTotal, setFilterScore] = useState('')
  const [filterExchange, setFilterByExchange] = useState('')
  const filteredCompanies = useMemo(() => {
    return filterCompanies(allCompanies, {
      filterTotal,
      filterExchange,
    })
  }, [filterTotal, filterExchange, allCompanies])
  const companies = useMemo(() => {
    return filteredCompanies.sort(sortCompanies(sortBy, sortDirection))
  }, [sortDirection, sortBy, filteredCompanies])

  useEffect(() => {
    getCompanies({
      priceHistory: true,
    }).then((data) => {
      setCompanies(data)
    })
  }, [sortDirection, sortBy])

  return (
    <Page>
      <Search>
        <div className="sort">
          <Select
            label="Sort by"
            options={SORT}
            value={sortBy}
            setValue={setSortBy}
          />
          <Select
            label="Sort direction"
            options={DIRECTION}
            value={sortDirection}
            setValue={setSortDirection}
          />
        </div>
        <div className="filter">
          <Select
            label="Filter by exchange"
            options={exchanges}
            value={filterExchange}
            setValue={setFilterByExchange}
          />
          <Select
            label="Exclude scores"
            options={SCORES}
            value={filterTotal}
            setValue={setFilterScore}
          />
        </div>
      </Search>
      <Results>
        {companies.map((company) => (
          <CompanySummary key={company.id} company={company} />
        ))}
      </Results>
    </Page>
  )
}
