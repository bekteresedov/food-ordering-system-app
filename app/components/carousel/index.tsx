"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import hero1 from "./assets/images/hero-bg.jpg";
import hero2 from "./assets/images/hero2.jpg";
import hero3 from "./assets/images/hero3.jpg";
import herr from "./assets/images/herr.jpg";
const Coursel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3); // 3 slaytınız varsa 3 yerine slayt sayısını yazabilirsiniz
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          // height: "60%",
          margin: "0 auto",
        }}
      >
        <Carousel selectedItem={activeSlide}>
          <div className="relative">
            <Image
              src={hero3}
              alt="Image 1"
              // height={300}
              style={{ height: "auto", width: "100%" }}
              // layout="responsive"
            />
            <h2 className="absolute text-white top-0">Hello gyus</h2>
          </div>
          <div>
            <Image
              src={hero1}
              alt="Image 1"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Coursel;
