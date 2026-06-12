import { useState, useEffect, useRef } from 'react'
import portraitImg from '../../assets/JayeshChanne.png'
import './HeroSection.css'

function TypingName({ text, speed = 75, shouldStart = false }) {
  const [displayed, setDisplayed] = useState('')
  const startedRef = useRef(false)

  useEffect(() => {
    if (!shouldStart || startedRef.current) return
    startedRef.current = true

    let i = 0
    // Brief delay so the hero entrance animation is visible first
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, speed)
      return () => clearInterval(timer)
    }, 400)

    return () => clearTimeout(delay)
  }, [shouldStart, text, speed])

  return (
    <>
      <span>{displayed}</span>
      <span className="text-primary-container cursor-blink">█</span>
    </>
  )
}

function HeroSection({ loaded }) {
  return (
    <section
      id="home"
      className="flex flex-col justify-center border-b border-outline-variant relative overflow-hidden"
      style={{ height: '100svh', boxSizing: 'border-box', paddingLeft: 'var(--section-px)', paddingRight: 'var(--section-px)' }}
    >
      {/* Portrait — CSS entrance + invert-protected */}
      <div
        className="hero-portrait absolute z-20 opacity-80"
        style={{ top: '80px', right: 'clamp(16px, 4vw, 40px)', width: 'clamp(120px, 22vw, 360px)' }}
      >
        <div className="brutalist-border bg-surface" style={{ padding: '4px' }}>
          <div className="relative overflow-hidden">
            <img
              alt="Jayesh Channe — Portrait"
              className="portrait-protected w-full grayscale contrast-150 brightness-75 mix-blend-screen"
              src={portraitImg}
            />
            <div className="absolute inset-0 pointer-events-none dither opacity-40" />
            <div className="absolute inset-0 pointer-events-none bg-primary-container/10 mix-blend-overlay" />
          </div>
          <div className="portrait-socials">
            <a
              href="https://github.com/jayesh242663"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-original"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/jayeshchanne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-linkedin-plain colored"></i>
            </a>

            <a
              href="mailto:jayeshchanne9@gmail.com"
            >
              <i className="devicon-google-plain colored"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Hero text — CSS-driven entrances */}
      <div className="relative z-10">
        <div
          className="hero-tag font-code-snippet text-primary-container"
          style={{ marginBottom: '8px', fontSize: '13px', letterSpacing: '0.05em' }}
        >
          / INITIALIZING_SYSTEM_CORE...
        </div>

        <h1
          className="hero-name font-display-lg break-words leading-none glitch-text"
          data-text="JAYESH CHANNE"
          style={{ fontSize: 'clamp(38px, 8vw, 64px)', letterSpacing: '0.1em', fontWeight: 700 }}
        >
          {/* Typing animation only starts after loading completes */}
          <TypingName text="JAYESH CHANNE" shouldStart={loaded} />
        </h1>

        <p
          className="hero-sub font-headline-md text-on-surface-variant"
          style={{ marginTop: '24px', fontSize: 'clamp(16px, 2.5vw, 24px)', letterSpacing: '0.05em' }}
        >
          / FULL-STACK DEVELOPER &amp; FREELANCE ENGINEER
        </p>

        <div
          className="hero-meta flex flex-col"
          style={{ marginTop: '18px', gap: '4px' }}
        >
          <span className="text-label-sm uppercase opacity-50">LOCATION: DOMBIVLI, MUMBAI, INDIA</span>
          <span className="text-label-sm uppercase opacity-50">DEGREE: B.E. INFORMATION TECHNOLOGY — MUMBAI UNIVERSITY</span>
          <span className="text-label-sm uppercase opacity-50">STATUS: OPEN TO INTERNSHIPS &amp; ENTRY-LEVEL ROLES</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute flex items-center text-primary-container bounce-custom"
        style={{ bottom: '64px', left: 'clamp(16px, 4vw, 40px)', gap: '8px' }}
      >
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
        <span className="font-label-sm uppercase">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  )
}

export default HeroSection
