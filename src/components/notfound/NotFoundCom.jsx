import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const NotFoundCom = () => {
  return (
    <section className="w-full md:h-screen bg-ct-black">
      <Container>
        <div className="w-full h-[100vh] flex items-center justify-center">
          <div className="text-center space-y-2">
            <h2 className="text-3xl text-ct-yellow font-bold">
              404 – Page Not Found
            </h2>
            <p className="text-ct-white text-xl">
              Looks like you’ve reached uncharted waters.
            </p>
            <p className="text-ct-white text-base">
              The page you're looking for might have been moved, deleted, or
              never existed. But don’t worry—we’re here to help you get back on
              track.
            </p>
            <Link to="/">
              <button className="bg-ct-yellow px-5 rounded-full  py-2">
                Go to Homepage
              </button>
            </Link>
            <p className="text-ct-white mt-2">
              Or contact our support team if you need assistance.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundCom;
