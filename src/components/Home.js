import React from "react"
import {image,pic} from "./Data"

function Home(){
    return(
        <>
                <div className='homeparent'>
                    <h1>Putting Your Own Future<br></br>
                    in Great Motion</h1>
                        <div className="page" >
                            <  img src={image.url} alt="congrats"/>
                                        <div className="centre">
                                            <ul>
                                                <li><span style={{color:"red"}}>&#x2611;</span>Free</li>
                                                <li><span style={{color:"red"}}>&#x2611;</span>Fast</li>
                                                <li><span style={{color:"red"}}>&#x2611;</span>Beginner Friendly</li>
                                            </ul>
                                            <button style={{background:"#FF033E"}}>Get Started Now</button>
                                            <p><span style={{color:"red",}}>&#8594;</span>Proving you with a course management<br></br>
                                            system to track your lectures and students</p>
                                        </div>
                                <img src={pic.url} alt="congrats"/>
                        </div>
                </div>
            <div className="column">
                <div id="column_li">05 +
                  <p>Free Courses</p>
                </div>
                <div id="column_li">07 +
                    <p>Qualified Lectures</p>
                </div>
                <div id="column_li">100 +
                    <p>Ready Students</p>
                </div>
                </div>
   

    </>)
}

export default Home;