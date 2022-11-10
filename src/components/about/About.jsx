import React from "react";
import "./about.css";
// import img from "../img/aboutcard-image.jpg"
// import Back from "../header/Back";
import Heading from "../header/Heading";
import Awrapper from "../about/Awrapper";

function About() {
  return (
    <>
      <section id="about" className="about">
        {/* <Back name='' title='About Us - Who We Are?'  /> */}
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our  Story"
              subtitle="Check out About us "
            />

            <p>
              Digi Learn  is a platform designed to aid learning institutions manage their 
              school record better. They can be able to have all student details and also staff 
              details all in one place, which can be easily accessed. It is exceptionally productive and saves alot of time
            </p>
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className="right row"></div>
        </div>
      </section>
      <Awrapper />
    </>
  );
}
export default About;
