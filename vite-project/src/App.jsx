import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsPropsPage from './pages/CardPropsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<CardsPropsPage/>
    </>
  )
}

export default App