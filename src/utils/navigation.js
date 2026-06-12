export function toggleInvert() {
  document.documentElement.classList.toggle('inverted-ui')
}

export const HEADER_H = 62

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - HEADER_H
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}
