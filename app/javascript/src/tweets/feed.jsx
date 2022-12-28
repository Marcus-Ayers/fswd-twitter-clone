import React from 'react'
import ReactDOM from 'react-dom'
import FeedNav from './feedNav';
import ProfileCard from './profileCard';
import TrendCard from './trendCard';
import { authenticate, deleteOneTweet, getAllTweets, getUserTweets } from "../utils/request";


import './feed.scss';
import FeedBox from './feedBox';


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      tweets: [],
      tweetCount: 0
    }
    this.refreshTweets = this.refreshTweets.bind(this)
    this.getUserTweetCount = this.getUserTweetCount.bind(this)
    this.getUserTweetPage = this.getUserTweetPage.bind(this)
  } 

  componentDidMount () {
    this.getUserName();
    this.refreshTweets();
  }

  refreshTweets = () => {
    getAllTweets((data) => {
      this.setState({
        tweets: data.tweets,
        tweetCount: this.state.tweetCount + 1
      })
    })
  }

  getUserName = () => {
    authenticate((data) => {
      this.getUserTweetCount(data.username)
      this.setState({
        username: data.username,
      })
    })
  }

  getUserTweetCount = (username) => {
    getUserTweets(username, (data) => {
      this.setState({
        tweetCount: data.tweets.length
      })
    })
  }

  getUserTweetPage = (event) => {
    getUserTweets(event.target.textContent, (data) => {
      this.setState({
        tweets: data.tweets,
        tweetCount: data.tweets.length
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
        <div className='main container mx-0'>
          <div className='row'>
            <div className='col-12 col-md-4 profile-trends'>
              <ProfileCard username={this.state.username} tweetCount = {this.state.tweetCount} />
              <TrendCard/>
            </div>
            <div className='col-12 col-md-8 tweet-box'>
              <FeedBox tweets={this.state.tweets} username={this.state.username} reload={this.refreshTweets} userTweetPage={this.getUserTweetPage} deletePost={this.deletePost}/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})