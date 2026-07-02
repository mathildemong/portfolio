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
      <h1 className="title">Mon parcours<br /></h1>
      <NavBar />

      <div className="about-layout">
        <aside className="social-column">
          <div className="social-icons-aboutme">
            <SocialIcon network="github" url="https://github.com/mathildemong" />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/mathilde-monguillon-3a676a133/?locale=fr_FR" />
            <SocialIcon network="cargo" url="https://cargocollective.com/MathildeMong" />
            <SocialIcon network="instagram" url="https://www.instagram.com/liminal_mood" />
          </div>
        </aside>

        <main className="about-main">
          <section className="stage-cube-cont-section">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1"></div>
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
        </main>
      </div>

      <section>
        <div className="wavesA">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" stroke="white" fill="none" strokeWidth="0.2" />
              <use xlinkHref="#gentle-wave" x="48" y="3" stroke="white" fill="none" strokeWidth="0.2" />
              <use xlinkHref="#gentle-wave" x="48" y="5" stroke="white" fill="none" strokeWidth="0.2" />
              <use xlinkHref="#gentle-wave" x="48" y="7" stroke="white" fill="none" strokeWidth="0.2" />
              <use xlinkHref="#gentle-wave" x="48" y="8" stroke="white" fill="none" strokeWidth="0.2" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Aboutme