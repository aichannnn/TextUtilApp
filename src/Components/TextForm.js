import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        //console.log("uppercase was clicked!!"+Text);
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert('Converted to uppercase!!','success');
    }

    const handleLwclick = () =>{
      let NewText = text.toLowerCase();
      setText(NewText);
      props.showAlert('Converted to Lowercase!!','success');
    }

    const handleRWclick = ()=>{
      let NewText = text;
      let rText = '';
      let ch;
      for(let i=0;i<NewText.length;i++){
          ch = NewText.charAt(i);
          rText = ch+rText;
      }
      setText(rText);
      props.showAlert('content has been reversed!!','success');
    }

    const handleClearclick = ()=>{
      let NewText = '';
      setText(NewText);
      props.showAlert('Cleard ','success');
    }

    const handleExtraspaces = ()=>{
      let NewText = text.split(/[ ]+/);
      setText(NewText.join(" "))
      props.showAlert('Extra spaces has been removed','success');
    }

    const hanedlOnChange = (event)=>{
      setText(event.target.value);
  }
    const[text, setText] = useState("");
  return (
    <>
    <div className='container'style={{backgroundColor:props.mode ==='dark'?'#0C2D48':'white',color:props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hanedlOnChange} style={{backgroundColor:props.mode ==='light'?'white':'grey',
      color:props.mode ==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLwclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRWclick}>Reverse words</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>

    </div>
    <div className="container my-3" style={{backgroundColor:props.mode ==='dark'?'#0C2D48':'white' }}>
      <div style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').length} words and {text.length} characters.</p>
      <p>{0.008*text.split(' ').length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing to preview it here"}</p>
      </div>
    </div>
    </>
  )
}
