import React , {useEffect} from 'react'
import './Navbar.css'
import decode from 'jwt-decode';
import { Link, useNavigate} from 'react-router-dom';

import logo from '../../assessts/logo.svg'
import search from '../../assessts/search.svg'
import Avatar from '../../components/Avatar/Avatar'
// import { setCurrentUser } from '../../actions/currentUser';

import { useSelector, useDispatch } from 'react-redux';

import currentUser from '../../actions/currentUser'

const Navbar = () => {

    
  var User = useSelector((state) => (state.currentReducer))
  console.log(User)
  const dispatch = useDispatch()
  const navigate= useNavigate()

useEffect(() => {
  const token = User?.token
  // if I left webpage for 1 hr it will logout automatically, security purpose
  if (token) {
    const decodeToken = decode(token)
    if (decodeToken.exp * 1000 < new Date().getTime()) {
       handleLogout()
    }
  }
  dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
}, [dispatch]) 

    
const handleLogout = () => {
  dispatch({type: 'LOGOUT'});
  navigate('/')
  dispatch(currentUser(null))
}




  return (
    <nav className="main-nav">
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width="135px"/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            {User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log In</Link>
                :
                <>
                    <Avatar backgroundColor='#009bff' px='10px' py='7px' borderRadius='50%' color='white' ><Link to={`/Users/${User?.result._id}`} style={{textDecoration: "none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar;