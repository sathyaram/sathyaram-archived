import React from 'react';

function Photography() {
  return (
    <div className="page photography appears">
      <div className="text">
        <h2><div>Photography</div></h2>
        <h6><div>A few of my portraits. More to come!</div></h6>
      </div>
      {/* <div className="sticky-filter">
          <button>Featured</button>
          <button>Portraits</button>
          <button>Space</button>
          <button>Lifestyle</button>
        </div> */}
      <div className="content">
        <img className="appear" loading="lazy" alt="Peter" src="/images/photography/RAM_4378.jpg"></img>
        <img className="appear" loading="lazy" alt="Luis" src="/images/photography/RAM_0645.jpg"></img>
        <img className="appear" loading="lazy" alt="Katrina" src="/images/photography/RAM_0701.jpg"></img>
        <img className="appear" loading="lazy" alt="Kellyn" src="/images/photography/RAM_2435.jpg"></img>
        <img className="appear" loading="lazy" alt="Farrah" src="/images/photography/RAM_1145.jpg"></img>
        <img className="appear" loading="lazy" alt="Purple" src="/images/photography/RAM_9879.jpg"></img>
        <img className="appear" loading="lazy" alt="Ash" src="/images/photography/RAM_6210.jpg"></img>
        <img className="appear" loading="lazy" alt="Ting" src="/images/photography/RAM_9912.jpg"></img>
        <img className="appear" loading="lazy" alt="Helena" src="/images/photography/RAM_0085.jpg"></img>
        <img className="appear" loading="lazy" alt="Danielle" src="/images/photography/RAM_0589.jpg"></img>
        <img className="appear" loading="lazy" alt="Rachel" src="/images/photography/RAM_0010.jpg"></img>
        <img className="appear" loading="lazy" alt="Hayden" src="/images/photography/RAM_9231.jpg"></img>
      </div>
    </div>
  );
}


export default Photography;