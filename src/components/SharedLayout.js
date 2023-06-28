import React from 'react'
import Wrapper from '../assets/wrappers/SharedLayout'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return (
    <Wrapper>
        <div className='app'>
            <Sidebar/>
            <main className='content'>
                <Navbar/>
                <Outlet/>
            </main>
        </div>
    </Wrapper>
  )
}

export default SharedLayout
