import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Heading } from 'lucide-react'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  )
}

export default App