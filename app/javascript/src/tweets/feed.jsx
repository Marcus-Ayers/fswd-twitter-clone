import React from 'react'
import ReactDOM from 'react-dom'

import './feed.scss';


const Feed = () => {
  return (
    <React.Fragment>
      <h1> Feed </h1>
    </React.Fragment>
  )
} 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})