import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1 className='bg-background text-foreground'>Hello World</h1>
      <Button size="lg">Click Me</Button>
    </div>
  </StrictMode>
)