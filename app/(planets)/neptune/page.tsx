import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neptune | Facts | App",
  description:
    "Neptune is the eighth and farthest planet from the Sun. It is a blue, stormy planet with high-speed winds and a dynamic atmosphere. Neptune is known for its dark storm system, the Great Dark Spot.",
};

const NeptunePage = () => {
  return <MainContainer />;
};

export default NeptunePage;
