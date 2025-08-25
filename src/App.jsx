import React from 'react'
import WebHeader from './components/header/header.jsx'

import { Outlet } from 'react-router-dom'
import Content from './components/unicomponent/content.jsx'
 import FooterBanner from './components/footer/footer.jsx'


function App() {
  
  return (
   <div>
    <WebHeader />
    <Outlet />
    <Content />
    <FooterBanner />
   </div>
  )
}

export default App
