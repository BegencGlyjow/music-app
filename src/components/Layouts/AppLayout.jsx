import React from 'react'
import Body from '../Body/Body'
import SearchBar from '../SearchBar/SearchBar'
import Sidebar from '../Sidebar/Sidebar'
const AppLayout = () => {
  return (
    <main>
        <Sidebar/>
        <Body/>
    </main>
  )
}

export default AppLayout