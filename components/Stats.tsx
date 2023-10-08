import { PlanetTypeProps } from "@/types";

const Stats = ({ data }: { data: PlanetTypeProps }) => {
  return (
    <div
      className={`flex justify-between gap-8 items-center mt-20 flex-col md:flex-row xl:flex-row`}
    >
      <div
        className={`w-full flex items-center justify-between  xl:flex-col xl:items-start xl:justify-normal md:items-start md:flex-col md:justify-normal  border border-lightGrayColor/25 px-6 py-5`}
      >
        <span
          className={`text-whiteColor/40 font-spartanFont  uppercase tracking-wider text-xs xl:text-base md:text-[10px]`}
        >
          Rotation Time
        </span>
        <h3
          className={`text-whiteColor font-antonioFont text-xl xl:text-4xl md:text-2xl`}
        >
          {data[0].rotation}
        </h3>
      </div>

      <div
        className={`w-full flex items-center justify-between  xl:flex-col xl:items-start xl:justify-normal md:flex-col md:items-start md:justify-normal  border border-lightGrayColor/25 px-6 py-5`}
      >
        <span
          className={`text-whiteColor/40 font-spartanFont uppercase tracking-wider text-xs xl:text-base md:text-[10px]`}
        >
          Revolution Time
        </span>
        <h3
          className={`text-whiteColor font-antonioFont text-xl xl:text-4xl md:text-2xl`}
        >
          {data[0].revolution}
        </h3>
      </div>

      <div
        className={`w-full flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal md:flex-col md:items-start md:justify-normal  border border-lightGrayColor/25 px-6 py-5`}
      >
        <span
          className={`text-whiteColor/40 font-spartanFont uppercase tracking-wider text-xs xl:text-base md:text-[10px]`}
        >
          Radius
        </span>
        <h3
          className={`text-whiteColor font-antonioFont text-xl xl:text-4xl md:text-2xl`}
        >
          {data[0].radius}
        </h3>
      </div>

      <div
        className={`w-full flex items-center justify-between  xl:flex-col xl:items-start xl:justify-normal  md:flex-col md:items-start md:justify-normal  border border-lightGrayColor/25 px-6 py-5`}
      >
        <span
          className={`text-whiteColor/40 font-spartanFont uppercase tracking-wider text-xs xl:text-base md:text-[10px]`}
        >
          Average temp.
        </span>
        <h3
          className={`text-whiteColor font-antonioFont text-xl xl:text-4xl md:text-2xl`}
        >
          {data[0].temperature}
        </h3>
      </div>
    </div>
  );
};

export default Stats;
