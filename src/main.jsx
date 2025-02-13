import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './index.css'
import App from './main/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
