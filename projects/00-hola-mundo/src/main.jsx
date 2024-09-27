import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
/* Siempre que se cree un componente, el nombre debe empezar con mayuscula o tambien llamada pascal case */

createRoot(document.getElementById('root')).render(
  <App></App>
)
