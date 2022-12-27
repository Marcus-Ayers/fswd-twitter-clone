import React, { Component } from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Login extends Component{
  constructor(props) {
    super(props)
    this.State = {
      username: '',
      password: ''
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'username':
        this.setState({username: value});
        break;
      case 'password':
        this.setState({password: value});
        break;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;

    fetch('/api/sessions', safeCredentials({
        method: 'POST',
        body: JSON.stringify({
        user: {
            username,
            password,
        }
        })
    }))
    .then(handleErrors)
    .then(data => {
        if (data.success) {
            window.location.href = '/tweets';
        }
        else {
            throw new Error('Invalid username or password');
        }
    })
    .catch(error => {
        alert(error);
    });
}

  render() {
    return (
      <div className='card p-2 mb-2 border rounded border-primary shadow'>
      <div className='log-in-title card-title'><h4>Login Here</h4></div>
      <form id='signup-form' onSubmit={this.handleSubmit}>

        <div className="form-group">
            <input type="text" name='username' value={this.username} onChange={this.handleChange} className="form-control username mb-2 border border-primary" placeholder="Username"/>
        </div>
        <div className="form-group col-xs-8">
            <div className="row">
              <div className="col-lg-12 col-xl-8">
            <input type="password" name='password' value={this.password} onChange={this.handleChange} className="form-control password my-2 border border-primary" placeholder="Password"/>
              </div>
              <div className="col">
            <button type='submit' className="login btn btn-default btn-primary ">Log in</button>
              </div>
            </div>
        </div>
      </form>
    </div>
    )
  }
}
export default Login


// import React, {Component} from "react";


// function Login() {
//     return (
//       <div className='card p-2 mb-2 border rounded border-primary shadow'>
//         <div className='log-in-title card-title'><h4>Login Here</h4></div>
//           <div className="form-group">
//               <input type="text" name='username'  className="form-control username mb-2 border border-primary" placeholder="Username"/>
//           </div>
//           <div className="form-group col-xs-8">
//               <div className="row">
//                 <div className="col-lg-12 col-xl-8">
//               <input type="password" name='password'  className="form-control password my-2 border border-primary" placeholder="Password"/>
//                 </div>
//                 <div className="col">
//               <button type='submit' className="login btn btn-default btn-primary ">Log in</button>
//                 </div>
//               </div>
//           </div>
//       </div>
//     )
//   }

// export default Login