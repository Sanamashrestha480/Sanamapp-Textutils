import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#554beb";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Sanamapp-Dark Mode";

      // setInterval(() => {
      //   document.title = "Sanam app-Textutils";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Sanamapp is Amazing";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Sanamapp-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          Title="Sanamapp-Textutils"
          About="About Sanam"
          Home="Sanam Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            {/* <Route exact path="/about" element={<About />}> */}
            <Route exact path="/about" element={<About mode={mode}/>}>
         
            </Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try Textutils- Word Counter, Character Counter,Remove Extra Spaces"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
