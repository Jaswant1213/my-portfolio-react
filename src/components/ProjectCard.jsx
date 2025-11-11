// src/components/ProjectCard.jsx

// Step 1: Yahan 'githubLink' aur 'liveLink' ko receive karein
function ProjectCard({ imageSrc, title, text, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} />
      <h4>{title}</h4>
      <p>{text}</p>

      {/* Step 2: Naya links section (ye 'project-links' class CSS mein styled hai) */}
      <div className="project-links">
        {/* GitHub Link */}
        <a
          href={githubLink}
          className="project-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>

        {/* Live Link (sirf tab dikhega agar 'liveLink' mojood hai) */}
        {liveLink && (
          <a
            href={liveLink}
            className="project-btn live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
