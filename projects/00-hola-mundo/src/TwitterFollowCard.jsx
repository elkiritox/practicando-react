import { useState } from "react";

export function TwitterFollowCard({children, userName='unknown'}, initialIsFollowing='false') {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  /* es igual a */
 /* const state = useState(false);
  const isFollowing= state[0];
  const setIsFollowing = state[1];
*/
  const text = isFollowing ? 'Siguiendo':'Seguir';
  const className= isFollowing ? 'kr-tw-followcard-button is-following': 'kr-tw-followcard-button' 
  console.log(isFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing);
 }
  //userName =`@${userName}` // esto es mala practica ya que no se debería modificar una prop
    return (
        <article className="kr-tw-followcard">
        <header className="kr-tw-followcard-header">
          <img 
            className="kr-tw-followcard-avatar" 
            //src="https://unavatar.io/asuna"  
            //Para que sea reutilizable el src se puede poner de la siguiente manera. los {} son para que pueda evaluar lo que hay dentro
            src={`https://unavatar.io/${userName}`}
            alt="Avatar Asuna" />
          <div className="kr-tw-followcard-info">
            <strong>{children}</strong>
            <span className="kr-tw-followcard-infoUserName">
              @{userName}
            </span>
          </div>
        </header>
        <aside>
            <button className={className} onClick={handleClick}>
              <span className="kr-tw-followcard-text"> {text}</span>
              <span className="kr-tw-followcard-stopFollow">Dejar de Seguir </span>
            </button>
            
        </aside>
       </article>
    )
}