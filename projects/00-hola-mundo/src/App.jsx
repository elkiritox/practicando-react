import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
    
    //const formatUsername = (userName) => `@${userName}`
    const naruto = {isFollowing:true,userName:"naruto"}
    return(
        //<> es igual a <React.Fragment>
       /* <section className='App'>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="kirito" name="Kazuto Kirigaya" />
        <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName="asuna" name="Asuna Kirigaya" />
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="naruto" name="Uzumaki Naruto" />
        </section>
        */
       <>
        <TwitterFollowCard  isFollowing userName="kirito" >
        Kazuto Kirigaya
        Sasuke
        sAKURA
        </TwitterFollowCard>

        <TwitterFollowCard  isFollowing={false} userName="asuna"  >
        Asuna Kirigaya
        </TwitterFollowCard>
        
        <TwitterFollowCard  {... naruto}  >
        Uzumaki Naruto
        </TwitterFollowCard>
        </>
    )
}
export default App