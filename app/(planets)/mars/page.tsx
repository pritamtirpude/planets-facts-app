import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mars | Facts | App",
  description:
    "Mars, often called the (Red Planet) is the fourth planet from the Sun. It has a rusty red surface due to iron oxide (rust). Mars has been a target for exploration, with evidence of past water and potential habitability.",
};

const MarsPage = () => {
  return <MainContainer />;
};

export default MarsPage;
