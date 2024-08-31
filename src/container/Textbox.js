import React , {useState} from 'react'

export default function Textbox() {

  const[text,setText]=useState('');

  const handelOnChange=(event)=>{
    setText(event.target.value);
  }
  const hendelUpClicked=function hendelUpClicked(){
    let newText=text.toUpperCase() ;
    setText(newText);
  }

  return (
    <>    
  <div className="container">
    <h3 className="p-3">Text Area</h3>
    <textarea placeholder='Enter your text' value={text} className="col-sm-11" rows="13" onChange={handelOnChange} ></textarea>

  <div>    
    <button onClick={hendelUpClicked}  className="mt-5 btn btn-primary ">convert to upper</button>
  </div>
    
  </div>
      
    </>
  )
}
