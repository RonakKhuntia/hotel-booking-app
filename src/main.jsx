import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='bg-neutral-950 text-amber-50'>Hello World</h1>
    <Button size="lg">Click Me</Button>
  </StrictMode>
)