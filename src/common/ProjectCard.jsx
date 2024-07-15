import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  const paragraphs = p.split('\n').map((text, index) => (
    <p key={index}>{text}</p>
  ));
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      {paragraphs}
    </a>
  );
}

export default ProjectCard;