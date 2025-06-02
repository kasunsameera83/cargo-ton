import React, { useRef, useState } from "react";
import Container from "../Container";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "../../assets/images/hero-background.png";
import CarouselHero from "./CarouselHero";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { DatePicker, Select } from "antd";
import { FaCheckDouble } from "react-icons/fa6";
import ContainerImage from "../../assets/images/home/hero_image_container.png";

const countryies = [
  { value: "Armenia", label: "Armenia" },
  { value: "Austria", label: "Austria" },
  { value: "Belgium", label: "Belgium" },
];

const Hero = () => {
  const ref = useRef(null);
  const [formdata, setFormData] = useState({
    fromCountry: "",
    toCountry: "",
    shipmentDate: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <motion.section ref={ref}>
      <div className="relative h-screen w-[100%] overflow-x-hidden">
        <div
          className="
            w-full h-full relative before:absolute before:left-0 
            before:right-0 before:top-0 before:z-10 before:h-full
            before:w-full before:bg-ct-black before:opacity-70"
        >
          <img
            src={HeroBackground}
            alt="hero-image"
            className="object-cover h-full w-full relative z-0"
          />
        </div>
        <div
          className="
            w-full
            h-[calc(100vh-72px)] 
            absolute 
            top-[72px] 
            left-0  
            z-10"
        >
          <Container>
            <div className="w-full h-[calc(100vh-72px)]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full h-[60%] md:h-[80%]">
                <div className="w-full items-center justify-center relative md:hidden flex">
                  <motion.img
                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={ContainerImage}
                    alt="container"
                    className="relative w-[70%]"
                  />
                </div>
                <div className="w-full h-full flex items-center">
                  <div className="w-full">
                    <CarouselHero />
                    <div className="hidden  md:flex items-center w-full">
                      <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 3.5, ease: "easeOut" }}
                        color="ct-yellow"
                        variant="solid"
                        className="bg-ct-yellow 
                        text-ct-black 
                        py-2 
                        px-4 rounded-full 
                        text-xl 
                        mt-4 
                        cursor-pointer
                        text-center
                        font-bold 
                        md:w-auto
                        w-full
                        flex 
                        gap-2 
                        items-center"
                      >
                        Track Your Shipment
                        <FaLocationCrosshairs />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:hidden flex justify-center">
                  <button className="bg-ct-yellow hover:bg-ct-yellow-hover text-ct-black py-2 rounded-full font-bold px-5">
                    GET A QUICK OFFER
                  </button>
                </div>
                <div className="w-full items-start relative overflow-hidden hidden md:flex">
                  <motion.img
                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={ContainerImage}
                    alt="container"
                    className="relative h-[90%] w-auto"
                  />
                </div>
              </div>

              <motion.div
                initial={{ outline: "2px solid transparent" }}
                whileHover={{
                  outline: "2px solid #F9BF04",
                  outlineOffset: "4px",
                  transition: { duration: 0.3 },
                }}
                className="
                w-full 
                md:h-24 
                bg-[#181818]/80 
                md:rounded-full 
                items-center 
                justify-between 
                hidden
                md:flex 
                p-5"
              >
                <div className="w-full grid md:grid-cols-5 gap-2">
                  <p className="text-ct-white text-xl font-bold">
                    GET A QUICK OFFER
                  </p>
                  <div>
                    <Select
                      placeholder="From Country"
                      style={{ width: "100%" }}
                      onChange={(value) => handleChange("fromCountry", value)}
                      options={countryies}
                      aria-required
                    />
                  </div>
                  <div>
                    <Select
                      placeholder="To Country"
                      style={{ width: "100%" }}
                      onChange={(value) => handleChange("fromCountry", value)}
                      options={countryies}
                      aria-required
                    />
                  </div>
                  <div>
                    <DatePicker className="w-full" />
                  </div>
                  <div className="w-[100%]">
                    <div className="felx justify-end w-full">
                      <button
                        className="
                          bg-ct-yellow
                          font-bold
                          text-ct-black
                          text-base
                          py-1 
                          px-3 
                          rounded-full
                          flex
                          justify-center
                          items-center
                          text-center
                          w-[100%]
                          cursor-pointer
                          hover:bg-ct-yellow-hover
                          gap-2"
                      >
                        GET AN ESTIMATE
                        <FaCheckDouble />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
