import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Artist from '../pages/artist/Artist'
import Favorite from '../pages/Files/Favorite'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const WebRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route excat path='/music-app' element={<Home />} />
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/login' element={<Login />} />
        <Route path='/artist' element={<Artist />} />
      </Routes>
    </Router>
  )
}


export default WebRoutes
