import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
 
import Home from "./Pages/Home/Home"; // Assuming you have a Home page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
