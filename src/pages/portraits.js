import React, {useEffect, useRef, useState} from "react"
import Swiper from "react-id-swiper";
import Menu from "../components/menu"
import Sky from "../components/sky"
import SEO from "../components/seo"

const Portraits = () => {
  var galleryParams = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbParams
    }
  }

  var thumbParams = {
    // spaceBetween: 10,
    // slidesPerView: 4,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // slideToClickedSlide: true

    spaceBetween: 10,
      // centeredSlides: true,
    slidesPerView: 4,

      // slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
  }

  const gallerySwiperRef = useRef(null);
  const thumbnailSwiperRef = useRef(null);

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
    if (gallerySwiper.controller && thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);
  
  

  return (
    <div className="portraits-page">
      <Sky />
      <Menu />
      <SEO title="Portraits" />
      <header>
        <h1>Portraits</h1>
      </header>
      <div className="photography-content">
        <Swiper {...galleryParams} ref={gallerySwiperRef}>
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
        <Swiper {...thumbParams} ref={thumbnailSwiperRef}>
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
