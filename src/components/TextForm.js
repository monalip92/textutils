import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    /// console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces from text", "success");
  };
  const handleCopy = () => {
    // console.log("I am a copy");
    var text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!", "success");
  };
  const handlelowClick = () => {
    /// console.log("Lowercase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handlelclrClick = () => {
    /// console.log("values cleared" + text);
    let newText = "";
    setText(newText);
    props.showAlert("The text has been cleared", "success");
  };
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelclrClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes to read this words</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter here something in the textbox aboce to preview it here"}
        </p>
      </div>
    </>
  );
}
