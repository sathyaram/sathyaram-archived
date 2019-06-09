import React, { Component } from "react";
import './Project.scss'
import './Projects.scss'

class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article id={`${this.props.project.title.toLowerCase().split(' ').join('')}`}>
        <div className="information">
          <div className="heading">
            <h3 className="title" style={{ color: `${this.props.project.color}` }}>
              {this.props.project.title}
            </h3>
            <h4 className="subtitle">{this.props.project.subtitle}</h4>
            <div className="links">
                <a className="link" target="_blank" rel="noopener noreferrer" href={this.props.project.link}><i className="fas fa-globe-americas"></i>{this.props.project.link}</a>
                <a className="designs" target="_blank" rel="noopener noreferrer" href={this.props.project.designs}><i className="fab fa-dribbble" aria-hidden="true"></i>View Designs</a>
              </div>
          </div>
          {console.log(this.props.project)}
          {console.log(this.props.project.title)}
          {console.log(this.props.project.tags)}

          {this.props.project.tags.forEach(item => <li>{item}</li>)}
          
          <div className="text">
            <ul className="tags">
                <li>Drupal 8</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>AWS</li>
              </ul>
              <div>
            
              <p className="description">{this.props.project.description}</p>  
            </div>
          </div>
        </div>
        <div className="track" style={{ backgroundColor: `${this.props.project.offcolor}` }}>
          <div className="grid">
            <img src="https://picsum.photos/500/500" />
            <img src="https://picsum.photos/501/501" />
            <img src="https://picsum.photos/502/502" />
            <img src="https://picsum.photos/502/501" />
            <img src="https://picsum.photos/503/502" /> 
          </div>
        </div>
      </article>
    );
  }
}

export default Project;

