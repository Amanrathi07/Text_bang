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

  const hendelDownClicked=function hendelUpClicked(){
    let newText=text.toLowerCase() ;
    setText(newText);
  }

  return (
    <>    
  <div className="container">
    <h3 className="p-3">Text Area</h3>
    <textarea placeholder='Enter your text' value={text} className="col-sm-11" rows="13" onChange={handelOnChange} ></textarea>

  <div>    
    <button onClick={hendelUpClicked}  className="mt-4 btn btn-primary ">convert to upper</button>
    <button onClick={hendelDownClicked}  className="mx-2 mt-4 btn btn-primary ">convert to lower</button>
  </div>
    
  </div>
      
    </>
  )
}
