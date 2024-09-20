import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import Blogspage from './Pages/BlogsPage/Blogspage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
 
function App() {
  return (
    <Router>
      <ScrollToTop/>
  
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<Blogspage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />  

      </Routes>
     
    </Router>
  );
}

export default App;
