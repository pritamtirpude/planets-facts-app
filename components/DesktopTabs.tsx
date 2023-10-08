import { TabsProps } from "@/types";
import { planetLinks } from "@/utils";
import { usePathname } from "next/navigation";

const buttonStats = [
  {
    label: "Overview",
  },
  {
    label: "Internal Structure",
  },
  {
    label: "Surface Geology",
  },
];

const DesktopTabs = ({ setTabIndex, tabIndex }: TabsProps) => {
  const pathname = usePathname();

  let planetName = pathname.split("/")[1];

  const colorData = planetLinks.filter(
    (planet) => planet.label.toLowerCase() === planetName.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-4 md:flex-1 md:mt-6">
      {buttonStats.map((stats, index) => (
        <button
          type="button"
          onClick={() => setTabIndex(index)}
          key={stats.label}
          className="flex items-center gap-2 py-3 px-7 text-whiteColor uppercase tracking-widest font-spartanFont border border-lightGrayColor/25 transition-all"
          style={{
            backgroundColor: index == tabIndex ? colorData[0].color : "",
          }}
        >
          <span className="text-whiteColor/75">0{index + 1}</span>
          {stats.label}
        </button>
      ))}
    </div>
  );
};

export default DesktopTabs;
