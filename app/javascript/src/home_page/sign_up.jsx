import React from "react";

function SignUp() {
  return (
    <div className='card p-2 mb-2 border rounded border-primary shadow'>
      <div className='log-in-title card-title'><h4>New to Twitter?</h4></div>
        <div className="form-group">
            <input type="text" name='username'  className="form-control username mb-2 border border-primary" placeholder="Username"/>
            <input type="email" name='email'  className="form-control email my-2 border border-primary" placeholder="Email"/>
            <input type="password" name='password'  className="form-control password my-2 border border-primary" placeholder="Password"/>
            
            <button type='submit' className="sign-up button btn btn-warning  ">Sign up for Twitter</button>
        </div>
        <div className="form-group col-xs-8">
            <div className="row">
              <div className="col">
            

              </div>
            </div>
        </div>
    </div>
  )
}
export default SignUp