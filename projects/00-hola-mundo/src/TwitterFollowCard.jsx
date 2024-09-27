export function TwitterFollowCard({children, userName='unknown',name,isFollowing}) {
  console.log(isFollowing)
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
            <button className="kr-tw-followcard-button">
              Follow
            </button>
        </aside>
       </article>
    )
}