import React from 'react'
import './styles/App.scss'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'

function App () {
  const siteName: string = 'Your Website Name'
  const callToAction: string = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'

  return (
    <div className="App">
      <Nav siteName={siteName}/>
      <Header siteName={siteName} callToAction={callToAction}/>
    </div>
  )
}

export default App
