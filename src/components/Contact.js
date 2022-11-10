import React, { useState } from "react"
//import { useNavigate } from "react-router-dom";
function Contact(props){
    // form input controls
  const [state, setState] = useState({
    fullname:"",
    phone:"",
    email: "",
    message: ""
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
              <h3 className="Auth-form-title">Contact Us</h3>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Your Fullname"
                  name="fullname"
                  value={state.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="+254....."
                  name="phone"
                  minLength={10}
                  value={state.phone}
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
                <label>Message</label>
                <textarea
                  type="text"
                  className="form-control mt-1"
                  placeholder="write your enquiry"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-danger">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className=""></div>
        </div>
        
    )
    

}
export default Contact