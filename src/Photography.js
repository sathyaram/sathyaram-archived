import React from 'react';
import Tilt from 'react-tilt'

const Photography = () => {
  return (
    <>
    <section id="photography">
    <h3>Photography</h3>
    <Tilt className="hover" className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_4378.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_0645.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_0701.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_2435.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_1145.jpg" />
        </Tilt>

        <Tilt className="hover" options={{ max: 25 }} >

        <img src="photography/portraits/RAM_9879.jpg" />
        </Tilt>

    </section>
    </>
  );
};

export default Photography;