import React from 'react';
import Tilt from 'react-tilt'

const Graphic = () => {
  return (
    <>
      <section id="graphic" name="graphic" role="presentation">
        <h3>Graphic</h3>
        <Tilt className="hover" options={{ max: 25 }} >
          <img alt="ram photography" src="graphic/pokelogos/houndoom.jpg" />
        </Tilt>
        <Tilt className="hover" options={{ max: 25 }}>

          <img alt="ram photography" src="graphic/pokelogos/steelixcorp.jpg" />
        </Tilt>


        <Tilt className="hover" options={{ max: 25 }}>
          <img alt="ram photography" src="graphic/pokelogos/wingullssurfshop.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }}>
          <img alt="ram photography" src="graphic/pokelogos/vanilliteicecream.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }}>
          <img alt="ram photography" src="graphic/pokelogos/honedgepictures.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }}>
          <img alt="ram photography" src="graphic/pokelogos/growlithehoundservices.jpg" />
        </Tilt>

      </section>
    </>
  );
};

export default Graphic;