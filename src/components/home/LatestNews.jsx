import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import Container from "../Container";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

import NewsCoverImage01 from "../../assets/images/home/new_cover_img_01.jpg";
import { Link } from "react-router-dom";
import LatestNewsCard from "./LatestNewsCard";

import NewsCover02 from "../../assets/images/home/news_cover_image_02.png";

const LatestNews = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  return (
    <section
      ref={sectionRef}
      className="w-full bg-ct-white overflow-x-hidden md:py-24 py-10"
    >
      <Container>
        <div className="w-full h-full py-10">
          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-ct-black text-3xl font-bold text-center"
            >
              Latest News & Updates
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-xl text-center"
            >
              Stay Informed with the World of Shipping
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 3, ease: "easeOut" }}
              className="text-base text-center mb-10"
            >
              From industry insights to company milestones, explore the latest
              updates from Cargo Ton. Stay ahead with news that matters to your
              business and global trade.
            </motion.p>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 md:h-[650px]">
            <div className="col-span-2">
              <Link to="#">
                <Card
                  actions={<button>Read More</button>}
                  className="shadow"
                  cover={<img src={NewsCoverImage01} alt="news and updates" />}
                >
                  <Meta
                    title="Shipping Alerts & Route Changes"
                    description="Get real-time updates on service routes and seasonal shipping adjustments."
                  />
                </Card>
              </Link>
            </div>
            <div className="h-[628px] overflow-hidden overflow-y-visible gap-2 flex flex-col">
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                className="mb-5"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
              <LatestNewsCard
                coverImage={NewsCover02}
                title="Industry News"
                description="Discover trends, tips, and insights in global logistics and supply chain management."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
