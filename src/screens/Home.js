import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";
import Card from "./../components/Card";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-2  ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
                                            