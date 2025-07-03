import { useEffect, useState } from 'react'

export default function PWAUpdatePrompt() {
  const [showReload, setShowReload] = useState(false)
  const [offlineReady, setOfflineReady] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Escuta atualizações do service worker
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowReload(true)
      })

      // Escuta quando a PWA está pronta para funcionar offline
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        setOfflineReady(true)
      })
    }
  }, [])

  const handleReload = () => {
    window.location.reload()
  }

  const handleClose = () => {
    setShowReload(false)
    setOfflineReady(false)
  }

  if (!showReload && !offlineReady) return null

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#000',
      color: '#fff',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 9999,
      maxWidth: '300px',
      fontSize: '14px'
    }}>
      {showReload && (
        <div>
          <p style={{ margin: '0 0 12px 0' }}>
            Nova versão disponível!
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleReload}
              style={{
                background: '#fff',
                color: '#000',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Atualizar
            </button>
            <button
              onClick={handleClose}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid #fff',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      
      {offlineReady && (
        <div>
          <p style={{ margin: '0 0 12px 0' }}>
            Aplicativo pronto para uso offline!
          </p>
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  )
} 