// src/components/Projects.jsx

import ProjectCard from './ProjectCard'; // Naya component import karein

// Hum 'App.jsx' se 'projects' ka array props mein receive kar rahe hain
function Projects({ projects }) {
  return (
    <section id="projects">
      <h3>My Projects</h3>
      <div className="projects-container">
        {/* Ye React ka loop hai: .map() */}
        {projects.map(project => (
          <ProjectCard
            key={project.id} // React ko har item ko pehchanne ke liye 'key' lazmi hai
            title={project.title}
            imageSrc={project.image}
            text={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;