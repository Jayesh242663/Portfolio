import { useState, useEffect } from 'react'
import './LoadingScreen.css'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let prog = 0
    const timer = setInterval(() => {
      // Eased progress — fast early, slow near 100%
      const remaining = 100 - prog
      prog += remaining * 0.06 + Math.random() * 2
      setProgress(Math.min(prog, 100))

      if (prog >= 99) {
        clearInterval(timer)
        setProgress(100)
        setTimeout(() => {
          setExiting(true)
          setTimeout(onComplete, 650)
        }, 300)
      }
    }, 60)

    return () => clearInterval(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`loading-screen font-code-snippet${exiting ? ' loading-exit' : ''}`}>
      <div className="scanlines" aria-hidden="true" />
      <div className="loading-inner">
        <div className="loading-logo">JAYESH_CHANNE.SYS</div>
        <div className="loading-bar-wrap">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loading-pct">{Math.floor(progress)}%</div>
      </div>
      <div className="loading-corner top-left">SYS::INIT</div>
      <div className="loading-corner top-right">MEM: 16GB</div>
      <div className="loading-corner bottom-left">CPU: JAYESH-CORE-X9</div>
      <div className="loading-corner bottom-right">STATUS: ONLINE</div>
    </div>
  )
}

export default LoadingScreen
