import React from 'react'
import Tweet from './tweet'
import Tweetbox from './tweetbox'


function Feedbox(props) {
  return (
    <React.Fragment>
        <div className="col-6 feed-box border border-primary rounded shadow">
            <Tweetbox />
            <div className="feed mt-5">
                <Tweet />
                
            </div>
          </div>
    </React.Fragment>
  )
}



export default Feedbox