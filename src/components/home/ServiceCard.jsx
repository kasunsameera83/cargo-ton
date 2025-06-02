import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const ServiceCard = ({ imageUrl, title, description, lmPath }) => {
  return (
    <Card className="shadow-xl">
      <div className="w-full flex justify-center mb-5">
        <img src={imageUrl} alt="" />
      </div>
      <div className="w-full md:h-[120px] h-[170px] md:text-left text-center">
        <h3 className="text-ct-black text-xl font-bold">{title}</h3>
        <p className="text-ct-black text-base">{description}</p>
      </div>
      <div>
        <Link to={lmPath} className="justify-center flex md:justify-start">
          <button className="bg-ct-black text-ct-yellow  px-4 py-2 md:px-3 cursor-pointer rounded-full">
            Learn More
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
