import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background: #bbb;
`

export default ({ children }) => {
  return <Footer>{children} test</Footer>
}
