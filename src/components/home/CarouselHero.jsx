import React from "react";
import { Carousel } from "antd";
import { easeOut, motion } from "framer-motion";

const CarouselHero = () => {
  return (
    <Carousel autoplay>
      <div className="w-full text-ct-white space-y-7 py-4">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="text-5xl font-bold text-center md:text-left"
        >
          DELIVERING YOUR CARGO{" "}
          <span className="text-ct-yellow">WORLDWIDE</span>
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-xl text-center md:text-left"
        >
          From small packages to large freight, Cargo Ton delivers your goods
          across the globe with unmatched precision and dedication.
        </motion.p>
      </div>
      <div className="w-full text-ct-white space-y-5 py-4">
        <h1 className="text-5xl font-bold text-center md:text-left">
          WE MOVE WHAT{" "}
          <span className="text-ct-yellow text-center md:text-left">
            MATTERS TO YOU
          </span>
        </h1>
        <p className="text-xl text-center md:text-left">
          From packages to full loads, Cargo Ton ensures smooth and timely
          deliveries across the globe—so you can ship with confidence.
        </p>
      </div>
      <div className="w-full text-ct-white space-y-5 py-4">
        <h1 className="text-5xl font-bold text-center md:text-left">
          POWERING{" "}
          <span className="text-ct-yellow text-center md:text-left">
            GLOBAL TRADE
          </span>
        </h1>
        <p className="text-xl text-center md:text-left">
          Efficient cargo shipping for businesses and individuals—designed for
          speed, safety, and satisfaction.
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselHero;
