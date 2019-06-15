import React from "react";
import './Project.scss'

const Project = props => (
  <article id={props.project.title.toLowerCase().split(' ').join('')} style={{ background: props.project.offcolor ? props.project.offcolor : 'skyblue' }}>
    <div className="information">
      <div className="heading">
        <h3 className="title" style={{ color: `${props.project.color}` }}>
          {props.project.title}
        </h3>
        <h4 className="subtitle" style={{ color: `${props.project.textcolor}` }}>{props.project.subtitle}</h4>
        <div className="links">
          <a className="link" target="_blank" rel="noopener noreferrer" href={props.project.link}><i style={{ color: `${props.project.color}` }} className="fas fa-globe-americas"></i>{props.project.link}</a>
          {props.project.designs ? <a className="designs" target="_blank" rel="noopener noreferrer" href={props.project.designs}><i className="fab fa-dribbble" aria-hidden="true"></i>View Designs</a> : null}
        </div>
      </div>
      <div className="text" style={{ color: `${props.project.textcolor}` }}>
        <ul className="tags" style={{ borderColor: `${props.project.color}` }}>
          {props.project.tags
            ? props.project.tags.map(item =>
              <li style={{ borderColor: `${props.project.color}` }} key={item}>{item}</li>
            )
            : null
          }
        </ul>
        <div>
          <p className="description">{props.project.description}</p>
        </div>
      </div>
    </div>
    <div className="track">
      
      {props.project.half ?

      <>
        <div className="row">
          <video loop autoPlay muted>
            <source src={props.project.videos[0]} type="video/mp4"></source>
          </video>
          <img src={props.project.images[0]} alt={props.project.title} />
          <img src={props.project.images[1]} alt={props.project.title} />
        </div>
      </>
      :
      
      <div className="grid">
        <video loop autoPlay muted>
          <source src={props.project.videos[0]} type="video/mp4"></source>
        </video>

        <img src={props.project.images[0]} alt={props.project.title} />

        {props.project.videos[1] ?
          <>
            <video loop autoPlay muted>
              <source src={props.project.videos[1]} type="video/mp4"></source>
            </video>
            <img src={props.project.images[1]} alt={props.project.title} />
            <img src={props.project.images[2]} alt={props.project.title} />
          </>
          :
          <>
            <img src={props.project.images[0]} alt={props.project.title} />
            <img src={props.project.images[1]} alt={props.project.title} />
            <img src={props.project.images[2]} alt={props.project.title} />
            <img src={props.project.images[3]} alt={props.project.title} />
          </>
        }
      </div>

      }

    </div>
  </article>
)

export default Project;

