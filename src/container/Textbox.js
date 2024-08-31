import React from 'react'

export default function Textbox() {
  return (
    <>

    
  <div className="container">
    <h3 className="p-3">Text Area</h3>
    <textarea className="col-sm-11" rows="13" ></textarea>

  <div>    
    <button onClick={()=>{console.log("btn was clicked");}} className="mt-5 btn btn-primary ">convert to upper</button>
  </div>
    
  </div>

   
    
    
   
    
    </>
  )
}
