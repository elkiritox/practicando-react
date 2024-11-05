import { useEffect, useState } from "react";
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const CATS_ENDPOINT_IMAGE =`https://cataas.com/cat/says/${firstWord}`

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
export function App (){
    const [fact,setFact] = useState()
    const [imageUrl,setImageUrl] = useState();
    const [factError,setFactError] = useState();

    //efecto para recuperar la cita al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => {
           if(!res.ok){
                setFactError("No se ha podido recuperar la cita")
           }
           return res.json();
        } )
        .then(data => {
            const {fact} = data
            setFact(fact)
        })
    },[])//[] solo se ejecuta la primera vez que se renderiza

    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() =>{
        if(!fact) return

            //const firstWord = fact.split(' ').slice(0,3).join(' ')//en esta linea dividimos a todo el texto en un array
            //luego con slice tomamos las tres primeras posiciónes del array y finalmente las unimos por espacio quedando
            //por ejemplo 'A cat has'
            const firstWord = fact.split(' ',3).join(' ') //parecido a lo de la parte superior pero devuelve el array con las tres 
            //palabras inciales: ['A', 'cat', 'has']
            console.log(firstWord)
            fetch(`https://cataas.com/cat/says/${firstWord}`)
                .then(res => {
                     if (!res.ok) {
                        setFactError("No se pudo recuperar la data")
                     }
                     return res.blob();
                })
                .then(blob => {
                    if (blob.type.startsWith('image/')) {
                        const imageUrl = URL.createObjectURL(blob);
                        setImageUrl(imageUrl);
                        
                    } else {
                        throw new Error('The fetched resource is not an image');
                    }
                })
                .catch(error => {
                    console.error('Error fetching the image:', error);
    });
    },[])

    return (
        <main >
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>} {/* Significa que si fact existe o es verdadero entonces se renderiza la etiqueta <p>*/}
            {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first words for ${fact}`}/>}
        </main>
    );
}