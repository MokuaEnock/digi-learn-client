import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
function Signup(props){
    // form input controls
  const [state, setState] = useState({
    firstname:"",
    lastname:"",
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
  // navigation to sign in
  const navigate = useNavigate();
  const navigateToSignIn = () =>{
    navigate("/login")
  }
    return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={navigateToSignIn}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Your First Name"
                  name="firstname"
                  value={state.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Your Last Name"
                  name="lastname"
                  value={state.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input 
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
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
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
    )

}
export default Signup