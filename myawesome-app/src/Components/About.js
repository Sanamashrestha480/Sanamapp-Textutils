import React from "react";

export default function About(props) {
  /*   const [myStyle,setmyStyle]=useState({
    color:"black",
    backgroundColor:"white"
  }) */

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  /* const toggleStyle = ()=>{
if(myStyle.color==="white"){
  setmyStyle({
    color:"black",
    backgroundColor:"white",
    border:" 1px solid white"

  })
  setBtnText("Enable Dark Mode")
}
else{
  setmyStyle({
                color:"white",
                  backgroundColor:"black"
             })
             setBtnText("Enable Light Mode")
  }
} */

  return (
    <>
      <div className="container">
        <h2
          className="my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#554beb" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <strong>This is the React Js project coded by Mr. Sanam Shrestha. </strong>
          
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               <strong>  This is a Text Utility web program coded in React Js by Mr. Sanam Shrestha.</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                About Sanam Shrestha: Mr. Sanam is a self learnt programmer. He
                loves programming and want to start own web development company.
                He doesn't want academic qualification, instead he want some
                real coding in programming. Anyone interested can join his
                company. His e-mail is shresthasanam480@gmail.com.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <strong>Any Query? </strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Please e-mail me at shresthasanam480@gmail.com.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Say Yeah !</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#554beb" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Anyone who wants to learn about Full Stack Web Developer mail me at shresthasanam480@gmail.com
                 or Call me at +9779860934475
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
