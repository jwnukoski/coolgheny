import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/Badges.scss'

function Badges () {
  return (
        <section className="badges">
          <div className="container-fluid">
            <div className="row">
              <article className="col-xl-4 col-lg-4 col-mg-4 col-sm-12 col-12">
                <div><FontAwesomeIcon icon={faCheckCircle}/></div>
                <h2>Fixed Price</h2>
                <p>Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
              </article>
              <article className="col-xl-4 col-lg-4 col-mg-4 col-sm-12 col-12">
                <div><FontAwesomeIcon icon={faCheckCircle}/></div>
                <h2>On time</h2>
                <p>Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
              </article>
              <article className="col-xl-4 col-lg-4 col-mg-4 col-sm-12 col-12">
                <div><FontAwesomeIcon icon={faCheckCircle}/></div>
                <h2>Fast Work</h2>
                <p>Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.</p>
              </article>
            </div>
          </div>
        </section>
  )
}

export default Badges
