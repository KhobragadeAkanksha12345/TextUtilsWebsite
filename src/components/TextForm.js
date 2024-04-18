import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleloClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handelClearClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText ='';
        setText(newText)
        props.showAlert("Clear Text!", "success");
    }
    const handleOnChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy The Text!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success");
    }
    
    
   const [text, setText] = useState('');
   return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button  disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleloClick}>Convert to lowercase</button>
       <button  disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handelClearClick}>Clear Text</button>
       <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
       <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, and {text.length} charecters</p>
        <p> {0.008*text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing To preview"}</p>
    </div>
    </>
  )
}
export default TextForm;