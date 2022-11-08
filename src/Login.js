
import React, { useState } from "react"
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
  
  // switch between sign in and sign up
  //let [authMode, setAuthMode] = useState("signin")

  //const changeAuthMode = () => {
    //setAuthMode(authMode === "signin" ? "signup" : "signin")
  //}

  //if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary">
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
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  //}

  // return (
  //   <div className="Auth-form-container">
  //     <form className="Auth-form" onSubmit={handleSubmit}>
  //       <div className="Auth-form-content">
  //         <h3 className="Auth-form-title">Sign Up</h3>
  //         <div className="text-center">
  //           Already registered?{" "}
  //           <span className="link-primary" onClick={changeAuthMode}>
  //             Sign In
  //           </span>
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Full Name</label>
  //           <input
  //             type="text"
  //             className="form-control mt-1"
  //             placeholder="e.g Jane Doe"
  //             required
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Email address</label>
  //           <input 
  //             type="email"
  //             className="form-control mt-1"
  //             placeholder="Email Address"
  //             required
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             className="form-control mt-1"
  //             placeholder="Password"
  //             required
  //           />
  //         </div>
  //         <div className="d-grid gap-2 mt-3">
  //           <button type="submit" className="btn btn-primary">
  //             Sign Up
  //           </button>
  //         </div>
  //         <p className="text-center mt-2">
  //           Forgot <a href="#">password?</a>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // )
}
export default Login