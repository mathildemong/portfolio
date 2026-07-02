import { useState, useRef } from 'react'
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
  const [rotation, setRotation] = useState({ x: -20, y: 20 })
  const [dragging, setDragging] = useState(false)
  const startPointer = useRef({ x: 0, y: 0 })
  const startRotation = useRef({ x: -20, y: 20 })

  const handlePointerDown = (event) => {
    setDragging(true)
    startPointer.current = { x: event.clientX, y: event.clientY }
    startRotation.current = { ...rotation }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!dragging) return
    const dx = event.clientX - startPointer.current.x
    const dy = event.clientY - startPointer.current.y
    setRotation({
      x: Math.max(-90, Math.min(90, startRotation.current.x - dy)),
      y: startRotation.current.y + dx,
    })
  }

  const handlePointerUp = (event) => {
    setDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const cubeStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  }

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
            <div className="stage-cube-cont"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <div className="cubespinner" style={cubeStyle}>
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
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
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