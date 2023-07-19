import React, {useState} from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  };

  const handleclearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");

  };

  const handlecopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleextraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-2">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#554beb" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleclearText}>
          Clear Text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlecopyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraSpace}>
          Remove Extra Spaces
        </button>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your Text Summary </h2>
          <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  {text.length}  characters
          </p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter Something in the textbox to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
