import {useState} from 'react'
function Form(props){
    const [text,setText]=useState("")
    function textChanged(e){
        setText(e.target.value)
    }
    function upperCase(){
     setText(text.toUpperCase())
     props.showAlert("success","Text converted to uppercase!")
    }
    function lowerCase(){
     setText(text.toLowerCase())
     props.showAlert("success","Text converted to lowercase!")
    }
    function clear(){
        setText("");
        props.showAlert("success","Text area cleared!")
    }
    function handleCopy(){
        let text=document.getElementById("textArea")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success","Text copied to clipboard!")
    }
    
    function handleSpaces(){
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("success","Extra spaces removed!")
    }
    
    return(
        
         <div className="mb-3 container my-3">
          <h1>{props.label}</h1>
          <textarea className="form-control" style={{backgroundColor : props.mode==="light"?"white":"#3d5270", color : props.mode==="light"?"black":"white"}} id="textArea" value={text} onChange={textChanged} rows="8"></textarea>
          <button className={props.mode==="light"?'btn btn-primary my-3 mx-2':'btn btn-dark my-3 mx-2'} onClick={upperCase}>Convert to Upper case</button>
          <button className={props.mode==="light"?'btn btn-primary my-3 mx-2':'btn btn-dark my-3 mx-2'}  onClick={lowerCase}>Convert to Lower case</button>
          <button className={props.mode==="light"?'btn btn-primary my-3 mx-2':'btn btn-dark my-3 mx-2'}  onClick={clear}>Clear</button>
          <button className={props.mode==="light"?'btn btn-primary my-3 mx-2':'btn btn-dark my-3 mx-2'}  onClick={handleCopy}>Copy Text</button>
          <button className={props.mode==="light"?'btn btn-primary my-3 mx-2':'btn btn-dark my-3 mx-2'}  onClick={handleSpaces}>Remove Extra Spaces</button>
           <div>
            <p>
                {text.split(" ").length} words and {text.length} letters.
            </p>
                     
            <h2>Priview</h2>
            <p>{text}</p>
            </div>   
        </div>
       
    );
}

export default Form;
