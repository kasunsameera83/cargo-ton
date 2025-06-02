import React, { useRef } from "react";
import Container from "../Container";
import Card from "./ServiceCard";
import { motion, useInView } from "framer-motion";
import SeaFreightIcon from "../../assets/images/home/sea_freight.png";
import AirFreight from "../../assets/images/home/air_freight.png";
import LandTransport from "../../assets/images/home/land_transport.png";
import CustomsClearance from "../../assets/images/home/customs_clearance.png";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="w-full md:h-[600px] bg-ct-white overflow-x-hidden"
    >
      <Container>
        <div className="w-full h-full md:py-10">
          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-ct-black text-3xl font-bold text-center"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-balance text-center mb-10"
            >
              At Cargo Ton, we offer a full range of shipping and logistics
              services to ensure your cargo moves smoothly, safely, and on
              time—every time.
            </motion.p>
          </div>
          <div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Card
                  imageUrl={SeaFreightIcon}
                  title="Sea Freight"
                  description="Cost-effective shipping for large volumes across international waters."
                  lmPath=""
                />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Card
                  imageUrl={AirFreight}
                  title="Air Freight"
                  description="Fast and efficient delivery for time-sensitive cargo."
                  lmPath=""
                />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <Card
                  imageUrl={LandTransport}
                  title="Land Transport"
                  description="Fast and efficient delivery for time-sensitive cargo."
                  lmPath=""
                />
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                <Card
                  imageUrl={CustomsClearance}
                  title="Customs Clearance"
                  description="Hassle-free documentation and clearance services to simplify global trade."
                  lmPath=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
