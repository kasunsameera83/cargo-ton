import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" justify-center flex  overflow-hidden">
      <div className="w-[1200px] px-5 md:px-5">{children}</div>
    </div>
  );
};

export default Container;
