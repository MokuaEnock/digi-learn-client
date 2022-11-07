import React from "react"
import {image} from "./Data"

function Home(){
    return(
    <div className='homeparent'>
        <h2>Hello its good that we</h2>
            <img src={image.url} alt="congrats"/>
    </div>)

}
export default Home
