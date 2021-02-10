import React, { useState } from 'react'
import './styles/Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Nav () {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)

  function toggleDisplayMenu () {
    setDisplayMobileMenu(!displayMobileMenu)
  }

  function getDisplayMenu (display: boolean) {
    if (display) {
      return (
        <div className="mobileMenuDropDown">
          <button onClick={toggleDisplayMenu}>
            <FontAwesomeIcon icon={faTimes}/>
          </button>
        </div>
      )
    }
  }

  return (
    <nav>
      <div className="brand">
        <span><div className="block"></div>Your Website Name</span>
      </div>
      <div className="mobileMenu">
        <button onClick={toggleDisplayMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        { getDisplayMenu(displayMobileMenu) }
      </div>
      <div className="desktopMenu">

      </div>
    </nav>
  )
}

export default Nav
