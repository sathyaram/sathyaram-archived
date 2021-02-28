import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import SEO from "../components/seo"
import { SRLWrapper } from "simple-react-lightbox";

const Portraits = () => {
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

  return (
    <div className="internal-page portraits-page">
      <Sky />
      <Menu />
      <SEO title="Portraits" />
      <header>
        <h1>Portraits</h1>
      </header>
      <div className="photography-content">

        <SRLWrapper options={options}>
          <div class="photography-image">
            <img
              alt="me"
              src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
            />
          </div>
          <div class="photography-image">
            <img
              alt="me"
              src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
            />
          </div>
          <div class="photography-image">
            <img
              alt="me"
              src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
            />
          </div>
          <div class="photography-image">

            <img
              alt="me"
              src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
            />
          </div>
          <div class="photography-image">
            <img
              alt="me"
              src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
            />
          </div>
        </SRLWrapper>
      </div>
    </div>
  )
}

export default Portraits
