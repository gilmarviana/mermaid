import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  // Escutar evento para mostrar prompt de instalação
  useEffect(() => {
    const handleShowInstallPrompt = () => {
      setShowInstallPrompt(true)
    }
    
    window.addEventListener('showInstallPrompt', handleShowInstallPrompt)
    
    return () => {
      window.removeEventListener('showInstallPrompt', handleShowInstallPrompt)
    }
  }, [])

  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt()
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação')
        }
        window.deferredPrompt = null
        setShowInstallPrompt(false)
      })
    }
  }

  return (
    <div className="App">
      <h1>Gilmar Martinez Viana</h1>
      <p>Desenvolvedor Low Code</p>
      
      <div className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Bubble</li>
          <li>FlutterFlow</li>
          <li>React</li>
          <li>WordPress</li>
          <li>HTML, CSS, JavaScript</li>
          <li>UI/UX Design</li>
          <li>Inteligência Artificial</li>
          <li>N8N, TypeBot</li>
        </ul>
      </div>

      <div className="contact">
        <h2>Contato</h2>
        <p>Portfolio completo: <a href="https://portfoliocv-27173.bubbleapps.io/" target="_blank" rel="noopener noreferrer" className="portfolio-link">Ver Portfolio</a></p>
      </div>

      {showInstallPrompt && (
        <div className="install-prompt">
          <p>Instale este app para uma melhor experiência!</p>
          <button onClick={handleInstallClick} className="install-button">
            Instalar App
          </button>
        </div>
      )}
    </div>
  )
}

export default App
