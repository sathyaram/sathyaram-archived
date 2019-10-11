import React from "react";
import './Project.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Project = props => (
  <ScrollAnimation animateOnce={true} animateIn="fadeInUp" aria-label={props.project.title} data-color={props.project.color} id={props.project.title.toLowerCase().split(' ').join('')} style={{ background: props.project.offcolor ? props.project.offcolor : 'skyblue' }} className={`project ${props.project.half === 'split' ? 'split' : 'full'}`}>
    <div className="information">
      <div className="eyebrow">
        <div className={`role ${props.project.role}`} style={{ color: `${props.project.textcolor}` }}>
          {props.project.role}
        </div>
        <div className="links">
          {props.project.designs
            ?
            <a className="designs" style={{ color: `${props.project.textcolor}` }} target="_blank" rel="noopener noreferrer" href={props.project.designs}><i className="fab fa-dribbble" aria-hidden="true"></i>View Designs</a>
            :
            null
          }
          {props.project.github
            ?
            <a className="github" style={{ color: `${props.project.textcolor}` }} target="_blank" rel="noopener noreferrer" href={props.project.github}><i className="fab fa-github" aria-hidden="true"></i>View Repo</a>
            :
            null
          }
        </div>
      </div>
      <div className="heading">
        <h3 className="title" style={{ color: `${props.project.color}` }}>
          {props.project.title}
        </h3>
        <h4 className="subtitle" style={{ color: `${props.project.textcolor}` }}>{props.project.subtitle}</h4>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={props.project.link} style={{ borderColor: `${props.project.color}` }}>
          <span><i className="fas fa-lock"></i> https</span>{props.project.link.replace('https://', '').replace('http://', '')}
        </a>
      </div>

      <ul className="tags">
        {props.project.tags
          ? props.project.tags.map(item =>
            <li style={{ borderColor: `${props.project.color}`, color: `${props.project.textcolor}` }} key={item}>{item}</li>
          )
          : null
        }
      </ul>
      <div className="text" style={{ color: `${props.project.textcolor}` }}>
        {/* <p className="description">{props.project.description}</p> */}
      </div>
    </div>
    <div className="track">

      {props.project.half === 'split'
        ?
        <>
          <div className="half-row">
            {props.project.videos[1]
              ?
              <>
                <video loop autoPlay muted>
                  <source src={props.project.videos[0]} type="video/mp4"></source>
                </video>
                <video loop autoPlay muted>
                  <source src={props.project.videos[1]} type="video/mp4"></source>
                </video>
              </>
              :
              <>

                <video loop autoPlay muted>
                  <source src={props.project.videos[0]} type="video/mp4"></source>
                </video>
                <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />

              </>}
          </div>

        </>

        :
        <>

        </>
      }

      {props.project.half === "small" ?

        <>
          <div className="row">
            {props.project.videos[1]
              ?
              <>
                <video loop autoPlay muted>
                  <source src={props.project.videos[0]} type="video/mp4"></source>
                </video>
                <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />
                <video loop autoPlay muted>
                  <source src={props.project.videos[1]} type="video/mp4"></source>
                </video>

              </>

              :
              <>
                <video loop autoPlay muted>
                  <source src={props.project.videos[0]} type="video/mp4"></source>
                </video>
                <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />
                <img src={`/images/${props.project.images[1]}`} alt={props.project.images[1]} />
              </>
            }
          </div>
        </>
        :
        <>
        </>
      }

      {props.project.half === "two" ?
        <>
          <div className="two">
            <video loop autoPlay muted>
              <source src={props.project.videos[0]} type="video/mp4"></source>
            </video>
            <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />
          </div>
        </>
        :
        <>
        </>
      }
      {props.project.half === "grid"
        ?
        <>
          <div className="grid">
            <video loop autoPlay muted>
              <source src={props.project.videos[0]} type="video/mp4"></source>
            </video>

            <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />

            {props.project.videos[1] ?
              <>
                <video loop autoPlay muted>
                  <source src={props.project.videos[1]} type="video/mp4"></source>
                </video>
                <img src={`/images/${props.project.images[1]}`} alt={props.project.images[1]} />
                <img src={`/images/${props.project.images[2]}`} alt={props.project.images[2]} />
              </>
              :
              <>
                <img src={`/images/${props.project.images[0]}`} alt={props.project.images[0]} />
                <img src={`/images/${props.project.images[1]}`} alt={props.project.images[1]} />
                <img src={`/images/${props.project.images[2]}`} alt={props.project.images[2]} />
                <img src={`/images/${props.project.images[3]}`} alt={props.project.images[3]} />
              </>
            }
          </div>
        </>
        :
        <>
        </>
      }
    </div>
  </ScrollAnimation>
)

export default Project;

