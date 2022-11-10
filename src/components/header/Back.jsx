import React from "react";



function Back({ name, title }) {
    return (
      <>
        <div className='back'>
          <div className='container'>
            <span>{name}</span>
            <h1>{title}</h1>
          </div>
          {/* <img src={cover} alt='' /> */}
        </div>
      </>
    )
  }
  
  export default Back
  