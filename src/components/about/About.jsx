import React from "react";
import "./about.css";
// import img from "../img/aboutcard-image.jpg"
// import Back from "../header/Back";
import Heading from "../header/Heading";
import Awrapper from "./Awrapper";

function About(){
    return(
        <>
        <section id="about" className='about'>
          {/* <Back name='' title='About Us - Who We Are?'  /> */}
          <div className='container flex mtop'>
            <div className='left row'>
              <Heading title='Our  Story' subtitle='Check out our company story ' />
  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus numquam eos reiciendis alias, expedita, quidem explicabo hic voluptates voluptate dolor repudiandae quis corrupti nulla, iste mollitia similique dolorum animi?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi praesentium vero repellendus animi commodi architecto qui, ipsam reiciendis odio eligendi ut? Reprehenderit, aut itaque impedit accusantium alias quaerat culpa distinctio.</p>
              {/* <button className='btn2'>More About Us</button> */}
            </div>
            <div className='right row'>
            
            </div>
          </div>
        </section>
        <Awrapper/>
      </>
    )
}
export default About;

