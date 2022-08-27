import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from 'react-router-dom';
import projectsData from './projects-data.json';
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
       
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <ProjectsPage projects={projectsData}/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
