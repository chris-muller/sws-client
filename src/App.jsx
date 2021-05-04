import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ResultsPage from './pages/Results'
import styled from 'styled-components'

/*
  Because of the simple structure of the app, I haven't added 
  any sort of routing functionality like React Router or global 
  state management like Redux
*/

const Main = styled.main`
  display: grid;
  /* grid-template-columns: 40px auto 20px; */
  grid-template-rows: 40px auto 20px;

  flex-direction: column;
`

function App() {
  return (
    <Main>
      <Header>Simply Window St</Header>
      <ResultsPage />
      <Footer />
    </Main>
  )
}

export default App
