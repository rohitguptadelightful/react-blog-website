import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App