import React from "react";
import { authenticate, logoutUser } from "../utils/request";

export default class FeedNav extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)
    this.homepage = this.homepage.bind(this)
  };

  logout = () => {
    logoutUser(success => {
      window.location.href = '/'
    })
  }

  homepage = () => {
    window.location.href = '/feed'
  }


  render() {
    const { username } = this.props
    return (
      <>
        <nav className="navbar navbar-light bg-light py-0 fixed-top">
          <div className="container mx-0 px-3">
            <div className="navbar-header">
              <a className="navbar-brand" href="#" onClick={this.homepage}>
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="d-flex">
              <div className="search-bar nav navbar-right">
                <div className="input-group">
                  <input type="text" className="form-control py-0 search-input" placeholder="Search for..."/>
                  <span className="input-group-btn">
                    <button className="btn search-btn" type="button">Go!</button>
                  </span>
                </div>
              </div>
              <div className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {username}
                </a>
                <ul className="dropdown-menu m-0 dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li ><a href="#" className="username px-2">{username}</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a className="px-2" href="#">Lists</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a className="px-2" href="#">Help</a></li>
                  <li ><a className="px-2" href="#">Keyboard shortcuts</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a className="px-2" href="#">Settings</a></li>
                  <li ><a className="px-2" id="log-out" href="#" onClick={this.logout}>Log out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}