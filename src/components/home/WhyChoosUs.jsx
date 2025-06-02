import React, { useRef } from "react";
import Container from "../Container";
import { Collapse } from "antd";
import { motion, useInView } from "framer-motion";
import { whyChooseUsData } from "../../constants/whyChoosUsData";
import WhyChoosUsImg from "../../assets/images/home/why_choos_us.png";

const WhyChoosUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="w-full  overflow-x-hidden py-24 bg-ct-white"
    >
      <Container>
        <div>
          <div className="text-center text-ct-black">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-3xl font-bold "
            >
              Why Choose Cargo Ton?
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-xl  font-bold "
            >
              Reliable. Responsive. Ready to Deliver.
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 3, ease: "easeOut" }}
              className="text-bass "
            >
              Choosing the right logistics partner can make all the difference.
              Here’s why businesses and individuals trust Cargo Ton:
            </motion.p>
          </div>
        </div>
        <div className="w-full md:h-[400px] pt-10 grid md:grid-cols-2  grid-cols-1 ">
          <div className=" w-full h-auto  bg-ct-black md:rounded-l-xl overflow-hidden">
            <img
              src={WhyChoosUsImg}
              alt="Why Choose Cargo Ton"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="h-full flex items-center bg-ct-white p-5 md:rounded-r-xl overflow-hidden">
            <div className="w-full">
              <Collapse
                accordion
                size="large"
                items={whyChooseUsData}
                defaultActiveKey={["1"]}
                bordered={false}
                className="shadow text-ct-white text-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoosUs;
