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

  const textClear=()=>{
    setText("");
  }
  const testCopy=()=>{
    let text=document.querySelector("#my_box")
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);  } 

  const handelExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }  
  
  
  
  

  return (
    <>    
  <div className="container">
    <h3 className="p-3">Text Area</h3>
    <textarea placeholder='Enter your text' id='my_box' value={text} className="col-sm-11" rows="13" onChange={handelOnChange } ></textarea>

   
  </div>

  <div className="mx-5">    
    <button onClick={hendelUpClicked} disabled={text.length>0 ? false :true }  className="pl-5 mt-4 btn btn-primary ">convert to upper</button>

    <button onClick={hendelDownClicked} disabled={text.length>0 ? false :true } className="mx-2 mt-4 btn btn-primary ">convert to lower</button>

    <button onClick={textClear} disabled={text.length>0 ? false :true } className="mx-2 mt-4 btn btn-primary">clear</button>
    <button onClick={testCopy} disabled={text.length>0 ? false :true } className="mx-2 mt-4 btn btn-primary">copy</button>
    <button onClick={handelExtraSpace} disabled={text.length>0 ? false :true }  className="mx-2 mt-4 btn btn-primary">remove extra space</button>
    
    
  </div>
  <div className="my-4 container">
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <hr/>
    <p>{text.length>0 ? text : "enter text for pre-view"}</p>
  </div>
      
    </>
  )
}
