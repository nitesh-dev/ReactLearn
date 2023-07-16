// import { useEffect, useState } from 'react'
import './assets/styles/App.css'
import ColorProject from './assets/pages/ColorProject'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import NoPage from './assets/pages/NoPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/color-project' element={<ColorProject />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
