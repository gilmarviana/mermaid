import PWAUpdatePrompt from './components/PWAUpdatePrompt'
import './App.css'

function App() {
  return (
    <>
      <div style={{
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        height: '100vh',
        width: '100vw'
      }}>
        <iframe 
          src="https://bibliaonline-90421.bubbleapps.io/" 
          frameBorder="0" 
          style={{
            overflow: 'hidden',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          title="Evangelista Virtual"
        />
      </div>
      <PWAUpdatePrompt />
    </>
  )
}

export default App
