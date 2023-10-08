import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PlanetTypeProps } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeVariants } from "@/utils/animation";

type PlanetImageProps = {
  tabIndex: number;
  data: PlanetTypeProps;
};

const PlanetImage = ({ tabIndex, data }: PlanetImageProps) => {
  const matches = useMediaQuery("(max-width: 578px)");

  const pathname = usePathname();

  let planetName = pathname.split("/")[1];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={fadeVariants}
      className="flex-[40%] flex py-20 items-center relative justify-center md:justify-center md:py-0 md:pt-16 md:pb-20 xl:pb-28"
    >
      <Image
        src={
          tabIndex === 0 || tabIndex === 2
            ? data[0].images.planet
            : tabIndex === 1
            ? data[0].images.internal
            : ""
        }
        alt={data[0].name}
        width={matches ? 200 : 450}
        height={matches ? 200 : 450}
        priority={true}
        className="object-cover"
      />
      {tabIndex === 2 && (
        <Image
          src={tabIndex === 2 ? data[0].images.geology : ""}
          alt={data[0].name}
          width={matches ? 80 : 200}
          height={matches ? 80 : 200}
          priority={true}
          className={`object-cover absolute top-[62%] right-1/2  translate-x-1/2 bottom-0  xl:right-[50%] md:top-[62%] ${
            planetName === "saturn" ? "xl:top-[58%] top-[58%]" : "xl:top-[68%]"
          } `}
        />
      )}
    </motion.div>
  );
};

export default PlanetImage;
