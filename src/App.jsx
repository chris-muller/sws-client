import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ResultsPage from './components/Results'
import styled from 'styled-components'

/*
  Because of the simple structure of the app, I haven't added 
  any sort of routing functionality like React Router or global 
  state management like Redux
*/

const Main = styled.main`
  display: grid;
  grid-template-rows: min-content auto min-content;

  flex-direction: column;
`

function App() {
  return (
    <Main className="app-main">
      <Header>Simply Window St</Header>
      <ResultsPage />
      <Footer>©Simply Window Ave. - Christopher Muller</Footer>
    </Main>
  )
}

export default App
