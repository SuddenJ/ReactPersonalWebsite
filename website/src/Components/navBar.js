import React from 'react'
import Logo from '../assets/ReactSymbol.PNG'
import '../styles/NavBar.css'
import { Outlet, Link } from "react-router-dom";


function NavBar() {
  return (
    <div className = "navbar">
        <div className='leftSide'>
            <h1><i>react</i></h1> 
            <img src={Logo}/>
            <h1>Website by Josh</h1>
        </div>
        
        <div className='rightSide'>
        {/* <Link to="/invoices">Invoices</Link> |{" "} */}
        <a href="https://joshreadmeaboutsite.blogspot.com/">Read Me about creating this site</a> |{" "}
        <Link to="/cryptoPriceApi">Crypto Price Api</Link>
        </div>
      
    </div>
  )
}

export default NavBar
