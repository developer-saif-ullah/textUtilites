import React, {useState} from "react";


const TextForm = (props) => {
    const [text, setText] = useState("Enter Text Here");
    const handleUpClick = () =>{
        let newTxt = text.toUpperCase();
        setText(newTxt)
    }
    const handleLwClick = () =>{
        let newTxt = text.toLowerCase();
        setText(newTxt)
    }
    const handleClearClick = () =>{
        let newTxt = '';
        setText(newTxt)
    }
    const handleCopyClick = () =>{
       let txt = document.getElementById("textBox");
       txt.select();
       navigator.clipboard.writeText(txt.value)

    }
    const handleSpaceClick = () =>{
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "))
 
     }
    const handleOnChage = (e)=>{
        setText(e.target.value);

    }
  return (
    <>
        <div  className="container">
            <div className="form-group  my-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-4 fs-5" value={text} id="textBox" onChange={handleOnChage} rows="10" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLwClick}>Convert To LowerCase</button>
            <button className="btn btn-primary " onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary " onClick={handleSpaceClick}>Remove Extra Spaces</button>
            <h3 className="my-3">{text.split(" ").length- 1} words and {text.length} characters and {(0.008 * text.split(" ").length) }mins to read</h3>
        </div>
        <div className="container">
        </div>
    </>
  );
};

export default TextForm;
