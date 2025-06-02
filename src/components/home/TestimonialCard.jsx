import { Avatar, Card } from "antd";
import React from "react";
import { FaQuoteLeft, FaUserTie } from "react-icons/fa";

const TestimonialCard = ({ content, name, designation, avatar }) => {
  return (
    <Card className="shadow-xl bg-ct-white">
      <div>
        <FaQuoteLeft size={40} className="text-ct-black/40" />
      </div>
      <div className="py-5 h-[100px]">
        <p>{content}</p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <div>
          <Avatar
            size="large"
            src={avatar ? avatar : null}
            icon={avatar ? null : <FaUserTie className="text-ct-white" />}
          />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="italic">{designation}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
