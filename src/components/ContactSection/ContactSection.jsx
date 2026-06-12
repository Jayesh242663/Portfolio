import { useState, useRef } from 'react'
import './ContactSection.css'

function ContactSection() {
  const sectionRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formsubmit.co/ajax/jayeshchanne9@gmail.com", {
        method: "POST",
        body: formData
      })
      const result = await response.json()
      if (result.success === 'true' || response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section-wrap border-b border-outline-variant"
      ref={sectionRef}
    >
      {/* Heading with line */}
      <div
        className="contact-heading flex items-center"
        style={{ marginBottom: '40px', gap: '20px' }}
      >
        <h2
          className="font-headline-md text-primary-container"
          style={{ fontSize: '28px', fontWeight: 700, whiteSpace: 'nowrap' }}
        >
          /CONTACT
        </h2>
        <div style={{ height: '1px', flexGrow: 1, background: '#3b4b3d' }} />
      </div>

      {/* Two-column grid */}
      <div className="contact-terminal grid grid-cols-1 md:grid-cols-2" style={{ gap: '64px' }}>

        {/* LEFT — description + contact rows */}
        <div className="flex flex-col" style={{ gap: '28px' }}>
          <p
            className="font-body-lg text-on-surface-variant leading-relaxed"
            style={{ fontSize: '17px', lineHeight: 1.7 }}
          >
            Ready to contribute to a engineering team as a full-stack developer. I am available for internships, entry-level SWE roles, and freelance projects — and I respond within 24 hours. Whether it&apos;s backend architecture, a React UI, a database schema, or a containerized deployment, I can pick it up and ship it. Reach out directly below.
          </p>

          <div className="flex flex-col" style={{ gap: '12px' }}>
            {/* GitHub / LinkedIn / Email links */}
            <div className="flex flex-wrap" style={{ gap: '10px', marginTop: '4px' }}>
              {[
                { label: 'GITHUB', icon: 'code', href: 'https://github.com/jayesh242663', target: '_blank', rel: 'noopener noreferrer' },
                { label: 'LINKEDIN', icon: 'work', href: 'https://www.linkedin.com/in/jayeshchanne/', target: '_blank', rel: 'noopener noreferrer' },
                { label: 'EMAIL', icon: 'mail', href: 'mailto:jayeshchanne9@gmail.com' },
              ].map(({ label, icon, href, target, rel }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  id={`contact-${label.toLowerCase().replace(/[ /]/g, '-')}`}
                  className="flex items-center brutalist-border hover:bg-primary-container hover:text-on-primary-container transition-all"
                  style={{ gap: '6px', padding: '6px 14px', fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{icon}</span>
                  <span className="font-label-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — glass-panel contact form */}
        {status === 'success' ? (
          <div
            className="glass-panel brutalist-border flex flex-col justify-center items-center text-center font-code-snippet"
            style={{ padding: '48px 32px', gap: '20px', minHeight: '380px', background: 'rgba(19,19,19,0.6)' }}
          >
            <span
              className="material-symbols-outlined text-primary-container cursor-blink"
              style={{ fontSize: '48px' }}
            >
              check_circle
            </span>
            <div>
              <h3 className="font-headline-md text-primary-container" style={{ fontSize: '20px', marginBottom: '8px' }}>
                TRANSMISSION_SUCCESSFUL
              </h3>
              <p className="text-on-surface-variant leading-relaxed" style={{ fontSize: '14px', maxWidth: '320px' }}>
                Payload received. I will respond to your communication pipe shortly.
              </p>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="brutalist-border hover:bg-primary-container hover:text-on-primary-container transition-all"
              style={{ padding: '8px 24px', fontSize: '11px', letterSpacing: '0.08em', marginTop: '12px' }}
            >
              SEND_NEW_MESSAGE
            </button>
          </div>
        ) : (
          <form
            className="glass-panel brutalist-border flex flex-col"
            style={{ padding: '32px', gap: '22px' }}
            onSubmit={handleSubmit}
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Redirect back to your site after submit */}
            <input type="hidden" name="_next" value="https://jayeshchanne.vercel.app/" />

            {/* Name */}
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <label
                htmlFor="contact-name"
                className="font-label-sm uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.08em', opacity: 0.55 }}
              >
                Identity_Token
              </label>
              <input
                name="name"
                id="contact-name"
                type="text"
                placeholder="YOUR_NAME"
                required
                className="w-full brutalist-border font-code-snippet text-primary-container outline-none contact-input"
                style={{ background: '#0a0a0a', padding: '14px 16px', fontSize: '13px' }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <label
                htmlFor="contact-comm"
                className="font-label-sm uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.08em', opacity: 0.55 }}
              >
                Communication_Pipe
              </label>
              <input
                name="email"
                id="contact-comm"
                type="email"
                placeholder="EMAIL_ADDRESS"
                required
                className="w-full brutalist-border font-code-snippet text-primary-container outline-none contact-input"
                style={{ background: '#0a0a0a', padding: '14px 16px', fontSize: '13px' }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <label
                htmlFor="contact-msg"
                className="font-label-sm uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.08em', opacity: 0.55 }}
              >
                Message_Payload
              </label>
              <textarea
                name="message"
                id="contact-msg"
                placeholder="DESCRIBE_PROJECT_SCOPE"
                rows={5}
                required
                className="w-full brutalist-border font-code-snippet text-primary-container outline-none resize-none contact-input"
                style={{ background: '#0a0a0a', padding: '14px 16px', fontSize: '13px' }}
              />
            </div>

            {status === 'error' && (
              <div
                className="font-code-snippet"
                style={{ fontSize: '12px', border: '1px solid var(--color-error)', padding: '10px', background: 'rgba(255, 180, 171, 0.05)', color: 'var(--color-error)' }}
              >
                ERROR: TRANSMISSION_FAILED. Please try again or email directly.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit"
              disabled={status === 'sending'}
              className="w-full bg-primary-container text-on-primary-container font-headline-md uppercase hover-lift active:brightness-90 transition-all disabled:opacity-50 disabled:pointer-events-none"
              style={{ padding: '16px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em' }}
            >
              {status === 'sending' ? 'TRANSMITTING...' : 'Execute_Transmit'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactSection
