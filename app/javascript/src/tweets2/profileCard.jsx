import React from 'react'
import { Component } from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';


class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'user',
        };

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

    render() {
        const { username } = this.state;
        return (
            <div className="profileCard border border-primary rounded shadow mb-3">
                <div className="profileCard-content">
                    <div className="user-field">
                        <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">{username}</a>
                        <br/>
                        <a className="screenName text-decoration-none ps-2 text-muted" href="#">@{username}</a>
                    </div>
                    <div className="user-stats row m-0">
                        <div className="col-3 d-flex justify-content-around ms-1">
                        <a href="" className='text-decoration-none text-muted'>
                            <span>Tweets<br/></span>
                            <span className="user-stats-tweets">10</span>
                        </a>
                        </div>
                        <div className="col-4 d-flex justify-content-around">
                        <a href="" className='text-decoration-none text-muted'>
                            <span>Following<br/></span>
                            <span className="user-stats-following">0</span>
                        </a>
                        </div>
                        <div className="col-4 d-flex justify-content-around">
                        <a href="" className='text-decoration-none text-muted ps-1'>
                            <span>Followers<br/></span>
                            <span className="user-stats-followers">0</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard