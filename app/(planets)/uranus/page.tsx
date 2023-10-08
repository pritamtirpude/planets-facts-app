import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uranus | Facts | App",
  description:
    "Uranus is the seventh planet from the Sun and has a unique feature: it rotates on its side. It is often referred to as an (ice giant) due to its composition of icy materials and gases.",
};

const UranusPage = () => {
  return <MainContainer />;
};

export default UranusPage;
