import React from "react";
import { image, pic } from "./Data";
import {useNavigate} from "react-router-dom"

function Home() {

  // navigate to sign up form
  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className="homeparent">
        <h1>
          Putting Your Own Future<br></br>
          in Great Motion
        </h1>
        <div className="page">
          <img src={image.url} alt="congrats" />
          <div className="centre">
            <ul>
              <li>
                <span style={{ background: "red" }}>&#x2611;</span>Free
              </li>
              <li>
                <span style={{ color: "red" }}>&#x2611;</span>Fast
              </li>
              <li>
                <span style={{ color: "red" }}>&#x2611;</span>Beginner Friendly
              </li>
            </ul>
            {/* navigation to sigin */}
            <button id="get_started" className="btn btn-danger" onClick={navigateToSignUp}>Get Started Now</button>
            <p>
              <span style={{ color: "red", fontSize: "bold" }}>&#8594;</span>
              Providing you with a course management<br></br>
              system to track your lectures and students
            </p>
          </div>
          <img src={pic.url} alt="congrats" />
        </div>
      </div>
    </>
  );
}
export default Home;
