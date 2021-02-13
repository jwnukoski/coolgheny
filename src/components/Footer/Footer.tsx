import React from 'react'
import './styles/Footer.scss'

type FooterProps = {
  siteName: string;
}

function Footer (props: FooterProps) {
  return (
        <footer>
          <h2>Let’s work together on your next web project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </footer>
  )
}

export default Footer
