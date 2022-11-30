import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Board from './components/TicTacToe/Board'

function App() {

  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  )
}

export default App
