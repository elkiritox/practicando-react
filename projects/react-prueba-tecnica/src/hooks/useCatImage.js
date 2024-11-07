import { useState, useEffect } from 'react'
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    // const firstWord = fact.split(' ').slice(0,3).join(' ')//en esta linea dividimos a todo el texto en un array
    // luego con slice tomamos las tres primeras posiciónes del array y finalmente las unimos por espacio quedando
    // por ejemplo 'A cat has'
    const firstWord = fact.split(' ', 3).join(' ') // parecido a lo de la parte superior pero devuelve el array con las tres
    // palabras inciales: ['A', 'cat', 'has']
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?fontColor=white`)
      .then(res => {
        if (!res.ok) {
          throw new Error('No se pudo recuperar la data')
        }
        return res.blob()
      })
      .then(blob => {
        if (blob.type.startsWith('image/')) {
          const imageUrl = URL.createObjectURL(blob)
          setImageUrl(imageUrl)
        } else {
          throw new Error('The fetched resource is not an image')
        }
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
      })
  }, [fact])

  return { imageUrl }
}
