// src/components/ProjectCard.jsx

// Hum 'props' se data receive kar rahe hain (title, imageSrc, text)
function ProjectCard({ imageSrc, title, text }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} />
      <h4>{title}</h4>
      <p>{text}</p>
      <a href="#">View Code</a>
    </div>
  );
}

export default ProjectCard;