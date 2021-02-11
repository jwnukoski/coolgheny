import React from 'react'
import './styles/NavItem'

type NavItemProps = {
  link: string,
  name: string
}

function NavItem (props: NavItemProps) {
  return (
    <li>
      <a href={props.link}>{props.name}</a>
    </li>
  )
}

export default NavItem
