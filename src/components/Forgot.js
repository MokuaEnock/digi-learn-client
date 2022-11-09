import { useNavigate } from 'react-router-dom'
import React, { useState } from "react"

function Forgot(){
  // navigation to sign in
  const navigate = useNavigate();
  const navigateToSignIn = () =>{
    navigate("/login")
  }
  // navigation to sign up    
  const navigateToSignUp = () => {
    navigate('/signup');
  };  
  //form input controls
  const [state, setState] = useState({
    email: ""
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
     
  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Reset Password</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-danger" onClick={navigateToSignUp}>
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
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-danger">
                Reset Password
              </button>
            </div>
            <div className="text-center">
              Have An Account?{" "}
              <span className="link-danger" onClick={navigateToSignIn}>
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
  )

}


export default Forgot