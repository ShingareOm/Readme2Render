import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("Enable Dark Mode");
  const [navbarMode, setNavbarMode] = useState('tertiary')
  const handelClickMode = () => {
    if (mode === 'Enable Dark Mode') {
      setMode("Enable Light Mode")
      document.body.style.backgroundColor = 'teal'
      setNavbarMode('dark')
    }
    else {
    setMode("Enable Dark Mode")
    document.body.style.backgroundColor = 'white'
    setNavbarMode('tertiary')
  }
}


return (
  <>
    {/* Define Routes */}
    <Navbar title='Md2Render' aboutName="About Me" navbarMode={navbarMode} modeLable={mode} handelClickMode={handelClickMode} />
    <Routes>
      {/* Catch-all route for unmatched paths (404) */}
      <Route path="*" element={<TextForm navbarMode={navbarMode} disc="Enter Markdown Here" />} />

      {/* Specific route for About Us */}
      <Route path="/about" element={<About navbarMode={navbarMode} />} />
    </Routes>
  </>
);
}

export default App;
