import Link from "next/link";
import Image from "next/image";
import iconSource from "../assets/icon-source.svg";
import { fadeParagraphVariants } from "@/utils/animation";
import { motion, AnimatePresence } from "framer-motion";

import { PlanetTypeProps } from "@/types";

type PlanetImageProps = {
  tabIndex: number;
  data: PlanetTypeProps;
};

const PlanetInfo = ({ tabIndex, data }: PlanetImageProps) => {
  return (
    <div className="md:flex-1">
      <h2
        className={` text-[40px] xl:text-[80px] md:text-[48px] font-antonioFont uppercase text-whiteColor`}
      >
        {data[0].name}
      </h2>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={tabIndex}
          variants={fadeParagraphVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="text-whiteColor/75 mt-6 font-spartanFont text-base"
        >
          {tabIndex === 0
            ? data[0].overview.content
            : tabIndex === 1
            ? data[0].structure.content
            : tabIndex === 2
            ? data[0].geology.content
            : ""}
        </motion.p>
      </AnimatePresence>

      <div
        className={`flex items-center gap-1 mt-6 justify-center xl:justify-start md:justify-start`}
      >
        <span className="text-whiteColor/60 font-spartanFont font-light tracking-wide">
          Source :
        </span>
        <Link
          href={`${
            tabIndex === 0
              ? data[0].overview.source
              : tabIndex === 1
              ? data[0].structure.source
              : tabIndex === 2
              ? data[0].geology.source
              : ""
          }`}
          target="_blank"
        >
          <strong className="underline cursor-pointer flex gap-1 font-spartanFont text-whiteColor/75">
            Wikipedia
          </strong>
        </Link>

        <Image
          src={iconSource}
          width={10}
          height={10}
          alt="icon to open new tab"
        />
      </div>
    </div>
  );
};

export default PlanetInfo;
