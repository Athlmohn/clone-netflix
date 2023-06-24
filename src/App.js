import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Poster from './Components/Poster/Poster'
import { Action, Comedy, Horror, Orginals, Trending } from './Url'
import Footer from './Components/Footer/Footer'
function App() {
  return (
   <>
   <NavBar/>
   <Banner/>
   <Poster url={Orginals} title="Netflix Orginals"/>
   <Poster url={Trending} title="Trending" isSmall/>
   <Poster url={Action} title="Action" isSmall/>
   <Poster url={Horror} title="Horror" isSmall/>
   <Poster url={Comedy} title="Comedy"isSmall/>
   <Footer/>

   </>
  )
}

export default App