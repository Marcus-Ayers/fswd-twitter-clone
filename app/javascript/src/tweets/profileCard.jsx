import React from "react";

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { username, tweetCount } = this.props

    return (
      <>
        <div className="profileCard">
          <div className="profileCard-content">
            <div className="user-field px-3">
              <a className="username" href="#">{username}</a><br/>
              <a className="screenName" href="#">@{username}</a>
            </div>
            <div className="row user-stats px-3">
              <div className="col-4">
                <a href="">
                  <span>Tweets<br/></span>
                  <span className="user-stats-tweets">{tweetCount}</span>
                </a>
              </div>
              <div className="col-4">
                <a href="">
                  <span>Following<br/></span>
                  <span className="user-stats-following">0</span>
                </a>
              </div>
              <div className="col-4">
                <a href="">
                  <span>Followers<br/></span>
                  <span className="user-stats-followers">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

