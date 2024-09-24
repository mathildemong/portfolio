import React from 'react'
import NavBar from '../NavBar/Navbar'
import Reactimg from '../../assets/img/React.png';
 import phpimg from '../../assets/img/php.png';
import htmlimg from '../../assets/img/html.png';
import cssimg from '../../assets/img/css.png';
// import jsimg from '../../assets/img/square-js.svg';
 import nodeimg from '../../assets/img/node.png';
// import wordpressimg from '../../assets/img/wordpress.svg';
// import background from "../../assets/img/fond.png";
import '../aboutme/aboutme.css';
import cv from '../../assets/img/cv.pdf';



function Aboutme() {
  return (
    
    // <div className='background'>
    //    <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    // backgroundSize: ' 100% 100%',
    // height: '140vh',
    // boxSizing: 'border-box',
    
    // }}>
      <div className="About">
           <h1 class="title">Mon parcours<br></br>
     </h1>
       <NavBar/>
       <div className="Text"><p>Voici les différentes technologies que j'ai pu utiliser durant mon parcours,  
        <a href={cv} target = "cv">téléchargez mon CV.</a></p></div>
       <div className="logo"><div className="img">
       <div className="img1"><img style={{ width: "100%", height: "30%" }} src={Reactimg} alt="React img" /></div>
      <div className="img3"><img style={{ width: "100%", height: "30%" }} src={cssimg} alt="css img" /></div>
        {/* <div className="img4"><img style={{ width: "100%", height: "50%" }} src={jsimg} alt="js img" /></div>
       <div className="img5"><img style={{ width: "100%", height: "50%" }} src={wordpressimg} alt="wordpress img" /></div> */}
         <div className="img6"><img style={{ width: "100%", height: "30%" }} src={nodeimg} alt="node img" /></div>
      <div className="img6"><img style={{ width: "100%", height: "30%"}} src={htmlimg} alt="html img" /></div>
       <div className="img2"><img style={{ width: "100%", height: "25%" }} src={phpimg} alt="php img" /></div> 
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