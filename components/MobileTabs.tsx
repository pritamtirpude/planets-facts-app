import { usePathname } from "next/navigation";
import { planetLinks } from "@/utils";
import { TabsProps } from "@/types";
import { motion } from "framer-motion";

const buttonStats = [
  {
    mobile: "Overview",
  },
  {
    mobile: "Structure",
  },
  {
    mobile: "Surface",
  },
];

const MobileTabs = ({ setTabIndex, tabIndex }: TabsProps) => {
  const pathname = usePathname();

  let planetName = pathname.split("/")[1];

  const colorData = planetLinks.filter(
    (planet) => planet.label.toLowerCase() === planetName.toLowerCase()
  );

  return (
    <div className="fixed flex top-[12vh] bg-darkBlueColor left-0 right-0">
      {buttonStats.map((stats, index) => (
        <button
          type="button"
          onClick={() => setTabIndex(index)}
          key={stats.mobile}
          className={`flex relative w-full items-center justify-center py-5 font-bold transition-all  uppercase tracking-widest font-spartanFont border-b border-b-lightGrayColor/25 text-xs ${
            tabIndex === index ? "text-whiteColor" : "text-lightGrayColor/75"
          }`}
        >
          {stats.mobile}
          <motion.div
            initial={{ width: "0%" }}
            transition={{ duration: 0.4 }}
            animate={{ width: tabIndex === index ? "100%" : "0%" }}
            className="absolute h-1 top-full"
            style={{
              backgroundColor: index == tabIndex ? colorData[0].color : "",
            }}
          ></motion.div>
        </button>
      ))}
    </div>
  );
};

export default MobileTabs;
