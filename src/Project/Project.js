import React from "react";
import './Project.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import LazyLoad from 'react-lazyload';

const Project = props => (
  <LazyLoad>
    <ScrollAnimation
      animateOnce={true}
      animateIn="fadeInUp"
      aria-label={props.project.title}
      data-color={props.project.color}
      id={props.project.title
        .toLowerCase()
        .split(" ")
        .join("")}
      style={{
        background: props.project.offcolor ? props.project.offcolor : "skyblue"
      }}
      className={`project ${props.project.type}`}
    >
      {props.project.type === 'Web' ? (
        <>
      <div className="information">
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
                style={{ color: `${props.project.textcolor}` }}
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.designs}
              >
                <i className="fab fa-dribbble" aria-hidden="true"></i>View Designs
            </a>
            ) : null}
            {props.project.github ? (
              <a
                className="github"
                style={{ color: `${props.project.textcolor}` }}
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.github}
              >
                <i className="fab fa-github" aria-hidden="true"></i>View Repo
            </a>
            ) : null}
          </div>
        </div>
        <div className="heading">
          <h3 className="title" style={{ color: `${props.project.color}` }}>
            {props.project.title}
          </h3>
          <h4
            className="subtitle"
            style={{ color: `${props.project.textcolor}` }}
          >
            {props.project.subtitle}
          </h4>
          <a
            className="website-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.project.link}
            style={{ borderColor: `${props.project.color}` }}
          >
            <span>
              <i className="fas fa-lock"></i> https
          </span>
            {props.project.link.replace("https://", "").replace("http://", "")}
          </a>
        </div>

        <ul className="tags">
          {props.project.tags
            ? props.project.tags.map(item => (
              <li
                style={{
                  borderColor: `${props.project.color}`,
                  color: `${props.project.textcolor}`
                }}
                key={item}
              >
                {item}
              </li>
            ))
            : null}
        </ul>
        <div className="text" style={{ color: `${props.project.textcolor}` }}>
          <i className="fab fa-readme" style={{ background: props.project.offcolor }}></i>
          <div className="description" style={{ backgroundColor: `${props.project.color}` }}><p>{props.project.description}</p></div>
        </div>
      </div>
      <div className="track">

        <div className={`row ${props.project.media[2] ? "three" : ""}`}>

          <video loading="lazy" loop autoPlay muted pre>
            <source
              src={props.project.media[0]}
              type="video/mp4"
            ></source>
          </video>
          <img
            loading="lazy"
            src={`/images/${props.project.media[1]}`}
            alt={props.project.media[1]}
          />
          {props.project.media[2] ? (
            <>
              <video loading="lazy" loop autoPlay muted>
                <source
                  src={props.project.media[2]}
                  type="video/mp4"
                ></source>
              </video>
            </>
          ) : (<></>)}
        </div>
      </div>
      </>) : (<></>)}
      {props.project.type === 'Graphic' ? (
        <>
          <img
            loading="lazy"
            src={`/images/${props.project.media[1]}`}
            alt={props.project.media[1]}
          />
        </>
      ):(<></>)}
      {props.project.type === 'Photography' ? (
        <>
           <h3 className="title" style={{ color: `${props.project.color}` }}>
            {props.project.title}
          </h3>
        </>
      ):(<></>)}
    </ScrollAnimation>
  </LazyLoad>
);

export default Project;

