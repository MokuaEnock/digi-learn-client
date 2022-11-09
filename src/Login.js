
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
// first install bootstrap
// npm install -save bootstrap
// then install react dom
// npm install --save react-router-dom
function Login(props) {
  // form input controls
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);

  };
  
  // navigate to sign up form
  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  // navigation toreset password
  const navigateToResetPassword = () => {
    navigate("/resetpassword")
  }  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={navigateToSignUp}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                minLength={8}
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-danger">
                Sign In
              </button>
            </div>
            <div className="text-center">
                Forgot Password?{" "}
                <span className="link-primary" onClick={navigateToResetPassword}>
                  Reset Password
                </span>
              </div>
          </div>
        </form>
      </div>
    )

}
export default Login