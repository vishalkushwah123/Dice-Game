import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/startGame'
import GamePlay from './components/GamePlay'

function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false)

  function toggleGamePlay() {
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        IsGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App
