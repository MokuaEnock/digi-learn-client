import React from "react"
import {image} from "./Data"

function Home(){
    return(
    <div className='homeparent'>
        <h1>Digital Platform <br></br>
        for all student <br></br>activity</h1>
        <img src={image.url} alt="congrats"/>
    </div>)

}
export default Home
