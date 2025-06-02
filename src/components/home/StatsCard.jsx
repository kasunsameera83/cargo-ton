import React from "react";
import { Card, Statistic } from "antd";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const StatsCard = ({ amount, title, trigger }) => {
  console.log(trigger);
  return (
    <Card className="shadow bg-ct-white">
      <motion.div className="w-full  text-ct-black">
        <h2 className="text-6xl font-bold text-center">
          {trigger ? <CountUp start={0} end={amount} duration={2} /> : 0}
        </h2>
      </motion.div>
      <div>
        <p className="text-base font-bold text-center">{title}</p>
      </div>
    </Card>
  );
};

export default StatsCard;
