import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earth | Facts | App",
  description:
    "Earth is the third planet from the Sun and the only known planet with abundant life. It has a diverse environment, including oceans, continents, and a life-sustaining atmosphere.",
};

const EarthPage = () => {
  return <MainContainer />;
};

export default EarthPage;
