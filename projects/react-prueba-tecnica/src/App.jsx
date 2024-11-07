import { useEffect, useState } from "react";
import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Otro } from "./components/otro";

//const CATS_ENDPOINT_IMAGE =`https://cataas.com/cat/says/${firstWord}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App (){
     
    const {fact,refreshFact} = useCatFact()
    const [factError,setFactError] = useState();
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
       refreshFact()
    }

    return (
        <main >
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            {fact && <p>{fact}</p>} {/* Significa que si fact existe o es verdadero entonces se renderiza la etiqueta <p>*/}
            {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first words for ${fact}`}/>}
            
        </main>
    );
}