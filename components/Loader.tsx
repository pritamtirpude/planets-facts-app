"use client";

import Lottie from "react-lottie-player";
import spaceshipLottie from "../assets/spaceship.json";

const lottieStyles = {
  width: 300,
  height: "100%",
};

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie loop animationData={spaceshipLottie} play style={lottieStyles} />
    </div>
  );
};

export default Loader;
