//Constantes para los turnos
export const TURNS = {
    X:'❌',
    O:'⚪'
  }
export const winner_combos = 
    [
      [0, 1, 2], // Fila superior
      [3, 4, 5], // Fila central
      [6, 7, 8], // Fila inferior
      [0, 3, 6], // Columna izquierda
      [1, 4, 7], // Columna central
      [2, 5, 8], // Columna derecha
      [0, 4, 8], // Diagonal de izquierda a derecha
      [2, 4, 6]  // Diagonal de derecha a izquierda
    ]