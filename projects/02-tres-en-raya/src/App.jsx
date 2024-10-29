import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameToStorage,resetGameStorage } from './logic/storage'


function App() {
  //Estado del tablero incialmente vacío
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null)
  
  })

  //Estado del turno actual, empieza con X
  const [turn,setTurn] = useState( () => {

    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X // Quiere decir que si hay algo en el storage lo regresa sino usa el X
  } )

  const [winnner,setWinner] = useState(null) //null es que no hay ganador, false es empate

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) =>{

    if(board[index]|| winnner) return
     // copia profunda
     //const newBoard2 = structuredClone(board)
     //copia superficial de un array
      const newBoard = [... board]  //esto es correcto para evitar mutar las props y el estado
      // Actualiza la casilla con el turno actual
      newBoard[index]= turn //x u o
      // Actualiza estado del tablero
      setBoard(newBoard)
      // Cambia el turno al siguiente jugador
      const newTurn = turn === TURNS.X? TURNS.O: TURNS.X;
      setTurn (newTurn)

       //guardamos la partida
       saveGameToStorage({board:newBoard,turn:newTurn})
     

      const newWinner = checkWinner(newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      }else if (checkEndGame(newBoard)){
        setWinner(false)
      }
  }


  return (
    <main className='board'>
    <h1>Tres en raya</h1>
    <button onClick={resetGame}>Reset del Juego</button>
    <section className='game'>
      {
        // Mapea cada casilla del tablero a un componente Square
        board.map((square,index) => {
          return (
           <Square
            key={index}
            index={index}
            updateBoard={updateBoard}>
              {square}
              </Square>
          )
        
      }
    )
  }
    </section>
    <section className='turn'>
      {/* Muestra el turno actual */}
      <Square isSelected={turn===TURNS.X} >{TURNS.X}</Square>
      <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
    </section>

      <WinnerModal resetGame={resetGame} winnner={winnner} />

    </main>
    
  )
}

export default App
