import { useState, useEffect } from 'react'
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='text-3xl font-bold'>Home Page</div>} />
        <Route path="/about" element={<div className='text-3xl font-bold'>About Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App