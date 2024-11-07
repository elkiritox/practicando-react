import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Cat random' })
  return (
    <main>
      {imageUrl && <img src={imageUrl} />}
    </main>
  )
}
