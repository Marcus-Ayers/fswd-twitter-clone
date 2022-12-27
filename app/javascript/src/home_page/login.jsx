import React, {Component} from "react";

function Login() {
    return (
      <div className='card p-2 mb-2 border rounded border-primary shadow'>
        <div className='log-in-title card-title'><h4>Login Here</h4></div>
          <div className="form-group">
              <input type="text" name='username'  className="form-control username mb-2 border border-primary" placeholder="Username"/>
          </div>
          <div className="form-group col-xs-8">
              <input type="password" name='password'  className="password my-2 border border-primary" placeholder="Password"/>
              <button type='submit' className="btn btn-default btn-primary col-xs-3 float-right">Log in</button>
          </div>
      </div>
    )
  }

export default Login