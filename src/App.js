import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Safety from './pages/Safety'
const App = () => {
  return (
    <main>
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='safety' element={<Safety />} />
        </Route>
    </Routes>
    </main>
  )
}

export default App