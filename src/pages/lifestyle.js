import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { SRLWrapper } from "simple-react-lightbox";
import Image from "../components/image"
import Masonry from 'react-masonry-css'

const Lifestyle = () => {
  const options = {
    // settings: {
    //   overlayColor: "rgb(25, 136, 124)",
    //   autoplaySpeed: 1500,
    //   transitionSpeed: 900,
    // },
    // buttons: {
    //   backgroundColor: "#1b5245",
    //   iconColor: "rgba(126, 172, 139, 0.8)",
    // },
    // caption: {
    //   captionColor: "#a6cfa5",
    //   captionFontFamily: "Raleway, sans-serif",
    //   captionFontWeight: "300",
    //   captionTextTransform: "uppercase",
    // }
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="internal-page photography-page lifestyle-page">
      <Sky />
      <Menu />
      <SEO title="Lifestyle" />
      <header>
        <h1>Lifestyle</h1>
        <p>Specifically selected bests.</p>
      </header>
      <div className="photography-content">
        <SRLWrapper options={options}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div class="photography-image">
              <Image alt="peter" filename="katwild.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="andrewonphone.jpeg" />
            </div>
           
            <div class="photography-image">
              <Image alt="peter" filename="firegirl.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="path.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="fireinside.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="ting-union.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="firestarter.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="gwen.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="erin-three.jpeg" />
            </div>
           
          </Masonry>
        </SRLWrapper>
      </div>
      <Footer/>
    </div>
  )
}


export default Lifestyle
