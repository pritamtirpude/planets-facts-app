"use client";

import { PlanetTypeProps } from "@/types";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Stats from "./Stats";
import MobileTabs from "./MobileTabs";
import DesktopTabs from "./DesktopTabs";
import PlanetImage from "./PlanetImage";
import PlanetInfo from "./PlanetInfo";
import { AnimatePresence } from "framer-motion";
import { data } from "@/data";
import { usePathname } from "next/navigation";

const MainContainer = () => {
  const pathname = usePathname();

  let planetName = pathname.split("/")[1];

  const planetdata = data.filter(
    (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
  );

  const matches = useMediaQuery("(max-width: 578px)");

  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="relative top-[12vh] max-w-5xl mx-auto xl:pb-24 md:pb-20 md:py-0 py-16 px-6">
      <div
        className={`xl:flex xl:justify-between  xl:flex-row md:flex-col md:justify-center md:items-center
          flex-col justify-center items-center w-full h-full`}
      >
        {/* Planet Image */}
        <AnimatePresence mode="wait" initial={false}>
          <PlanetImage key={tabIndex} tabIndex={tabIndex} data={planetdata} />
        </AnimatePresence>
        <div
          className={`flex-1 max-w-sm text-center xl:text-start xl:flex-col xl:gap-4 md:text-start md:flex md:max-w-full md:mt-7 md:gap-16`}
        >
          {/* Planet Info */}
          <PlanetInfo tabIndex={tabIndex} data={planetdata} />

          {matches ? (
            <MobileTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
          ) : (
            <DesktopTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
          )}
        </div>
      </div>

      {/* Stats */}
      <Stats data={planetdata} />
    </div>
  );
};

export default MainContainer;
