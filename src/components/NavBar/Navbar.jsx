import React from 'react'
import '../NavBar/navbar.css';

function Navbar() {
  return (
   
   <div>
    
   <nav className='nav'>
      
       <div class="nav-item">
          <a href="/">Home</a>
          </div>
          <div class="nav-item">
          <a href="/Work">Work</a>
          </div>
          <div class="nav-item">
          <a href="/aboutme">About</a>
          </div>
          <div class="nav-item">
          <a href="/Contact">Contact</a>
          </div>
       
      
      </nav>
   
    </div>
  

  )
}

export default Navbar