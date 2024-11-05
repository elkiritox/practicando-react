import { useEffect ,useState} from "react"

const FollowMouse = () => {
  const [enabled,setEnabled] = useState(false)
  const [position,setPosition]= useState({x:0,y:0})

  //pointermove
  useEffect(() => {
    console.log('efecto',{enabled})
    
    const handleMove = (event) => {
      const {clientX,clientY} = event
      console.log('handleMove',{clientX,clientY})
      setPosition({x:clientX ,y:clientY})
    }

    //solo hago el seguimiento si este esta activo
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    //limpiando subscripciones
    //se ejecuta cuando el componente se descoman
    //se ejecuta cuando cambian las dependencias
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled]) //con esto se dice que tiene que cambiar cada vez que cambia el valor de enabled
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente


  //change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    
    return () => { // cleanup method
       document.body.classList.remove('no-cursor')
    }

  },[enabled])


  return (
    <main>
      <div style={{
        position:'absolute',
        backgroundColor:'#09f',
        borderRadius: '50%',
        opacity:0.8,
        pointerEvents: 'none',
        left:-20,
        top:-20,
        width:40,
        height:40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
    <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar':'Activar'} Seguir Puntero</button>
    </main>
  )
}

function App() {
  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
