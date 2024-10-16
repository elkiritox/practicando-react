import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'sasuke',
        name: 'Sasuke Uchiha',
        isFollowing: true
    },
    {
        userName: 'sakura',
        name: 'Sakura Haruno',
        isFollowing: false
    },
    {
        userName: 'kakashi',
        name: 'Kakashi Hatake',
        isFollowing: true
    },
    {
        userName: 'hinata',
        name: 'Hinata Hyuga',
        isFollowing: false
    },
    {
        userName: 'shikamaru',
        name: 'Shikamaru Nara',
        isFollowing: true
    }
]

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
      /* <>
        </>
       */
      <section className='App'>
        
        {
       users.map(({userName,name,isFollowing}) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >{name}
        </TwitterFollowCard>
        
            ))
        }
        {
        /*
         /* Opcion 2 -- mas larga  **/
            
           /* users.map (user => {
                const {userName,name,isFollowing} =user
                return (
                    <TwitterFollowCard
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >{name}</TwitterFollowCard>
                )
            })
             } 
        */
       }
      </section>     
    )
}
export default App