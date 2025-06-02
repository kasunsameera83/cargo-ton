import React, { useRef } from "react";
import Container from "./Container";
import Logo from "../assets/images/cargo-ton-logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { useInView, motion } from "framer-motion";

const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="w-full bg-ct-black overflow-x-hidden md:py-24"
    >
      <Container>
        <div className="w-full h-full py-10">
          <div className="text-center text-ct-white mb-10 space-y-2">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-3xl font-bold "
            >
              Ready to Ship with Confidence?
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              Let Cargo Ton handle your next shipment with speed, care, and
              reliability.
            </motion.p>
            <div className="py-2">
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
                className="text-ct-black bg-ct-yellow px-5 py-2 rounded-full font-bold"
              >
                Get a Free Quote
              </motion.button>
            </div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 3.5, ease: "easeOut" }}
            >
              Start your shipping journey today with a custom solution tailored
              to your needs.
            </motion.p>
          </div>
          <hr></hr>
          <div className="grid md:grid-cols-4 grid-cols-1 md:h-[200px] gap-3 py-10">
            <div className="h-full ">
              <div>
                <img width={250} src={Logo} alt="logo" />
                <div className="w-full text-ct-white mt-5">
                  <p className="font-bold text-xl mb-3">Contact Us:</p>
                  <div className="flex items-start gap-2 justify-start mb-2">
                    <FaLocationDot className="mt-1" />
                    <p>No. 123, Marine Drive, Colombo, Sri Lanka</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt />
                    <p className="text-left">+94 77 123 4567</p>
                  </div>
                  <div
                    className="
                        w-full 
                        bg-ct-yellow 
                        rounded-full 
                        p-3 
                        mt-5 
                        text-ct-black 
                        flex 
                        gap-3
                        justify-center
                        items-center"
                  >
                    <p className="font-bold">Follow Us:</p>
                    <div className="flex gap-5">
                      <FaFacebook size={24} />
                      <FaInstagramSquare size={24} />
                      <SiYoutubemusic size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-ct-white">
              <p className="font-bold text-ct-yellow">Quick Link</p>
              <ul>
                {navLinks
                  ? navLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="text-ct-white">
              <p className="font-bold text-ct-yellow">Latest News</p>
              <ul>
                <li>
                  <Link to="#">
                    <p>Shipping Alerts & Route Changes</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Industry News</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Company Announcements</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-ct-white">
              <p className="font-bold text-ct-yellow">Customer Services</p>
              <ul>
                <li>
                  <Link to="#">
                    <p>Sea Freight</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Air Freight</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Land Transport</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Customs Clearance</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p>Contacrt Us</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-ct-white text-center md:mt-20">
            <p>© 2025 Cargo Ton. All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
