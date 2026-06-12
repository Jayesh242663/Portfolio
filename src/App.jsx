import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import './App.css'

// Import components
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Scanlines from './components/Scanlines/Scanlines'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import BioSection from './components/BioSection/BioSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

// Import utilities
import { toggleInvert, scrollToSection } from './utils/navigation'

gsap.registerPlugin(ScrollTrigger)

/* =============================================
   HOOK: GSAP Section-wise Scroll Animations
   Fires per section as it enters the viewport.
   Uses gsap.context() for proper React cleanup.
   ============================================= */
function useGSAPAnimations(active) {
  useEffect(() => {
    if (!active) return

    const ctx = gsap.context(() => {

      /* ── BIO SECTION ── */
      gsap.fromTo('.bio-card',
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '#bio',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo('.bio-desc',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '#bio',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* ── PROJECTS SECTION ── */
      gsap.from('.projects-heading', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.project-nav-item', {
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 72%',
          toggleActions: 'play none none none',
        },
      })

      /* ── SKILLS SECTION ── */
      gsap.from('.skills-heading', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.skill-column', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      /* ── CONTACT SECTION ── */
      gsap.from('.contact-heading', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.contact-terminal', {
        y: 55,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 74%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [active])
}

/* =============================================
   ROOT: App
   ============================================= */
function App() {
  const [loaded, setLoaded] = useState(false)

  // GSAP scroll animations — only after loading
  useGSAPAnimations(loaded)

  // Keyboard navigation — smooth scroll to sections
  // Only register after loading completes so section positions are settled
  useEffect(() => {
    if (!loaded) return

    function handleKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      const key = e.key.toUpperCase()
      if (!['I', 'H', 'B', 'P', 'S', 'C'].includes(key)) return
      e.preventDefault()
      switch (key) {
        case 'I': toggleInvert(); break
        case 'H': scrollToSection('home'); break
        case 'B': scrollToSection('bio'); break
        case 'P': scrollToSection('projects'); break
        case 'S': scrollToSection('skills'); break
        case 'C': window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        }); break
        default: break
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [loaded])

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div className={`portfolio-root${loaded ? ' portfolio-visible' : ''}`}>
        <Scanlines />
        <NavBar />
        {/* Each section-wrap handles its own header/footer padding */}
        <main>
          <HeroSection loaded={loaded} />
          <BioSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App