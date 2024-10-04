import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';



function App() {
    
    //const formatUsername = (userName) => `@${userName}`
    const naruto = { userName:"naruto"}
    
    //const [name, setName] = useState('kirito')
    return(
        //<> es igual a <React.Fragment>
       /* <section className='App'>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="kirito" name="Kazuto Kirigaya" />
        <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName="asuna" name="Asuna Kirigaya" />
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="naruto" name="Uzumaki Naruto" />
        </section>
        */
       <>
        <TwitterFollowCard   userName='kirito'  >
        Kazuto Kirigaya
        Sasuke
        SAKURA
        </TwitterFollowCard>

        <TwitterFollowCard   userName="asuna"  >
        Asuna Kirigaya
        </TwitterFollowCard>
        
        <TwitterFollowCard  {... naruto}  >
        Uzumaki Naruto
        </TwitterFollowCard>

        
        </>
       
    )
}
export default App