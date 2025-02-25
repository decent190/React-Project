import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SigninPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const handleSignin = () => {
    const info = { email, password }
    axios.post('http://localhost:3000/login', info) // Corrected endpoint
      .then((response) => {
        if (response.status === 200) {
          alert('Signin successful')
          navigate('/herosection') // Navigate to landing page
        }
      }).catch((err) => {
        console.log(err)
        alert('invalid email or password')
      })
  }

  return (
    <div className='shadow-sm p-5 w-75 mx-auto mt-4'>
      <div class="mb-3 ">
        <h2 className='text-dark text-center mx-auto fs-3 text-decoration-underline'>Signin Here</h2>
        <label for="exampleFormControlInput1" class="form-label mt-2 fs-5">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <label for="exampleFormControlInput1" class="form-label mt-2 fs-5">Password</label>
        <input type="password" class="form-control" id="exampleFormControlInput1" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <div className='mt-3 text-center'>
          <button type="button" class="btn btn-dark fs-5 px-5" onClick={handleSignin}>Signin</button><br />
          
        </div>
      </div>
    </div>
  )
}

export default SigninPage