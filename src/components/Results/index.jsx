import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Form, Row, Col, InputGroup } from 'react-bootstrap'
import { getCompanies } from '../../services/swsApi'
import CompanySummary from '../CompanySummary'

const Page = styled.div`
  margin: 16px;

  & > * {
    margin-bottom: 8px;
  }
`
const Search = styled.div`
  color: #edeff0;

  .form-group {
    margin: 0;
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

export default () => {
  const [companies, setCompanies] = useState([])
  const [sortDirection, setSortDirection] = useState('ASC')
  const [sortBy, setSortBy] = useState('SCORE')

  useEffect(() => {
    getCompanies({ sortDirection, sortBy, priceHistory: true }).then((data) => {
      setCompanies(data)
    })
  }, [sortDirection, sortBy])
  return (
    <Page>
      <Search>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.SelectCustom">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Sort By:</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                  >
                    {Object.entries(SORT).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </Form.Control>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col />
            <Col>
              <Form.Group controlId="exampleForm.SelectCustom">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Sort direction:</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e) => setSortDirection(e.target.value)}
                    value={sortDirection}
                  >
                    {Object.entries(DIRECTION).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </Form.Control>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Search>
      <Results>
        {companies.map((company) => (
          <CompanySummary key={company.id} company={company} />
        ))}
      </Results>
    </Page>
  )
}
