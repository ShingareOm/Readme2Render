import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("Enable Dark Mode");
  const handelClickMode = () => {
    if (mode === 'Enable Dark Mode') {
      setMode("Enable Light Mode")
      document.body.style.backgroundColor = 'teal'
    }
    else {
      setMode("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
    }
  }

  const [envMode, setenvMode] = useState({
    color: "black",
  });


  return (
    <>
      {/* Define Routes */}
      <Navbar title='Encoder' aboutName="About Us" modeLable={mode} handelClickMode={handelClickMode} />
      <Alert />
      <Routes>
        {/* Catch-all route for unmatched paths (404) */}
        <Route path="*" element={<TextForm disc="Enter Text Here" />} />

        {/* Specific route for About Us */}
        <Route path="/about" element={<About />} />

        {/* Default route, this will be the home or main page */}
        <Route path="/" element={<TextForm disc="Enter Text Here" modeLable={mode} />} />
      </Routes>
    </>
  );
}

export default App;
