import React from 'react'



const Follower=({login , avatar_url ,html_url})=> {


    return (
        <div className='card'>
                <img src={avatar_url}/>
                       <h4>{login}</h4>
                 <a href={html_url } className='btn'>Veiew Profile</a>
          
        </div>
    )
}

export default Follower
