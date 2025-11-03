import NavBar from '../NavBar/Navbar'
import { SocialIcon } from 'react-social-icons'
import '../aboutme/aboutme.css'
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
       <div className="Text"><p>Voici les différentes technologies que j'ai pu utiliser durant mon parcours et mes missions.</p>
       </div>


<section className="experience-list">
  <ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Git</li>

  </ol>
</section>
      <section className="stage-cube-cont-section">
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
        </section>
<section>
        <div className="social-icons-aboutme">
        <SocialIcon network="github" url="https://github.com/mathildemong" />
        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/mathilde-monguillon-3a676a133/?locale=fr_FR"/>
        <SocialIcon network="cargo" url="https://cargocollective.com/MathildeMong" />
        <SocialIcon network="instagram" url="https://www.instagram.com/liminal_mood?igsh=MTJvemtxOGI1NThrZA%3D%3D&fbclid=PAZXh0bgNhZW0CMTEAAadCaBgXyahKsWaC9uyLRSdzVlBytESf3YZnu_9A4u7wX-uBE4QehpfNy6akTA_aem_5eQ2Lh_sQNYNtLqSWhcclQ" />
      </div>
      </section>

<section>
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
        </section>
 </div>
  //   </div>
    // </div>
  )
}

export default Aboutme