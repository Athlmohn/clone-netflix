import React from 'react'
import './App.css'
import {Orginals,Action,Horror} from './Url'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Poster from './Components/Poster/Poster'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner/>
      <Poster url={Orginals} title='Netflix Orginals' />
      <Poster url={Action} title='Action' isSmall />
      <Poster url={Horror} title='Horror' isSmall />
      <Footer/>

    </div>
  )
}

export default App

