import LoginButton from "./LoginButton"
import React from 'react'

const MainLeft = () => {
    return (
        <div className='mainLeft'>
            <div className='content'>
                <h1>Gotta Catch 'Em All!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto optio delectus fugiat nulla iusto laborum quidem qui deleniti, vel numquam quibusdam perspiciatis, tempora velit suscipit excepturi, a non quis.</p>
                <LoginButton />
            <div className='otherContent'>
                <div className='cards'>
                <p>Latest Pokemon News:</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kdja9m4YlT4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>                     
            </div>    
                   
            </div>
        </div>
    )
}

export default MainLeft
