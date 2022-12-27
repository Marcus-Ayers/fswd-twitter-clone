
import React from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.State = {
            email:'',
            username:'',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createSession = this.createSession.bind(this);

    }

    componentDidMount() {
        this.setState({email: '', username: '', password: ''});
    }

    handleChange = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case 'email':
                this.setState({email: value});
                break;
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
        const { email, username, password } = this.state;

        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
            user: {
                username,
                password,
                email,
            }
            })
        }))
        .then(handleErrors)
        .then(data => {
            if (data.success) {
                console.log('success');
                this.createSession();
            }
            else {
                throw new Error('Invalid username or password');
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    createSession = () => {
        const { username, password } = this.state;
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
                throw new Error('Invalid username or password for session');
            }
        })
        .catch(error => {
            alert(error);
        });
    }


    render() {
        return (
        <React.Fragment>
             <div className='card p-2 mb-2 border rounded border-primary shadow'>
      <div className='log-in-title card-title'><h4>New to Twitter?</h4></div>
      <form onSubmit={this.handleSubmit}>

        <div className="form-group">
            <input onChange={this.handleChange} type="text" name='username' value={this.username} className="form-control username mb-2 border border-primary" placeholder="Username"/>
            <input onChange={this.handleChange} type="email" name='email' value={this.email} className="form-control email my-2 border border-primary" placeholder="Email"/>
            <input onChange={this.handleChange} type="password" name='password' value={this.password} className="form-control password my-2 border border-primary" placeholder="Password"/>
            
            <button id="sign-in-btn" className="sign-up button btn btn-warning  ">Sign up for Twitter</button>
        </div>
        <div className="form-group col-xs-8">
            <div className="row">
              <div className="col">
            

              </div>
            </div>
        </div>
      </form>
    </div>
        </React.Fragment>
        )
    }
}

export default SignUp;




// import React from "react";

// function SignUp() {
//   return (
//     <div className='card p-2 mb-2 border rounded border-primary shadow'>
//       <div className='log-in-title card-title'><h4>New to Twitter?</h4></div>
//         <div className="form-group">
//             <input type="text" name='username'  className="form-control username mb-2 border border-primary" placeholder="Username"/>
//             <input type="email" name='email'  className="form-control email my-2 border border-primary" placeholder="Email"/>
//             <input type="password" name='password'  className="form-control password my-2 border border-primary" placeholder="Password"/>
            
//             <button type='submit' className="sign-up button btn btn-warning  ">Sign up for Twitter</button>
//         </div>
//         <div className="form-group col-xs-8">
//             <div className="row">
//               <div className="col">
            

//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }
// export default SignUp