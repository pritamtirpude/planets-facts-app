import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saturn | Facts | App",
  description:
    "Saturn is famous for its stunning ring system, consisting of icy particles and rock. It is the sixth planet from the Sun and has a similar composition to Jupiter, with a prominent ring system.",
};

const SaturnPage = () => {
  return <MainContainer />;
};

export default SaturnPage;
