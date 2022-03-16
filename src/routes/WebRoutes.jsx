import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Favorite from '../pages/Files/Favorite'
import Home from '../pages/Home/Home'

const WebRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route excat path='/music-app' element={<Home/>}/>
                <Route  path='/favorites' element={<Favorite/>}/>
            </Routes>
        </Router>
  )
}


export default WebRoutes
