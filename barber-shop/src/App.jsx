import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Treatments from './pages/Treatments/Treatments'
import Abount from './pages/Abount/Abount'

function App() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/treatments' element={<Treatments />} />
          <Route path='/abount' element={<Abount />} />
        </Routes>

      </div>
    
    </>
  )
}

export default App
