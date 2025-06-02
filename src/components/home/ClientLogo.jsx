import React, { useRef } from "react";
import Container from "../Container";
import { motion, useInView } from "framer-motion";

const logos = [
  "/images/company_logos/company-01.png",
  "/images/company_logos/company-02.png",
  "/images/company_logos/company-03.png",
  "/images/company_logos/company-04.png",
  "/images/company_logos/company-05.png",
  "/images/company_logos/company-06.png",
  "/images/company_logos/company-07.png",
  "/images/company_logos/company-08.png",
];

const ClientLogo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="w-full bg-ct-black overflow-x-hidden py-24"
    >
      <Container>
        <div className="w-full h-full">
          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-ct-yellow text-3xl font-bold text-center"
            >
              Our Clients
            </motion.h2>
            <motion.div
              className="flex w-max gap-10 mt-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <img
                  className="h-20 w-auto object-contain"
                  src={logo}
                  key={index}
                  alt={`Client ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientLogo;
