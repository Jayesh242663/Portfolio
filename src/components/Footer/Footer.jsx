import { toggleInvert } from '../../utils/navigation'
import './Footer.css'

function Footer() {
  const navItems = [
    { label: 'HOME [H]', href: '#home' },
    { label: 'BIO [B]', href: '#bio' },
    { label: 'PROJECTS [P]', href: '#projects' },
    { label: 'SKILLS [S]', href: '#skills' },
    { label: 'CONTACT [C]', href: '#contact' },
  ]

  return (
    <footer
      className="fixed bottom-0 w-full z-50 flex justify-center items-center bg-background border-t border-outline-variant overflow-hidden"
      style={{ gap: '20px', padding: '7px 0' }}
    >
      <span className="font-code-snippet text-on-surface" style={{ fontSize: '11px' }}>
        (C) 2025 JAYESH_CHANNE.SYS
      </span>
      <div className="hidden md:flex" style={{ gap: '12px' }}>
        {navItems.map((item) => (
          <a
            key={item.label}
            className="text-on-surface-variant font-label-sm uppercase hover:text-primary cursor-pointer transition-colors"
            style={{ padding: '0 6px' }}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
        <span
          className="text-on-surface-variant font-label-sm uppercase hover:text-primary cursor-pointer transition-colors"
          style={{ padding: '0 6px' }}
          onClick={toggleInvert}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleInvert()}
          id="footer-invert"
        >
          INVERT [I]
        </span>
      </div>
    </footer>
  )
}

export default Footer
