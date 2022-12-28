import React from "react";

export default class TrendCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <div className="trends px-3">
          <div className="trends-header">
            <span>Trends</span><span> &#183; </span><small><a href="">Change</a></small>
          </div>
          <ul className="trends-list">
            <li><a href="#">#Hongkong</a></li>
            <li><a href="#">#Ruby</a></li>
            <li><a href="#">#foobarbaz</a></li>
            <li><a href="#">#rails</a></li>
            <li><a href="#">#API</a></li>
          </ul>
        </div>
      </>
    )
  }
}

