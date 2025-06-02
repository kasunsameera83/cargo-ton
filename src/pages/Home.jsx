import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import WhyChoosUs from "../components/home/WhyChoosUs";
import Testimonial from "../components/home/Testimonial";
import ClientLogo from "../components/home/ClientLogo";
import LatestNews from "../components/home/LatestNews";
import ShippingWorldwide from "../components/home/ShippingWorldwide";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Welcome />
      <ShippingWorldwide />
      <Services />
      <WhyChoosUs />
      <Stats />
      <Testimonial />
      <ClientLogo />
      <LatestNews />
    </MainLayout>
  );
};

export default Home;
