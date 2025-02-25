import { useState } from 'react'
import SignupPage from './Components/SignupPage/SignupPage';
import SigninPage from './Components/SigninPage/SigninPage';
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import { Route, Routes } from 'react-router';



function App() {

  return (
    <>
       <Routes>
          <Route path='/' element={<SignupPage/>} />
          <Route path='/signinpage' element={<SigninPage/>} />
          <Route path='/Navbar' element={<Navbar/>} />
          <Route path='/herosection' element={<HeroSection/>} />
       </Routes>
  
      {/* <SignupPage /> */}
    </>
  )
}

export default App
