import React from "react"
import Swiper from "react-id-swiper";
import Menu from "../components/menu"
import Sky from "../components/sky"
import SEO from "../components/seo"


const Portraits = () => {
  var params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    freeMode: true,
    loop: true,
  };

  
  
  var params1 = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: params2
    }
  }

  var params2 = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  }
  
  

  return (
    <div className="portraits-page">
      <Sky />
      <Menu />
      <SEO title="Portraits" />
      <header>
        <h1>Portraits</h1>
      </header>
      <div className="photography-content">
        <Swiper {...params1}>
          <img
            alt="me"
            src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
          />
  
          <img
            alt="me"
            src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
          />
  
          <img
            alt="me"
            src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
          />
  
          <img
            alt="me"
            src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
          />
  
          <img
            alt="me"
            src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
          />
  
        </Swiper>
      </div>
    </div>
  )
}

export default Portraits
