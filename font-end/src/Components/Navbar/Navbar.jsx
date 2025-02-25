import React from 'react'

const Navbar = () => {
  return (
   <div className=' w-full'>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-success  fw-bold">Welcome User</a>
    <form class="d-flex gap-1" role="search">
      <button class="btn btn-outline-success" type="submit">SignUp</button>
      <button class="btn btn-outline-success" type="submit">SignIn</button>
    </form>
  </div>
</nav>
<div>
  <h1>hello world</h1>
</div>
   </div>
  )
}

export default Navbar