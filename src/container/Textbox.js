import React , {useState} from 'react'


export default function Textbox(props) {

  const[text,setText]=useState('');

  const handelOnChange=(event)=>{
    setText(event.target.value);
  }
  const hendelUpClicked=function hendelUpClicked(){
    let newText=text.toUpperCase() ;
    setText(newText);
    props.showAlert("converted to upper case");
  }

  const hendelDownClicked=function hendelUpClicked(){
    let newText=text.toLowerCase() ;
    setText(newText);
    props.showAlert("converted to lower-case");
  }

  const textClear=()=>{
    setText("");
    props.showAlert("text clered");
  }
  const testCopy=()=>{
    let text=document.querySelector("#my_box")
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value); 
    props.showAlert("copy to clipboard");
   } 

  const handelExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra space removed");
  }  
  
  
  
  

  return (
    <>    
  <div className="mt-1 container">
    <h3 className="heading px-3" >Text Area</h3>
    <textarea placeholder='Enter your text'  id='my_box' value={text} className="mystyl col-12" rows="12" onChange={handelOnChange } ></textarea>

   
  </div>

  <div className="container">    
    <button onClick={hendelUpClicked} disabled={text.length>0 ? false :true }  className="mybtn pl-5 mt-4 btn btn-primary ">convert to upper</button>

    <button onClick={hendelDownClicked} disabled={text.length>0 ? false :true } className=" mybtn mx-2 mt-4 btn btn-primary ">convert to lower</button>

    <button onClick={textClear} disabled={text.length>0 ? false :true } className="mx-2 mt-4 btn btn-primary">clear</button>
    <button onClick={testCopy} disabled={text.length>0 ? false :true } className="mx-2 mt-4 btn btn-primary">copy</button>
    <button onClick={handelExtraSpace} disabled={text.length>0 ? false :true }  className="mybtn mx-2 mt-4 btn btn-primary">remove extra space</button>
    
    
  </div>
  <div className="heading2 my-4 container">
    <p >{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
    <hr/>
    <p >{text.length>0 ? text : "enter text for pre-view"}</p>
  </div>
      
    </>
  )
}
