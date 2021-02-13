import React, { useState } from 'react'
import './styles/Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Link = {
  name: string;
  link: string;
  fontAwesomeIcon: IconProp;
  alt: string;
}

type NavProps = {
  siteName: string;
  links: Link[];
}

function Nav (props: NavProps) {
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
          {
            props.links.map((item, index) => {
              return <a href={item.link} key={index} title={item.name}>
                <FontAwesomeIcon icon={item.fontAwesomeIcon}/>
              </a>
            })
          }
        </div>
      )
    }
  }

  return (
    <nav>
      <div className="brand">
        <span><div className="block"></div>{props.siteName}</span>
      </div>
      <div className="mobileMenu">
        <button onClick={toggleDisplayMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
        { getDisplayMenu(displayMobileMenu) }
      </div>
      <div className="desktopMenu">
        {
          props.links.map((item, index) => {
            return <a href={item.link} key={index}>
              <FontAwesomeIcon icon={item.fontAwesomeIcon}/>
              {item.name}
              </a>
          })
        }
      </div>
    </nav>
  )
}

export default Nav
