// import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar';
import Textbox from './container/Textbox';
import React,{useState} from 'react'
import Alert from './container/Alert';




function App() {

  const[mode,setMode]=useState("light") ;
  const modeChange=()=>{
   
      if (mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="gray";
      document.querySelector(".heading").style.color="white";
      document.querySelector(".heading2").style.color="white";
      document.querySelector(".mystyl").style.color="white";
      document.querySelector(".mystyl").style.backgroundColor="darkgray";
      showAlert("Dark mode is on");
       
      
           }
       else{
         setMode("light")
         document.body.style.backgroundColor="white";
         document.querySelector(".heading2").style.color="black";
         document.querySelector(".heading").style.color="black";
         document.querySelector(".mystyl").style.color="black";
         document.querySelector(".mystyl").style.backgroundColor="white";
         showAlert("light mode is on");
        
       }    
       
     }
  
  const[alert,setAlert]=useState(null) ;

  const showAlert=(msg)=>{

    setAlert(msg);
    setTimeout(()=>{setAlert(null)},1500)

  }
    

  return (
  <>
    <div >
      <Navbar title="Text Bang" aboutUs="About Me" home="Home" mode={mode} modeChange={modeChange}/>

    <div style={{height:"50px"}}>
      <Alert alert={alert}/>
    </div>
z
      <Textbox  alert={alert} showAlert={showAlert}/>
    </div>
 
   
  </>
  );
}

export default App;
