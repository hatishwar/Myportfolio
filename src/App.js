import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Privacy from './pages/Privacy';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// navbar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footernav from './pages/Footernav';
import Myprojects from './pages/Myprojects';


function App() {
  return (
    <Router>
      <Navbar bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">Hatishwar's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
          <Link to="/about"><Nav.Link href="#features">About</Nav.Link></Link>
          <Link to="/projects"><Nav.Link href="#pricing">Projects</Nav.Link></Link>
          <Link to="/contact"><Nav.Link href="#contact">Contact</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/projects" element={<Myprojects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<Privacy.js />} />
      </Routes>

      <Footernav></Footernav>
      <footer className='py-3'>Copyright 2024 &copy; Hatishwar</footer>
    </Router>
  );
}

export default App;
