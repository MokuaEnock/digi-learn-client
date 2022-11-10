import React from "react";
//import { image, pic } from "./Data";
import Image from "./img/image2.png";
import Pic from "./img/image3.png";
import Check from "./img/check-mark.png";
import {useNavigate} from "react-router-dom"


function Home() {

  // navigate to sign up form
  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  return (
    <main>
      <section className="main_section1">
        <div className="main_image" id="image1">
          <img src={Image} alt="student" />
        </div>

        <div className="main_content">
          <span id="span1">
            Putting Your Own Future <br />
            in Great Motion
          </span>
          <div id="span2">
            <span>
              <img src={Check} alt="checkbox" />
              <p>Free</p>
            </span>

            <span>
              <img src={Check} alt="checkbox" />
              <p>Fast</p>
            </span>

            <span>
              <img src={Check} alt="checkbox" />
              <p>Friendly</p>
            </span>
          </div>
          <button onClick={navigateToSignUp}>Get Started Now</button>
          <button>Get Started</button>
          <span id="span3">
            Providing you with a course management system to track your
            lecturers and students.
          </span>
        </div>

        <div className="main_image">
          <img src={Pic} alt="student" />
        </div>
      </section>
      <section className="main_section2">
        <div>
          <span>
            <span id="color1"></span>
            <p>05+</p>
          </span>
          <span>Free Courses</span>
        </div>

        <div>
          <span>
            <span id="color2"></span>
            <p>05+</p>
          </span>
          <span>Qualified Lecturers</span>
        </div>

        <div>
          <span>
            <span id="color3"></span>
            <p>05+</p>
          </span>
          <span>Ready Students</span>
        </div>
      </section>
    </main>
  );
}
export default Home;
