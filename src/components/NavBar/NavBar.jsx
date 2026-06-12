import { useState } from 'react'
import { toggleInvert } from '../../utils/navigation'
import './NavBar.css'

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="site-header fixed top-0 w-full z-50 flex justify-between items-center bg-background border-b border-outline-variant"
      style={{ padding: '10px 20px' }}
    >
      <div
        className="font-display-lg text-primary tracking-widest"
        style={{ fontSize: 'clamp(16px, 4vw, 26px)', fontWeight: 700, letterSpacing: '0.12em' }}
      >
        JAYESH_CHANNE
      </div>

      {/* CV button */}
      <a
        href="https://drive.google.com/file/d/1e6K54SYc_iL3-FyQHZFm5kujjVu5QT8O/view"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button font-label-sm uppercase brutalist-border hover:bg-primary-container hover:text-on-primary-container transition-all"
        style={{ padding: '8px 16px', fontSize: '11px', letterSpacing: '0.08em' }}
      >
        Resume
      </a>

      {/* Mobile hamburger */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        id="btn-mobile-menu"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--green)' }}>
          {mobileOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileOpen(false)}>
          <nav
            className="mobile-nav-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {['HOME', 'BIO', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
              <a
                key={item}
                className="mobile-nav-link"
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="mobile-nav-link"
              style={{ border: '1px solid var(--green)', marginTop: '8px', textAlign: 'left' }}
              onClick={() => { toggleInvert(); setMobileOpen(false) }}
            >
              INVERT_UI
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
