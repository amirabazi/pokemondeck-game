const Header = () => {
    return (
        <div className='nav'>            
            <div className='logo'>
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/120px-International_Pok%C3%A9mon_logo.svg.png" alt=""/></a>
            </div>
            <div className='rightSide'>
                <a href="/pokelist">Pokemon Deck</a>
                <a href="/About">About</a>
                <form className='searchBox' action="">
                    <input type="search" id="search" name="search" placeholder='Search' />                
                </form>    
            </div>        
        </div>
    )
}
export default Header
