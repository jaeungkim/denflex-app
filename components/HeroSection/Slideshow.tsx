"use client";

import Image from "next/image";
import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";
import AnimatedTitle from "../AnimtedTitle/AnimatedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliders = [
  {
    id: 2,
    image: "/bg-img/bg_test.jpg",
    imageTablet: "/bg-img/bg_test.jpg",
    imageMobile: "/bg-img/bg_test.jpg",
    titleUp: "Spring Endo File",
    rightText: false,
  },
  {
    id: 1,
    image: "/bg-img/denflex_img2.jpg",
    imageTablet: "/bg-img/denflex_img2.jpg",
    imageMobile: "/bg-img/denflex_img2.jpg",
    titleUp: "Combined Torque Wrench",
    rightText: false,
  },
  {
    id: 3,
    image: "/bg-img/denflex_img3.png",
    imageTablet: "/bg-img/denflex_img3.png",
    imageMobile: "/bg-img/denflex_img3.png",
    titleUp: "Free Angle Attachment",
    rightText: false,
  },
  {
    id: 4,
    image: "/bg-img/denflex_img4.png",
    imageTablet: "/bg-img/denflex_img4.png",
    imageMobile: "/bg-img/denflex_img4.png",
    titleUp: "Advanced Fixture",
    rightText: false,
  },
  {
    id: 5,
    image: "/bg-img/denflex_img5.png",
    imageTablet: "/bg-img/denflex_img5.png",
    imageMobile: "/bg-img/denflex_img5.png",
    titleUp: "One Touch Implant",
    rightText: false,
  },
];

const Slideshow = () => {
  const ImageComponent = (hideOn, imageUrl) => {
    return (
      <div className={`${hideOn} relative`} style={{ height: "100vh" }}>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={"some name"}
          className="brightness-75"
        />
      </div>
    );
  };

  return (
    <>
      <div className="slide-container relative z-20 w-full">
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
                <AnimatedTitle text={slider.titleUp} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
