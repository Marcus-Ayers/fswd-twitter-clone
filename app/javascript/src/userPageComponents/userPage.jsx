import React from 'react'
import ReactDOM from 'react-dom'
import { authenticate, deleteOneTweet, getUserTweets } from '../../utils/request';
import FeedBox from '../feedComponents/feedBox';
import FeedNav from '../feedComponents/feedNav';
import ProfileCard from '../feedComponents/profileCard';
import TrendCard from '../feedComponents/trendCard';

import './userPage.scss';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      profileName: '',
      tweets: [],
      tweetCount: 0
    }
    this.refreshTweets = this.refreshTweets.bind(this)
  } 

  componentDidMount () {
    const username = window.location.pathname.replace('/', '');
    this.getUserName();
    this.refreshTweets(username);
    this.setState ({
      profileName: username
    })
  }

  refreshTweets (username = this.state.profileName) {
    getUserTweets(username, (data) => {
      this.setState({
        tweets: data.tweets,
        tweetCount: data.tweets.length,
      })
    })
  }

  // profile user = log in user when page first loaded
  getUserName = () => {
    authenticate((data) => {
      this.setState({
        username: data.username
      })
    })
  }

  deletePost = (event) => {
    event.preventDefault();
    deleteOneTweet(event.target.id, (data) => {
      this.refreshTweets()
    })
    this.setState({
      tweetCount: this.state.tweetCount-1
    })
  }


  render () {

    return (
      <>
        <FeedNav username={this.state.username}/>
        <div className='main container'>
          <div className='row'>
            <div className='col-12 col-md-4 profile-trends'>
              <ProfileCard username={this.state.profileName} tweetCount = {this.state.tweetCount} />
              <TrendCard/>
            </div>
            <div className='col-12 col-md-8 tweet-box'>
              <FeedBox tweets={this.state.tweets} username={this.state.username} reload={this.refreshTweets} userTweetPage={this.getUserTweetPage} deletePost={this.deletePost} profileName={this.state.profileName}/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <UserPage />,
    document.body.appendChild(document.createElement('div')),
  )
})