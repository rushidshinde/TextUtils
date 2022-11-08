import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  if(mode === 'light') {
    document.body.style.backgroundColor = "#f8f9fa";
  }
  const showAlert = (heading,message,type) => {
    setAlert({
      heading: heading,
      message: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#071E3D"
    } else{
      setMode('light');
      document.body.style.backgroundColor = "#f8f9fa"
    }
  }
  return (
    <> 
      <Router>        
        <Navbar navBrand="TextUtils" toggleMode={toggleMode} mode={mode} ></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-4">
          <Routes>           
            <Route exact path="/" element={
              <TextForm header="Enter the text below to analyze" mode={mode} showAlert={showAlert}></TextForm>
            }>           
            </Route>
            <Route exact path="/about" element={
              <AboutUs mode={mode}></AboutUs>
            }>              
            </Route> 
          </Routes>                                  
        </div>
      </Router>
    </>
  );
}

export default App;
