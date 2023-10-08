"use client";

import solorLottie from "../assets/solar_system.json";
import Lottie from "react-lottie-player";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";

const lottieStyles = {
  width: "100%",
  height: "100%",
};

const Home = () => {
  const matches = useMediaQuery("(max-width: 578px)");

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div
        className={`flex items-center ${matches ? "flex-col px-6" : "px-8"}`}
      >
        <div className="flex-1 justify-center flex">
          <Lottie
            loop
            animationData={solorLottie}
            play
            style={lottieStyles}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>

        <div
          className={`flex-1 ${
            matches && "flex justify-center items-center text-center flex-col"
          }`}
        >
          <h1
            className={`font-spartanFont  ${
              matches ? "text-3xl" : "text-4xl"
            } text-whiteColor`}
          >
            Explore Our Solar System&#39;s Planets
          </h1>
          <p className={`font-spartanFont text-lg text-lightGrayColor`}>
            Step into the extraordinary realm of our solar system&#39;s planets,
            where cosmic wonders and mysteries await your discovery.
          </p>
          <Link href="/mercury">
            <button
              type="button"
              className="bg-mercuryColor font-spartanFont transition-all text-whiteColor px-4 py-3 rounded-full font-bold mt-2 hover:bg-lightGrayColor/20"
            >
              Explore Planets
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
