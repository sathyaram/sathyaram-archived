import React, {Suspense} from 'react';
import Aside from './Aside';
import Menu from './Menu';
import Header from './Header';
import projects from './projects.json'
import Photography from './Photography';
import Graphic from './Graphic';
import Web from './Web';
import Footer from './Footer';
import './Reset.css';
import './App.css';

// const Project = lazy(() => import('./Web'));

function App() {

  return (
    <>
      <Aside />
      <main>
        <Menu />
        <Header />
        <section id="web">
        <h3>Websites</h3>
        {projects.map(function (project, i) {
          return (
            <Suspense key={i} fallback={<div className="lazyLoading">Loading...</div>}>
              <Web key={i} project={project} />
            </Suspense>
          )
        }
        )}
       </section>
       <Photography />
        <Graphic />
      <Footer />
      </main>
    </>
  );
}

export default App;
