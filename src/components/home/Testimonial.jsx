import React from "react";
import Container from "../Container";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="w-full overflow-x-hidden py-24 bg-ct-white">
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="text-center text-ct-black flex items-center">
            <div>
              <h2 className="text-3xl font-bold ">What Our Clients Say</h2>
              <p className="text-xl  font-bold ">
                Real Stories. Real Satisfaction.
              </p>
              <p className="text-bass ">
                We take pride in building strong relationships with our clients.
                Here’s what they have to say about working with Cargo Ton
              </p>
            </div>
          </div>
          <TestimonialCard
            content="Cargo Ton has been an absolute game-changer for our business. 
            Their on-time delivery and professional service give us complete peace of mind."
            name="Nimal Perera"
            designation="Import Manager"
            avatar=""
          />
          <TestimonialCard
            content="From customs handling to final delivery, everything was smooth and efficient. 
            Highly recommend Cargo Ton for any shipping needs!"
            name="Ayesha Fernando"
            designation="Small Business Owner"
            avatar=""
          />
          <TestimonialCard
            content="Their customer service is outstanding. Always responsive, always helpful. 
            We've found a long-term logistics partner in Cargo Ton."
            name="Michael Gomez"
            designation="Operations Director"
            avatar=""
          />
          <TestimonialCard
            content="I’ve shipped with many companies before, but Cargo Ton stands out for their 
            reliability and professionalism. They handled every detail perfectly."
            name="Dilshan Jayawardena"
            designation="Exporter"
            avatar=""
          />
          <TestimonialCard
            content="Fast, friendly, and efficient. Cargo Ton made international shipping feel effortless. 
            I’ll definitely use them again!"
            name="Tharani Silva"
            designation="Online Store Owner"
            avatar=""
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
