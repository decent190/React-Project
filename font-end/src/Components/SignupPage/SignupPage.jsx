import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()
  const endpoint = "http://localhost:3000/signup"

  const handleChange = () => {
    const info = { firstName, lastName, email, password }
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("Please complete all fields")
    } else {
      axios.post(endpoint, info)
        .then((response) => {
          if (response.status === 200) {
            alert('Signup successful')
            navigate('/signinpage')
          }
        }).catch((err) => {
          console.log(err)
          alert('this email is already in use')
        })
    }
  }

  return (
    <div className='shadow-lg p-5 w-75 mx-auto mt-4'>
      <div className="mb-3">
        <h2 className='text-dark text-center fs-3 text-decoration-underline'>SignUp Here</h2>
        <label htmlFor="first_name" className="form-label fs-5">First Name</label>
        <input type="text" className="form-control"  name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>

        <label htmlFor="last_name" className="form-label fs-5 mt-2">Last Name</label>
        <input type="text" className="form-control"  name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName}></input>

        <label htmlFor="email_address" className="form-label mt-2 fs-5">Email address</label>
        <input type="email" className="form-control"  name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="name@example.com"></input>

        <label htmlFor="pass_word" className="form-label mt-2 fs-5">Password</label>
        <input type="password" className="form-control"  name='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>

        <div className='mt-3 text-center'>
          <button type="submit" className="btn btn-dark fs-5 px-5" onClick={handleChange}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage