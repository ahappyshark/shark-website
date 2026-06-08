import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(saved ? saved === 'dark' : prefersDark)
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
          onClick={() => setDark((d) => !d)}
          aria-label='Toggle dark mode'
        >
          {dark ? ' LIGHT' : ' DARK'}
        </button>
      </header>
      <div className='rule thick' />
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
      </section>
      <div className='rule' />
      <section className='links-section'>

      </section>
      <div className='rule' />
      <section className='works-section'>

      </section>
      <div className='rule thick' />
      <footer className='footer'>
        <span>© HAPPY SHARK STUDIOS</span>
        <span className='footer-mid'>THESHARK.ME</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  )
}
