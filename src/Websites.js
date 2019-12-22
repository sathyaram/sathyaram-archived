import React from 'react';
import projects from "./projects.json";


function Websites() {

    return (
      <div className="page appears">
      <div className="text">
      <h2><div>Websites</div></h2>
      <p><div>A collection of all my websites.</div></p>
      </div>
      <div className="content">
        {projects.map(function(project,i) {
          return (

<div
className="project"
style={{background: `${project.offcolor}, url(${project.media[0]}) center center/cover no-repeat`}}
>
<div className="eyebrow">
  <div
    className={`role ${project.role}`}
    style={{ color: `${project.textcolor}` }}
  >
    {project.role}
  </div>
  <div className="links">
    {project.designs ? (
      <a
        className="designs"
        style={{ color: project.textcolor }}
        target="_blank"
        rel="noopener noreferrer"
        href={project.designs}
      >
        View Designs
      </a>
    ) : null}
    {project.github ? (
      <a
        className="github"
        style={{ color: project.textcolor }}
        target="_blank"
        rel="noopener noreferrer"
        href={project.github}
      >
        View Repo
      </a>
    ) : null}
  </div>
</div>
<h4 className="title" style={{ color: project.color }}>
  {project.title}
</h4>
<h5 className="subtitle" style={{ color: `${project.textcolor}` }}>
  {project.subtitle}
</h5>
<ul className="tags">
  {project.tags.map(item => (
    <li
      style={{
        borderColor: project.color,
        color: project.textcolor
      }}
      key={item}
    >
      {item}
    </li>
  ))}
</ul>
<a
  className={`website-link ${project.link.startsWith("https") ? "https" : null}`}
  target="_blank"
  rel="noopener noreferrer"
  href={project.link}
  style={{ borderColor: `${project.color}` }}
>
  {project.link.replace("https://", "").replace("http://", "")}
</a>
<p>
  {project.description}
</p>
</div>
          )
        })}
      </div>
    </div>
    );
}

export default Websites;