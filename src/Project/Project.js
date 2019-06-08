import React, { Component } from "react";
import './Project.scss'

class Project extends Component {
  render() {
    return (
      <article style={{ backgroundColor: `${this.props.project.offcolor}` }}>
        <h3 style={{ color: `${this.props.project.color}` }}>
          {this.props.project.title}
        </h3>
        <h4>{this.props.project.subtitle}</h4>
        <ul>{this.props.project.tags}</ul>
        <ul>{console.log(this.props.project.tags)}</ul>
        <a href={this.props.project.link}>View Website</a>
        <a href={this.props.project.designs}>View Designs</a>
{/*         
        <ul>
          {this.props.project.tags.map(tag => <li>{tag.value}</li>)}
        </ul> */}
          
      </article>
    );
  }
}

export default Project;

