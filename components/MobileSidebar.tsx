import { planetLinks } from "@/utils";
import ChevronIcon from "../assets/icon-chevron.svg";
import Image from "next/image";
import Link from "next/link";
import { MobileSidebarProps } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { mobileULVariants, mobileLIVariants } from "@/utils/animation";

const MobileSidebar = ({ setIsSidebaropen, setIsOpen }: MobileSidebarProps) => {
  const handleClicks = () => {
    setIsSidebaropen(false);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-screen z-50 px-6 fixed top-[12vh] py-11 left-0 xl:hidden md:hidden bg-darkBlueColor">
      <motion.ul
        variants={mobileULVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {planetLinks.map((link, index) => (
          <Link href={link.link} key={`${link.label}-${index}`}>
            <motion.li
              custom={index}
              variants={mobileLIVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              key={index}
            >
              <div
                onClick={handleClicks}
                className="flex justify-between items-center py-5 border-b border-b-lightGrayColor/25"
              >
                <div className="flex gap-6 items-center">
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: `${link.color}` }}
                  ></div>
                  <h1 className="text-whiteColor font-bold font-spartanFont text-base uppercase">
                    {link.label}
                  </h1>
                </div>

                <Image src={ChevronIcon} alt="chevron icon" />
              </div>
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </div>
  );
};

export default MobileSidebar;
