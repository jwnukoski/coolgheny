import React from 'react'
import './styles/Content.scss'

type ContentProps = {
  id?: string;
  displayContentRight: boolean;
  heading: string;
  content: string;
  imgLoc: string;
  imgAlt: string;
}

function Content (props: ContentProps) {
  function getContent (isLeft: boolean) {
    if ((isLeft && !props.displayContentRight) || (!isLeft && props.displayContentRight)) {
      return (
        <div className="col-6">
          <div className="vAlignWrapper">
            <div className="vPadTop"></div>
            <div className="vMidWrapper">
              <h2>{ props.heading }</h2>
              <p>{ props.content }</p>
            </div>
            <div className="vPadBottom"></div>
          </div>
        </div>
      )
    } else if ((isLeft && props.displayContentRight) || (!isLeft && !props.displayContentRight)) {
      return (
        <div className="col-6">
          <img src={ props.imgLoc } alt={ props.imgAlt }/>
        </div>
      )
    }
  }

  return (
        <section className="content" id={props.id}>
          <div className="container-fluid">
            <div className="row">
              { getContent(true) }
              { getContent(false) }
            </div>
          </div>
        </section>
  )
}

export default Content
