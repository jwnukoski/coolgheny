import React from 'react'
import './styles/Header.scss'

type HeaderProps = {
  siteName: string;
  callToAction: string;
}

function Header (props: HeaderProps) {
  return (
        <header>
          <div className="verticalPadTop"></div>
          <div className="midContentWrapper">
            <h1>{props.siteName}</h1>
            <h2>{props.callToAction}</h2>
            <a className="learnBtn" href="/#about-us">LEARN MORE</a>
            <a className="hireBtn" href="/#contact-us">HIRE US</a>
          </div>
          <div className="verticalPadBottom"></div>
        </header>
  )
}

export default Header
