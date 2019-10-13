import React, { lazy, Suspense, useEffect, useRef } from 'react';
import projects from './../projects.json';
const Project = lazy(() => import('../Project/Project'));

const Main = (props: {
  selectedCategory: string
}) => {
  const main = useRef()
  useEffect(() => {
    if (props.selectedCategory && main.current){
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: main.current.offsetTop
      });
    }
  }, [props.selectedCategory])


  const selectedProjects = props.selectedCategory ?
    projects.filter(project => project.type === props.selectedCategory) : projects;

  return (
    <main ref={main} id="maincontent" role="main">
      {selectedProjects.map((project, i) => {
        return (
          <Suspense key={i} fallback={<div className="lazyLoading">Loading...</div>}>
            <Project project={project} key={i} />
          </Suspense>
        )
      })}
    </main>
  );
}

export default Main;
