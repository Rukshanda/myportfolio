import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";

import { Helmet } from 'react-helmet';
import Home from "./Pages/Home/Home"; // Assuming you have a Home page
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import Blogspage from './Pages/BlogsPage/Blogspage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
                 <Helmet>
        <title>Portfolio-Rukshanda</title>
        <meta name="description" content="This is Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<Blogspage />} />
        <Route path="/contact" element={<ContactPage />} />

      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
