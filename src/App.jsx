import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import AppNavbar from "./navbar/Navbar.jsx"
import AllProperties from './AllProperty/AllProperties.jsx'
import Footer from './Footer/Footer.jsx'
import Contect from './contectUs/Contect.jsx'
import Team from './Team/Team.jsx'
import ContectForNav from './Contect/ContectForNav.jsx'
import News from './news/News.jsx'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/properties' element={<AllProperties/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/contectUs' element = {<ContectForNav/>}></Route>
      <Route path='/news' element = {<News/>}></Route>
    </Routes>
    </BrowserRouter>
    <Contect />
    <Footer />

    </>
  )
}

export default App
