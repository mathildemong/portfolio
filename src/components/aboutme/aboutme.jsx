import React from 'react'
import NavBar from '../NavBar/Navbar'
import '../aboutme/aboutme.css';
import cv from '../../assets/img/cv.pdf';
import { 
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Aboutme() {
  return (
    

      <div className="About">
           <h1 class="title">Mon parcours<br></br>
     </h1>
       <NavBar/>
       <div className="Text"><p>Voici les différentes technologies que j'ai pu utiliser durant mon parcours.</p></div>
      
 <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
     
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
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
  //   </div>
    // </div>
  )
}

export default Aboutme