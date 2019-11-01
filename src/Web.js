import React from "react";
import Tilt from "react-tilt";

const Web = props => {
  return (
    <Tilt
      className="Tilt"
      style={{
        background: `url(${
          props.project.media[0]
        }) center center/cover no-repeat`
      }}
      options={{ max: 25 }}
    >
      <div className="eyebrow">
        <div
          className={`role ${props.project.role}`}
          style={{ color: `${props.project.textcolor}` }}
        >
          {props.project.role}
        </div>
        <div className="links">
          {props.project.designs ? (
            <a
              className="designs"
              style={{ color: props.project.textcolor }}
              target="_blank"
              rel="noopener noreferrer"
              href={props.project.designs}
            >
              View Designs
            </a>
          ) : null}
          {props.project.github ? (
            <a
              className="github"
              style={{ color: props.project.textcolor }}
              target="_blank"
              rel="noopener noreferrer"
              href={props.project.github}
            >
              View Repo
            </a>
          ) : null}
        </div>
      </div>
      <h4 className="title" style={{ color: props.project.color }}>
        {props.project.title}
      </h4>
      <h5 className="subtitle" style={{ color: `${props.project.textcolor}` }}>
        {props.project.subtitle}
      </h5>
      <ul className="tags">
        {props.project.tags.map(item => (
          <li
            style={{
              borderColor: props.project.color,
              color: props.project.textcolor
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <a
        className="website-link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.project.link}
        style={{ borderColor: `${props.project.color}` }}
      >
        {props.project.link.replace("https://", "").replace("http://", "")}
      </a>
    </Tilt>
  );
};

export default Web;
