import { winner_combos } from "../constants"

export const checkWinner = (boardToCheck) => {

    for(const combo of winner_combos){
      const [a,b,c]=combo
      if (boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[a]===boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null

  }
  
  export const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    //si no hay mas espacios vacíos en el tablero
    //significa que si todas las square o casillas son diferentes de null devolvera true
    return newBoard.every((square) => square != null)
  }