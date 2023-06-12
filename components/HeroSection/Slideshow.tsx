"use client";

import Image from "next/image";
import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliders = [
  {
    id: 2,
    image: "/bg-img/denflex_img1.jpg",
    imageTablet: "/bg-img/denflex_img1.jpg",
    imageMobile: "/bg-img/denflex_img1.jpg",
    subtitle: "Denflex",
    titleUp: "Denflex",
    titleDown: "Denflex",
    rightText: false,
  },
  {
    id: 1,
    image: "/bg-img/denflex_img2.jpg",
    imageTablet: "/bg-img/denflex_img2.jpg",
    imageMobile: "/bg-img/denflex_img2.jpg",
    subtitle: "Denflex",
    titleUp: "Denflex",
    titleDown: "Denflex",
    rightText: true,
  },
  {
    id: 3,
    image: "/bg-img/denflex_img3.png",
    imageTablet: "/bg-img/denflex_img3.png",
    imageMobile: "/bg-img/denflex_img3.png",
    subtitle: "Denflex",
    titleUp: "Denflex",
    titleDown: "Denflex",
    rightText: false,
  },
  {
    id: 4,
    image: "/bg-img/denflex_img4.png",
    imageTablet: "/bg-img/denflex_img4.png",
    imageMobile: "/bg-img/denflex_img4.png",
    subtitle: "Denflex",
    titleUp: "Denflex",
    titleDown: "Denflex",
    rightText: false,
  },
  {
    id: 5,
    image: "/bg-img/denflex_img5.png",
    imageTablet: "/bg-img/denflex_img5.png",
    imageMobile: "/bg-img/denflex_img5.png",
    subtitle: "Denflex",
    titleUp: "Denflex",
    titleDown: "Denflex",
    rightText: false,
  },
];

const Slideshow = () => {
  const ImageComponent = (hideOn, imageUrl) => {
    return (
      <div className={`${hideOn} relative`} style={{ height: "85vh" }}>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={"some name"}
        />
      </div>
    );
  };

  return (
    <>
      <div className="slide-container relative z-20 w-full pt-24">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            type: "fraction",
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              {ImageComponent("hidden lg:block", slider.image)}
              {ImageComponent("hidden sm:block lg:hidden", slider.imageTablet)}
              {ImageComponent("sm:hidden", slider.imageMobile)}

              <div
                className={
                  slider.rightText
                    ? styles.rightTextSection
                    : styles.leftTextSection
                }
              >
                <span className={styles.subtitle}>{slider.subtitle}</span>
                <span
                  className={`${styles.title} text-center ${
                    slider.rightText ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {slider.titleUp} <br />
                  {slider.titleDown}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
