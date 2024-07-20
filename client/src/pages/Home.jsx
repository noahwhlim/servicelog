import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
      <h1 className="text-jet font-bold text-3xl lg:text-6xl">
        Track, Maintain, Share Your Car's Journey <br />
        <span className="text-sea">With Ease</span>
      </h1>
      <div className="text-gray-400 text-xs sm:text-sm">
        ServiceLog will help you keep track of your cars service records <br />
        and share them with the next owner
      </div>
      <Link
        to={"/search"}
        className="inline-block text-md sm:text-lg bg-sea text-platinum font-bold py-2 px-4 rounded-lg w-fit"
      >
        Let's get started
      </Link>
    </div>
  );
}
