import React, { useRef } from "react";
import Container from "../Container";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import WelcomeSectionImage from "../../assets/images/welcome-section.png";

const Welcome = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="w-full  bg-ct-white overflow-x-hidden md:py-24 pt-24"
    >
      <Container>
        <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 gap-2">
          <div className="w-full flex items-center justify-center md:justify-start">
            <img width={300} src={WelcomeSectionImage} alt="" />
          </div>
          <div className="col-span-2 h-full w-full">
            <div className="w-full h-[400px] flex items-center">
              <div className="text-ct-black space-y-3 text-center md:text-right">
                <motion.h2
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="font-bold text-3xl "
                >
                  Welcome to Cargo Ton
                </motion.h2>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  className="text-xl font-bold"
                >
                  Your Trusted Partner in Global Cargo Shipping
                </motion.p>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="text-base"
                >
                  At Cargo Ton, we specialize in reliable, efficient, and secure
                  cargo shipping solutions worldwide. Whether you're moving
                  freight by air, sea, or land, we deliver with precision and
                  care. Backed by years of industry experience and a commitment
                  to customer satisfaction, we ensure your cargo reaches its
                  destination safely and on time.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
