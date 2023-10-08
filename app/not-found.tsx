"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-6">
      <h1 className="text-8xl text-red-500 font-spartanFont">404</h1>
      <p className="text-xl text-whiteColor font-spartanFont">
        Page not found.
      </p>
      <Link href="/">
        <button
          type="button"
          className="py-3 px-9 w-full rounded-full bg-marsColor text-whiteColor font-antonioFont text-xl mt-4"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
