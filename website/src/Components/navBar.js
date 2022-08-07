import React from 'react'
import Logo from '../assets/ReactSymbol.PNG'

function navBar() {
  return (
    <div className = "navbar">
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        
        <div className='rightSide'></div>
      
    </div>
  )
}

export default navBar
