import React from 'react'

const AboutPage = () => {
    return (
        <div className='mainLeft'>
            <div className='content'>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto optio delectus fugiat nulla iusto laborum quidem qui deleniti, vel numquam quibusdam perspiciatis, tempora velit suscipit excepturi, a non quis.</p>
                <div className='otherContent'>
                    <div className='cards'>
                        <p>Socials:</p>
                        <a className='socials' href='https://www.instagram.com'>instagram</a> <span>/ </span>
                        <a className='socials' href='https://www.youtube.com/'>youtube</a> <span>/ </span>
                        <a className='socials' href='https://www.facebook.com'>facebook</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage
