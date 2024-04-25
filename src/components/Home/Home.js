import React from 'react'
import NavBar from '../NavBar/Navbar'
import background from "../../assets/img/fond.jpg";
import '../Home/home.css'; 


function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: ' 100% 100%',
    height: '140vh',
    boxSizing:'border-box',
    }}>
      
    
      <div className='Home'>
      <div class="boite1">
      </div>
      <h1 class="title">Mathilde<br></br>
      Monguillon
      </h1>
      <NavBar/>

      <div class="wavesA">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" stroke="white" fill="none" stroke-width ="0.2" />
        <use xlinkHref="#gentle-wave" x="48" y="3" stroke="white" fill="none" stroke-width ="0.2" />
        <use xlinkHref="#gentle-wave" x="48" y="5" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="7" stroke="white" fill="none" stroke-width ="0.2"/>
        <use xlinkHref="#gentle-wave" x="48" y="8" stroke="white" fill="none" stroke-width ="0.2"/>
        </g>
        </svg>
        </div>
</div>

    </div>
    
  )
}

export default Home