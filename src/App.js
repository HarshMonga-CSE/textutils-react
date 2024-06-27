import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import React from "react";
import Alert from './components/Alert';
// import { Routes } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');    //Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);    

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() =>{
          setAlert(null);
        }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Harsh - Dark Mode'
      // setInterval(() => {
      //   document.title = 'Harsh is Amazing Mode'

      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Harsh Now'

      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Harsh - Light Mode'

    }
  }
  return (
  <> 
    {/* {/* <Router> */}
       <Navbar title="HARSH" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
            <div className="container my-3">
                {/* <Routes>
                  <Route path="/about" element={<About />} />                                  */}
                   <Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
                 
                  {/* <Route path="/" element={<Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
                </Routes> */}
             </div>
   {/* </Router> */}
 </>
  );
}

export default App;
