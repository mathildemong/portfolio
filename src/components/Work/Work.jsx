import React from 'react'
import NavBar from '../NavBar/Navbar'
import site1 from '../../assets/img/site1.PNG';
import site2 from '../../assets/img/site2.PNG';
import site3 from '../../assets/img/site3.PNG';
// import background from "../../assets/img/fond.png";
import '../Work/work.css';



function Work() {
  return (
    // <div  className="background"style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // height: '100vh',
    // widthheight: '100vh',
    // backgroundRepeat : 'no-repeat',
   
    //  }}>,
   
    <div className="Work">
           <h1 className="title">Mes projets<br></br>
      
     </h1>
       <NavBar/>
        <div className='graph'><a target="site" href="https://cargocollective.com/MathildeMong"> <p>Mon site de création graphiques</p></a>
        </div>
       <div className="gallery">
       <div className="">
      
       <a target="site" href="https://liminalmm.netlify.app/">
    <img src={site1} alt=""width="85%"/>
  </a>
  
</div>

<div className="">

  <div className="hoover2">
  <a target="site2" href="https://sneackers.netlify.app/">
    <img src={site2} alt="" width="80%"/>
  </a>
  
</div>
</div>

<div className="img3">
  
  <a target="site3" href="https://jdr-shop.netlify.app/">
    <img src={site3} alt="" width="75%"/>
  </a>
  
  
       </div>
       </div>
            
       
    
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
    // </div>
  )
}

export default Work