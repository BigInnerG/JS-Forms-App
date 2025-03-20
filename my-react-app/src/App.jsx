import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SimpleForm from './SimpleForm'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import MultiForm from './MultiForm'
import './App.css'
import NavBar from './NavBar'

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/simpleform' element={<SimpleForm />} />
      <Route path='/loginform' element={<LoginForm />} />
      <Route path='/registerform' element={<RegisterForm />} />
      <Route path='/multiform' element={<MultiForm />} /> 
    </Routes>
      
    </>
  )
}

export default App
