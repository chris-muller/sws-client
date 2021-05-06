import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getCompanies } from '../../services/swsApi'
import CompanySummary from '../CompanySummary'

const Page = styled.div``
const Search = styled.div``
const Results = styled.div`
  margin: 16px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
`

export default () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    getCompanies({ priceHistory: true }).then((data) => {
      setCompanies(data)
      // console.log(`data`, JSON.stringify(data, null, 5))
    })
  }, [])
  return (
    <Page>
      <Search />
      <Results>
        {companies.map((company) => (
          <CompanySummary key={company.id} company={company} />
        ))}
      </Results>
    </Page>
  )
}
