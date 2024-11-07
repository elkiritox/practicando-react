import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(setFact)
  }
  // efecto para recuperar la cita al cargar la página
  useEffect(refreshFact, [])// [] solo se ejecuta la primera vez que se renderiza

  return { fact, refreshFact }
}
