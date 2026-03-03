import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FeatureList from './FeatureToggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeatureList />
  </StrictMode>,
)
