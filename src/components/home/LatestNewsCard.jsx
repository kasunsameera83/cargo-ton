import { Card } from "antd";
import React from "react";

const LatestNewsCard = ({ coverImage, title, description }) => {
  return (
    <Card className="shadow">
      <div className="flex items-center justify-between gap-2">
        <div>
          <img src={coverImage} alt="News And Updates" />
        </div>
        <div className="w-full text-ct-black">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default LatestNewsCard;
