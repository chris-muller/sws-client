import React from 'react'
import styled from 'styled-components'

const SymbolWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    font-weight: 500;
    font-size: 24px;
  }

  & > *:last-child {
    font-weight: 200;
    color: #bdbdbd;
    text-transform: uppercase;
    font-size: 12px;
  }
`

export default ({ value, children }) => {
  return (
    <SymbolWrapper>
      <span>{value}</span>
      <span>{children}</span>
    </SymbolWrapper>
  )
}
