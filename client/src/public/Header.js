import { Link } from 'react-router-dom';
const Header = () => { 
    return (
        <div className='nav'>            
            <div className='logo'>
              <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/120px-International_Pok%C3%A9mon_logo.svg.png" alt="logo"/></Link>
            </div>
            <div className='rightSide isActive'>                
                <Link to='/pokelist' className='navRight'>Pokemon Deck</Link>
                <Link to='/About' className='navRight'>About</Link>                
                <form className='searchBox' action="">
                    <input type="search" id="searchHeader" name="search" placeholder='Search' />               
                </form>   
            </div>             
        </div>
    )
}
export default Header
