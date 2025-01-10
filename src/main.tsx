import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import SphereApp from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SphereApp />
  </StrictMode>,
)
