import React from 'react';
import projects from "./projects.json";
import ScrollAnimation from 'react-animate-on-scroll';
import './Websites.scss';

function Websites() {
  return (
    <div className="page websites appears">
      <div className="text">
        <h2><div>Websites</div></h2>
        <h6><div>A collection of the websites I've built and worked on. </div></h6>
      </div>
      <div className="content">
        {projects.map(function (project, i) {
          return (
            <div
              key={i}
              className="project"
            >
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>

                <div className="media"
                  style={{ borderColor: project.color, background: `${project.offcolor}, url(${project.media[0]}) center center/cover no-repeat` }}>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>

                <div className="etc">

                  <div
                    className={`role ${project.role}`}
                    style={{ color: `${project.textcolor}` }}
                  >
                    {project.role} &nbsp;·&nbsp; {project.year}
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

                <a
                  className={`website-link ${project.link.startsWith("https") ? "https" : null}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  style={{ borderColor: `${project.color}` }}
                >
                  {project.link.replace("https://", "").replace("http://", "")}
                </a>
                <div className="description">
                  <p>{project.description}</p>
                  <ul className="tags">
                    {project.tags.map(item => (
                      <li
                        key={item}
                        style={{
                          borderColor: project.color
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Websites;