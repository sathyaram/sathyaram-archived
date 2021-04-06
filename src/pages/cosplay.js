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
      <SEO title="Cosplay" />
      <header>
        <h1>Cosplay</h1>
        <p>Specifically selected bests.</p>
      </header>
      <div className="photography-content">
        <SRLWrapper options={options}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div class="photography-image">
              <Image alt="peter" filename="zelda-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="Ashe.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="purple-hair.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="kellyn.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="effie-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="peppermint-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="aquaman.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="sombra-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="cinnamon.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="effie-green.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="zelda-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="aile.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="sombra-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="emerald.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="genji.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="alaora.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="jenni.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="jellybean.jpeg" />
            </div>
          </Masonry>
        </SRLWrapper>
      </div>
      <Footer/>
    </div>
  )
}


export default Lifestyle
