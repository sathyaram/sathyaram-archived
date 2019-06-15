import React from "react";
import './Project.scss'
import './Projects.scss'

const Project = props => (
  <article id={props.project.title.toLowerCase().split(' ').join('')} style={{ backgroundColor: props.project.offcolor ? props.project.offcolor : 'skyblue' }}>
    <div className="information">
      <div className="heading">
        <h3 className="title" style={{ color: `${props.project.color}` }}>
          {props.project.title}
        </h3>
        <h4 className="subtitle">{props.project.subtitle}</h4>
        <div className="links">
          <a className="link" target="_blank" rel="noopener noreferrer" href={props.project.link}><i className="fas fa-globe-americas"></i>{props.project.link}</a>
          <a className="designs" target="_blank" rel="noopener noreferrer" href={props.project.designs}><i className="fab fa-dribbble" aria-hidden="true"></i>View Designs</a>
        </div>
      </div>
      <div className="text">
        <ul className="tags">
          {props.project.tags
            ? props.project.tags.map(item =>
              <li key={item}>{item}</li>
            )
            : null
          }
        </ul>
        <div>
          <p className="description">{props.project.description}</p>
        </div>
      </div>
    <div className="track">
      <div className="grid">

      {/* <video width="400" loop autoPlay muted>
           <source src="/videos/en.mp4" type="video/mp4"></source>
      </video> */}
      {/* {props.project.images.map(pic =>
          <div key={pic}>{pic}</div>
        )} */}

        {props.project.images.map(pic =>
          <img src={pic} key={pic} alt={pic} />
        )}
      </div>
    </div>
    </div>
  </article>
)

export default Project;

