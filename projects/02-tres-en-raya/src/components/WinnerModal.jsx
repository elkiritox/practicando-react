import { Square } from "./Square"
export function WinnerModal ({winnner,resetGame}) {
    if (winnner === null) return null

    const winnerText = winnner === false ? 'Empate' : 'Ganó'

    return (

      <section className='winner'>
        <div className='text'>
          <h2>
            {
             winnerText
            }
          </h2>
            <header className='win'>
              {winnner && <Square>{winnner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </div>

      </section>
    
   
)

}