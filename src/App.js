import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from 'react-router-dom';
import projectsData from './projects-data.json';
import ProjectDetailsPage from "./pages/ProjectDetailsPage";



function App() {
  return (
    <div>
      <Navbar />
       
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <ProjectsPage projects={projectsData}/> } />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
