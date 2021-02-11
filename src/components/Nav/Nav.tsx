import React, { useState } from 'react'
import './styles/Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faQuestion, faBriefcase, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type NavProps = {
  siteName: string;
}

type Link = {
  name: string;
  link: string;
  fontAwesomeIcon: IconProp;
  alt: string;
}

function Nav (props: NavProps) {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const links: Link[] = [
    { name: 'Home', link: '/#home', fontAwesomeIcon: faHome, alt: '' },
    { name: 'About Us', link: '/#about-us', fontAwesomeIcon: faQuestion, alt: 'Learn More' },
    { name: 'Our Work', link: '/#our-work', fontAwesomeIcon: faBriefcase, alt: '' },
    { name: 'Contact Us', link: '/#contact-us', fontAwesomeIcon: faPencilAlt, alt: 'Hire Us' }
  ]

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
            links.map((item, index) => {
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
          links.map((item, index) => {
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
