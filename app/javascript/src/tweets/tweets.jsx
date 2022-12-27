import React from 'react'
import ReactDOM from 'react-dom'
// import Navbar from './navbar';
// import ProfileCard from './profileCard';
// import TrendsCard from './trendsCard';
// import Feedbox from './feedbox';

import './tweets.scss';


const Tweets = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="main container">
        <div className="row">
          <div className="profile-trends col-3">
            <h1> Hello 123456</h1>
            {/* <ProfileCard /> */}
            {/* <TrendsCard /> */}
          </div>
          {/* <Feedbox /> */}
        </div>
      </div>
    </React.Fragment>
  )
} 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Tweets />,
    document.body.appendChild(document.createElement('div')),
  )
})