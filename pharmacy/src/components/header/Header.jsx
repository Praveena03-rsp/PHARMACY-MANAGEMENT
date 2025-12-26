import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom';
import './Header.css';
function Header() {
    const Header=({user,cart,onLogout})=>{
        const navigate= useNavigate();
        const location= useLocation();  


        const cartCount= cart.reduce((total,item)=> total + item.quantity,0);
        const isActive=(path)=>location.pathname=== path;
        }
  return (
    <header className="header">
        <div className="header-container">
            <h1 className="header-title" onClick={()=> navigate('/')}>PharmaCare</h1>
            <nav className="header-nav">
                <button onClick={()=>navigate('/about')} className={`header-link ${isActive('/about') ? 'active' : ''}`} >Home </button>
                <button onClick={()=>navigate('/medicines')} className={`header-link ${isActive('/medicines') ? 'active' : ''}`} >Medicines </button>
                <button onClick={()=>navigate('/history')} className={`header-link ${isActive('/history') ? 'active' : ''}`} >Order History </button>
                <button onClick={()=>navigate('/cart')} className={`header-link-cart ${isActive('/cart') ? 'active' : ''}`} > Cart({cartCount}) </button>
                <div className="header-user">
                    {user}<button onClick={onLogout} className="header-logout">Logout</button>
                </div>
            </nav>
        </div>
    </header>
  );
};

export default Header;
