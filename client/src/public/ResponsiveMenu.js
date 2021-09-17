import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = () => {
    return (
        <div>
            <div className='navBottom'>
                <Link to='/pokelist' className='pokeball'><img src="https://cdn-icons-png.flaticon.com/128/188/188918.png" alt="pokeball" /></Link>
                <Link to='/About' className='about'><img src="https://img.icons8.com/color/50/000000/heart-pokemon.png" alt=' about' /></Link>
                <form className='searchBox' action="">
                    <input type="search" id="search" name="search" placeholder='Search' />
                </form>
            </div>
        </div>
    )
}

export default ResponsiveMenu
