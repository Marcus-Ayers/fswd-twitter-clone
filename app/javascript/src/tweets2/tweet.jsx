import React from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      username: '',
    };

    this.deleteTweet = this.deleteTweet.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  componentDidMount() {
    this.getUsername();
  }

  getUsername() {
    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(data => {
      this.setState({ 
        username: data.username });
    })
  }
   
  deleteTweet() {
    const { id } = this.props;
    fetch(`/api/tweets/${id}`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      this.props.deleteTweet(id);
    })
  }


  render() {
    const { content, username} = this.state;


    return (
      <React.Fragment>
        <div className="tweet border border-primary rounded shadow mb-3">
          <div className="tweet-content bg-light">
            <div className="user-field">
              <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">{username}</a>
              <br />
              <a className="screenName text-decoration-none ps-2 text-muted" href="#">@{username}</a>
            </div>
            <div className="tweet-field">
              <p className="tweet-content ps-2">{content}</p>
            </div>
            <div className='delete-button btn m-2 btn-outline-danger' onClick={() => deleteTweet()}>Delete</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Tweet
