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
    className={`project ${props.project.type === "split" ? "split" : "full"}`}
  >
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
      {props.project.type === "three" ? (
        <>
          <div className="row">
            {props.project.videos[1] ? (
              <>
                <video loading="lazy" loop autoPlay muted pre>
                  <source
                    src={props.project.videos[0]}
                    type="video/mp4"
                  ></source>
                </video>
                <img
                  loading="lazy"
                  src={`/images/${props.project.images[0]}`}
                  alt={props.project.images[0]}
                />
                <video loading="lazy" loop autoPlay muted>
                  <source
                    src={props.project.videos[1]}
                    type="video/mp4"
                  ></source>
                </video>
              </>
            ) : (
              <>
                <video loading="lazy" loop autoPlay muted>
                  <source
                    src={props.project.videos[0]}
                    type="video/mp4"
                  ></source>
                </video>
                <img
                  loading="lazy"
                  src={`/images/${props.project.images[0]}`}
                  alt={props.project.images[0]}
                />
                <img
                  loading="lazy"
                  src={`/images/${props.project.images[1]}`}
                  alt={props.project.images[1]}
                />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="two">
            <video loading="lazy" loop autoPlay muted>
              <source src={props.project.videos[0]} type="video/mp4"></source>
            </video>
            <img
              loading="lazy"
              src={`/images/${props.project.images[0]}`}
              alt={props.project.images[0]}
            />
          </div>
        </>
      )}
    </div>
  </ScrollAnimation>
  </LazyLoad>
);

export default Project;

