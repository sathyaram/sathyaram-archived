import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import Seo from "../components/seo"
import Image from "../components/image"
import Footer from "../components/footer"
import { SRLWrapper } from "simple-react-lightbox";
import Masonry from 'react-masonry-css'


const Portraits = () => {
  const options = {
    settings: {
      overlayColor: "rgb(4, 4, 17, 0.9)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      showDownloadButton: false,
      showThumbnailsButton: false
    },
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="internal-page photography-page portraits-page">
      <Sky />
      <Menu />
      <Seo title="Portraits" />
      <header>
        <h1>Portraits</h1>
        <p>Specifically selected bests.</p>
      </header>
      <div className="photography-content">
        <SRLWrapper options={options}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div class="photography-image">
              <Image alt="Rania in the Studio" filename="rania-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Jordan at The Wharf" filename="jordan-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Raymakers" filename="raymakers.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Por" filename="por-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Erin" filename="erin-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Kacey" filename="kacey-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Bangkok" filename="bangkok-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Kat" filename="kat-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="chance" filename="chance.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="rachel" filename="rachel-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Luis" filename="luis.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Ting" filename="ting-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="daniel" filename="daniel.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Kris" filename="kris.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="harish" filename="harish.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="daniel" filename="jack-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Kris" filename="dani-one.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="harish" filename="bangkok-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="daniel" filename="lotus.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="Kris" filename="rania-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="harish" filename="ashley.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="justine" filename="justine.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="peter.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="helena.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="justine" filename="tae.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="me.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="kitkat.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="justine" filename="janedoe.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="erin-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="baldwin.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="me2.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="dani-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="dani-three.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="ting-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="lui.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="bri.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="kacy-two.jpeg" />
            </div>
            <div class="photography-image">
              <Image alt="peter" filename="kat-two.jpeg" />
            </div>
          </Masonry>
        </SRLWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default Portraits
