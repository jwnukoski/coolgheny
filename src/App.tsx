import React from 'react'
import './styles/App.scss'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Badges from './components/Badges/Badges'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import { faHome, faQuestion, faBriefcase, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Link = {
  name: string;
  link: string;
  id: string;
  fontAwesomeIcon: IconProp;
  alt: string;
}

function App () {
  const siteName: string = 'Your Website Name'
  const callToAction: string = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  const links: Link[] = [
    { name: 'Home', link: '/#home', fontAwesomeIcon: faHome, id: 'home', alt: '' },
    { name: 'About Us', link: '/#about-us', fontAwesomeIcon: faQuestion, id: 'about-us', alt: 'Learn More' },
    { name: 'Our Work', link: '/#our-work', fontAwesomeIcon: faBriefcase, id: 'our-work', alt: '' },
    { name: 'Contact Us', link: '/#contact-us', fontAwesomeIcon: faPencilAlt, id: 'contact-us', alt: 'Hire Us' }
  ]

  return (
    <div className="App">
      <Nav siteName={siteName} links={links}/>
      <Header siteName={siteName} callToAction={callToAction} links={links}/>
      <main>
        <Badges/>
        <Content displayContentRight={false} heading={'Lorem ipsum'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} imgLoc={'img/placeholder.jpg'} imgAlt={'a placeholder image'} id={links[1].id}/>
        <Content displayContentRight={true} heading={'Lorem ipsum'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} imgLoc={'img/placeholder.jpg'} imgAlt={'a placeholder image'} id={links[2].id}/>
        <Contact id={links[3].id}/>
      </main>
      <Footer siteName={siteName}/>
    </div>
  )
}

export default App
