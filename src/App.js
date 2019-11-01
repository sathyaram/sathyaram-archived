import React, { Suspense } from "react";
import Aside from "./Aside";
import Menu from "./Menu";
import Header from "./Header";
import projects from "./projects.json";
import Photography from "./Photography";
import Graphic from "./Graphic";
import Web from "./Web";
import Footer from "./Footer";
import "./Reset.css";
import "./App.css";

function App() {
  const mappedPhotos = [];
  const mappedWebsites = [];
  const mappedGraphic = [];

  projects.forEach((project, i) => {
    if (project.type === "Web") {
      mappedWebsites.push(<Web key={i} project={project} />);
    } else if (project.type === "Photography") {
      mappedPhotos.push(<Photography key={i} photo={project} />);
    } else if (project.type === "Graphic") {
      mappedGraphic.push(<Graphic key={i} graphic={project} />);
    }
  });

  return (
    <>
      <Aside />
      <main>
        <Menu />
        <Header />
        <section id="web" name="web" role="presentation">
          <h3>Websites</h3>
          {mappedWebsites}
        </section>
        <section id="photography" name="photography" role="presentation">
          <h3>Photography</h3>
          {mappedPhotos}
        </section>
        <section id="graphic" name="graphic" role="presentation">
          <h3>Graphic</h3>
          {mappedGraphic}
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
