import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(saved ? saved === 'dark' : prefersDark)
    setMounted(true)
  }, [])

  return (
    <div className={`app ${dark ? 'dark' : 'light'} ${mounted ? 'mounted' : ''}`}>
      <div className='noise' />
      <header className='header'>
        <div className='header-left'>
          <span className='logo-mark'></span>
          <div className='logo-text'>
            <span className='logo-main'>A_HAPPY_SHARK</span>
            <span className='logo-sub'>- theshark.me</span>
          </div>
        </div>
        <button
          className='mode-toggle'
          onClick={() => {
            const next = !dark
            setDark(next)
            localStorage.setItem('theme', next ? 'dark' : 'light')
          }}
          aria-label='Toggle dark mode'
        >
          {dark ? ' LIGHT' : ' DARK'}
        </button>
      </header>
      <div className='rule thick' />

      {/* Hero */}
      <section className='hero'>
        <div className='hero-index'>001</div>
        <div className='hero-body'>
          <h1 className='hero-title'>
            <span className='line1'>COMPOSER.</span>
            <span className='line2'>GAME DEV.</span>
            <span className='line3'>BUILDER.</span>
          </h1>
          <p className='hero-desc'>
            Independent game developer & musician operating under Happy Shark Studios.
          </p>
        </div>
        <div className='hero-aside'>
          <p className='aside-label'>DOMAIN</p>
          <p className='aside-val'>theshark.me</p>
          <p className='aside-label'>STUDIO</p>
          <p className='aside-val'>HAPPY SHARK STUDIOS</p>
          <p className='aside-label'>STATUS</p>
          <p className='aside-val'>BUILDING...</p>
        </div>
      </section>
      <div className='rule' />

      {/* Links */}
      <section className='links-section'>

      </section>
      <div className='rule' />

      {/* Works */}
      <section className='works-section'>

      </section>
      <div className='rule thick' />

      {/* Footer */}
      <footer className='footer'>
        <span>© HAPPY SHARK STUDIOS</span>
        <span className='footer-mid'>THESHARK.ME</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  )
}
