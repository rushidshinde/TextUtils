import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUppercaseClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowercaseClick = () => {
        setText(text.toLocaleLowerCase());
    }
    const removeExtraSpaces = () => {
        setText((text.split(/[ ]+/)).join(" "));

    }
    const handleCopyClick = () => {
        if(text === " " || text === ""){
            props.showAlert('bi bi-exclamation-triangle-fill','Please enter some text or press Ctrl+v to paste','warning');
        } else{
            navigator.clipboard.writeText(text);
            props.showAlert('bi bi-check-circle-fill','Text copied to clipboard','info');
        }
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <div className="container" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
        <h1 className="mb-3">{props.header}</h1>    
        <div className="mb-3">        
            <textarea className="form-control" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#000000e6' : '#ffffff'}} onChange={handleOnChange} value={text} id="myBox" rows="10" placeholder="Type or paste your text here..."></textarea>
        </div>
        <div className="flex-start my-3">
            <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} me-3`} onClick={handleUppercaseClick}>CONVERT TO UPPERCASE</button>
            <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} me-3`} onClick={handleLowercaseClick}>convert to lowercase</button>
            <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} me-3`} onClick={removeExtraSpaces}>Remove extra spaces</button>
            <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} me-3`} onClick={handleCopyClick}>Copy to clipboard</button>
            <button className="btn btn-danger me-3" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="flex-start">
            <p>Character count : {text.length} | Word count : {text === "" ? 0 : text.split(" ").length} | Read time : {text === "" ? 0 : (0.008 * text.split(" ").length).toFixed(2)} minutes</p>
        </div>
    </div>
  )
}
