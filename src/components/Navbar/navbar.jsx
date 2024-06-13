import {React,useContext,useState} from 'react';
import '../Navbar/navbar.css'
import { assets } from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate();
  const logOut = () => {
   localStorage.removeItem("token");
   setToken("");
   navigate("/");
  }
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo} alt="logo" className="logo" /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu === "home"?"active":""}>home</Link>
        <a href='#app-download' onClick={()=>setmenu("mobile app")} className={menu === "mobile app"?"active":""}>mobile app</a>
        <a href='#exploremenu' onClick={()=>setmenu("menu")} className={menu === "menu"?"active":""}>menu</a>
        <a href='#footer' onClick={()=>setmenu("contact")} className={menu === "contact"?"active":""}>contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to='/Cart'> <img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>log in</button>:<div className='navbar-profile'>
        <img src={assets.profile_icon} alt="" />
        <ul className='nav-profile-dropdown'>
         <li onClick={()=>navigate("/myorders")} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
         <hr />
         <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
        </ul>
        </div>
}
      </div>
    </div>
  )
}

export default Navbar