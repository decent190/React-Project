import React from 'react'
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div >
   <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">welcome user</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">about us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">contact us</a>
          </li>
          
          <li class="nav-item">
          <button class="btn btn-secondary" type="submit" ><Link to="/" className='text-white'>Signup/Signin</Link></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
  
  
        <div class="bg-secondary p-5  " style={{height:"100vh"}}>
          <div className='text-center align-items-center justify-content-center'>
            <h2>hello</h2>
          </div>
    
      
        </div>
</div>
    
  )
}

export default HeroSection