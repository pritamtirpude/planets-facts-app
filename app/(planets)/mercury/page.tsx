import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercury | Facts | App",
  description:
    "Mercury is the smallest and closest planet to the Sun in our solar system. It has a rocky, cratered surface with extreme temperature variations, ranging from scorching hot during the day to freezing at night. Mercury lacks a significant atmosphere and natural moons. Its slow rotation means that a day on Mercury is much longer than its year. The planet has been explored by NASA&apos;s MESSENGER mission, providing valuable insights into this intriguing world.",
};

const MercuryPage = () => {
  return <MainContainer />;
};

export default MercuryPage;
