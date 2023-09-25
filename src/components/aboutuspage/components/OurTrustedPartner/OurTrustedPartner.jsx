import React from "react";
import classes from "./OurTrustedPartner.module.scss";
import { Maven_Pro } from "next/font/google";
import CounterNumber from "@/components/ui/CouterNumber/CouterNumber";
import OurTrustedPartnerImage from "./OurTrustedPartnerImage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function OurTrustedPartner() {
  const dataImage = [
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
    {
      id: 1,
      src: "/assets/images/SectionHomepage/areus-atelier.png",
      alt: "areus-atelier",
    },
  ];
  const createSlides = (dataImage, itemsPerSlide) => {
    const slides = [];
    for (let i = 0; i < dataImage.length; i += itemsPerSlide) {
      const slideItems = dataImage.slice(i, i + itemsPerSlide);
      slides.push(slideItems);
    }
    return slides;
  };
  const itemsPerSlide = 2;
  const slides = createSlides(dataImage, itemsPerSlide);
  return (
    <>
      <section
        className={`${classes["our-trusted-partner"]} our-trusted-partner`}
      >
        <div className="container">
          <div className={classes["header-section"]}>
            <p>Trusted by our Partners</p>
          </div>
          <div className={classes["content-section"]}>
            <Swiper
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                100: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                  },
                390: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  slidesPerGroup: 3,
                },
                570: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 0,
                  slidesPerGroup: 2,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="our-trusted-partner-slider"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={classes["item-image-slide"]}>
                    {slide.map((item, itemIndex) => (
                      <OurTrustedPartnerImage key={itemIndex} data={item} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={classes["footer-section"]}>
            <div className={classes["footer-section__content"]}>
              <div className={classes["footer-section__content__item"]}>
                <CounterNumber
                  value={500}
                  classes={"our-trusted-partner"}
                  threshold={0.5}
                />
                <p
                  className={classes["footer-section__content__item__text"]}
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  TRUSTED CLIENTS
                </p>
              </div>
              <div className={classes["footer-section__content__item"]}>
                <CounterNumber
                  value={300}
                  classes={"our-trusted-partner"}
                  threshold={0.5}
                />
                <p
                  className={classes["footer-section__content__item__text"]}
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  SUCCESSFUL CAMPAIGNS
                </p>
              </div>
              <div className={classes["footer-section__content__item"]}>
                <CounterNumber
                  value={1000}
                  classes={"our-trusted-partner"}
                  threshold={0.5}
                />
                <p
                  className={classes["footer-section__content__item__text"]}
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  MONTHLY VIEWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
