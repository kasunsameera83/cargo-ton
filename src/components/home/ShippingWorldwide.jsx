import React, { useRef } from "react";
import Container from "../Container";
import ShippingImg from "../../assets/images/home/shipping.png";
import { useInView, motion } from "framer-motion";

const ShippingWorldwide = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="
      w-full 
      h-[400px] 
      sticky 
      top-20 
      bg-ct-yellow 

      -z-1"
    >
      <div
        className="
                w-full h-full relative before:absolute before:left-0 
                before:right-0 before:top-0 before:z-10 before:h-full
                before:w-full before:bg-ct-black before:opacity-70"
      >
        <img
          src={ShippingImg}
          alt="hero-image"
          className="object-cover h-full w-full relative z-0"
        />
      </div>
      <div
        className="
             w-full
            h-[400px] 
            absolute 
            top-0
            left-0  
            z-10"
      >
        <Container>
          <div className="w-[100%] h-[400px] text-ct-white items-center text-center flex justify-center">
            <div>
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
                className="font-bold text-3xl"
              >
                Shipping Worldwide, Delivering Peace of Mind
              </motion.h2>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                No matter where your cargo needs to go, Cargo Ton gets it
                there—safely and on time. With a trusted global network and
                experienced logistics partners, we offer seamless cargo shipping
                to over 200 destinations worldwide. From regional deliveries to
                international freight, we manage the journey with care,
                compliance, and commitment.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShippingWorldwide;
