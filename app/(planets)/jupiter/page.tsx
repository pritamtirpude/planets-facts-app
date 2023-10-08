import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jupiter | Facts | App",
  description:
    "Jupiter is the largest planet in our solar system, known for its massive size and strong bands of gas in its atmosphere. It has a turbulent storm known as the Great Red Spot and a system of rings.",
};

const JupiterPage = () => {
  return <MainContainer />;
};

export default JupiterPage;
