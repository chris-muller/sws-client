import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background: #bbb;
  padding: 14px;
  text-align: center;
  font-weight: thin;
  font-style: italic;
  color: #333;
  font-size: 12px;
`

export default ({ children }) => {
  return <Footer>{children}</Footer>
}
