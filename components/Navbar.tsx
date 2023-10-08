"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { planetLinks } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  let planetName = pathname.split("/")[1];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSidebaropen, setIsSidebaropen] = useState<boolean>(false);
  const [active, setActive] = useState<number>();

  const matches = useMediaQuery("(max-width: 568px)");

  const handleStates = () => {
    setIsOpen(false);
    setIsSidebaropen(false);
    setActive(undefined);
  };

  useEffect(() => {
    if (planetName === "mercury") {
      setActive(0);
    }
  }, [planetName]);

  return (
    <header>
      <nav
        className={`flex justify-between z-50 fixed w-full top-0 left-0 h-[12vh] items-center border-b border-b-lightGrayColor/25 bg-darkBlueColor px-6 md:relative md:h-auto md:flex md:flex-col md:py-8 md:gap-5 xl:flex-row`}
      >
        <div>
          <Link href="/">
            <h1
              onClick={handleStates}
              className="text-whiteColor font-antonioFont text-[28px] uppercase"
            >
              The Planets
            </h1>
          </Link>
        </div>

        {matches && (
          <div
            className="text-whiteColor"
            onClick={() => setIsSidebaropen((prevState) => !prevState)}
          >
            <Hamburger size={25} toggle={setIsOpen} toggled={isOpen} />
          </div>
        )}

        {!matches && (
          <ul className="flex gap-8 items-center">
            {planetLinks.map((link, index) => (
              <Link href={link.link} key={`${link.label}-${index}`}>
                <li
                  onClick={() => setActive(index)}
                  className={`font-spartanFont relative cursor-pointer tracking-widest font-bold text-xs  uppercase text-whiteColor/75`}
                  style={{ color: active === index ? link.color : "" }}
                >
                  {link.label}
                  <motion.div
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.3 }}
                    animate={{ width: active === index ? "100%" : "0%" }}
                    className="absolute  h-1 xl:-top-[2.8rem] md:top-[2.8rem]"
                    style={{
                      backgroundColor: active === index ? link.color : "",
                    }}
                  ></motion.div>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
      <AnimatePresence mode="wait" initial={false}>
        {isSidebaropen && (
          <MobileSidebar
            setIsSidebaropen={setIsSidebaropen}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
