import React from "react"
import {image,pic} from "./Data"

function Home(){
    return(
        <>
    <div className='homeparent'>
        <h1>Putting Your Own Future<br></br>
        in Great Motion</h1>
       <div className="page" >
       <img src={image.url} alt="congrats"/>
                <div className="centre">
                    <ul>
                        <li><span style={{background:"red"}}>&#x2611;</span>Free</li>
                        <li><span style={{color:"red"}}>&#x2611;</span>Fast</li>
                        <li><span style={{color:"red"}}>&#x2611;</span>Beginner Friendly</li>
                    </ul>
                    <button >Get Started Now</button>
                    <p><span style={{color:"red",fontSize:"bold"}}>&#8594;</span>Proving you with a course management<br></br>
                    system to track your lectures and students</p>
                </div>
       <img src={pic.url} alt="congrats"/>
       </div>
    </div>

    </>)

}
export default Home
