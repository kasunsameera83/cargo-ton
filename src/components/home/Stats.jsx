import React, { useRef } from "react";
import Container from "../Container";
import StatsCard from "./StatsCard";
import { useInView, motion } from "framer-motion";

const Stats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section ref={sectionRef} className="w-full bg-ct-yellow overflow-x-hidden">
      <Container>
        <div className="w-full h-full py-24">
          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-ct-black text-3xl font-bold text-center"
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-xl font-bold text-center"
            >
              Delivering Excellence, One Shipment at a Time
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 3, ease: "easeOut" }}
              className="text-bass text-center mb-10"
            >
              We’re proud of what we’ve accomplished—and we’re just getting
              started:
            </motion.p>
          </div>
          <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-2">
            <StatsCard
              trigger={isInView}
              amount={2340}
              title="Delivered Packages"
            />
            <StatsCard
              trigger={isInView}
              amount={193}
              title="Countries Coverd"
            />
            <StatsCard trigger={isInView} amount={510} title="Tons of Goods" />
            <StatsCard
              trigger={isInView}
              amount={1430}
              title="Satisfied Clients"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
