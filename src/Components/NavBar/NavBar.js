import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
  <div class="nav-left">
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
  </div>
  <div className="nav-right">
  <ul>
      <li>
        <div className="nav-language">
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </li>
     <button className='nav-btn'>SignIn</button>
    </ul>
    </div>
    </div>
  )
}

export default NavBar
