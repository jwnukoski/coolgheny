import React from 'react'
import './styles/Header.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Link = {
  name: string;
  link: string;
  fontAwesomeIcon: IconProp;
  alt: string;
}

type HeaderProps = {
  siteName: string;
  callToAction: string;
  links: Link[];
}

function Header (props: HeaderProps) {
  return (
        <header id="home">
          <div className="vAlignWrapper">
            <div className="vPadTop"></div>
            <div className="vMidWrapper">
              <h1>{props.siteName}</h1>
              <h2>{props.callToAction}</h2>
              <div className="btnWrapper">
                <a className="learnBtn" href={props.links[1].link}>{props.links[1].alt}</a>
                <a className="hireBtn" href={props.links[3].link}>{props.links[3].alt}</a>
              </div>
            </div>
            <div className="vPadBottom"></div>
          </div>
        </header>
  )
}

export default Header
