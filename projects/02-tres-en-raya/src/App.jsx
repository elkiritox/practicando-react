import {  useState } from 'react'

import './App.css'

//Constantes para los turnos
const TURNS = {
  X:'x',
  O:'o'
}


// Componente Square que representa cada casilla del tablero
const Square = ({children,isSelected,updateBoard,index}) => {
  
  const className=`square ${isSelected ? 'is-selected':''}`
  
  // Gestiona el click en la casilla
  const handleClick = () => {
     updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  //Estado del tablero incialmente vacío
  const [board,setBoard] = useState(Array(9).fill(null))

  //Estado del turno actual, empieza con X
  const [turn,setTurn] = useState(TURNS.X)

  const updateBoard = (index) =>{
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
  }

  return (
    <main className='board'>
    <h1>Tres en raya</h1>
    <section className='game'>
      {
        // Mapea cada casilla del tablero a un componente Square
        board.map((_,index) => {
          return (
           <Square
            key={index}
            index={index}
            updateBoard={updateBoard}>
              {board[index]}
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

    </main>
    
  )
}

export default App
