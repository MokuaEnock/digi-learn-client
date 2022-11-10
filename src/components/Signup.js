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
  // post request to backend
  const userdetails = props.userdetails;
  const setUserdetails = props.setUserdetails;
  function handleSubmit(evt) {
    evt.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        setUserdetails([
          ...userdetails,
          data
        ]);
      })
  }

  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(state);
  // };
  // navigation to sign in
  const navigate = useNavigate();
  const navigateToSignIn = () =>{
    navigate("/login")
  }
  const navigateToResetPassword = () =>{
    navigate("/resetpassword")
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                  minLength={8}
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-danger">
                  Sign Up
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
export default Signup