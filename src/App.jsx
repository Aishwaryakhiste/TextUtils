import './App.css';
import NavBar from './component/NavBar';
import Form from './component/Form';
import  About from './component/About';
import Alert from './component/Alert';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
 

function App() {
    const [mode,setMode]=useState("light");
    const toggleMode=()=>{
        
        if(mode==="light"){
            setMode("dark")
            document.body.style.backgroundColor="#3a5b8d";
            document.body.style.color="white";
            showAlert("success","Dark mode enabled!")
            document.title="Text Utils-Dark"
        }else{
            setMode("light")
            document.body.style.backgroundColor="white"
            document.body.style.color="black";
            showAlert("success","Light mode enabled!")
            document.title="Text Utils-light"
        }
    }
    const [alert,setAlert]=useState(null);
    const showAlert=(type,message)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }
    return ( 
        <Router>
          <NavBar name="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <Routes>
             <Route path="/" element={<Form label="Enter your text below " showAlert={showAlert} mode={mode} />}>
             </Route>
             <Route path="/About" element={<About />}>
             </Route>
           </Routes>
        </Router>
   
         
    );
}

export default App;




