import React, { Component } from "react";
import './Project.scss'

class Project extends Component {
  render() {
    return (
      <article >
        <div className="heading">
          <h3 className="title" style={{ color: `${this.props.project.color}` }}>
            {this.props.project.title}
          </h3>
          <h4 className="subtitle">{this.props.project.subtitle}</h4>
        </div>
        <ul>{console.log(this.props.project.tags)}</ul>
        <div className="text">
        <p className="description">{this.props.project.description}</p>

          <ul className="tags">
            <li>Drupal 8</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>AWS</li>
          </ul>
          <div className="links">
            <a className="link" href={this.props.project.link}><i class="fas fa-globe-americas"></i>{this.props.project.link}</a>
            <a className="designs" href={this.props.project.designs}><i class="fab fa-dribbble" aria-hidden="true"></i>View Designs</a>
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
{/*         
        <ul>
          {this.props.project.tags.map(tag => <li>{tag.value}</li>)}
        </ul> */}
          
      </article>
    );
  }
}

export default Project;

