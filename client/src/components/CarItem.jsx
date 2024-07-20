import React from "react";
import { Link } from "react-router-dom";
import porsche2 from "../assets/porsche2.jpg";

export default function CarItem() {
  return (
    <div className="m-4 rounded-xl bg-platinum flex flex-row">
      <div className="p-6 mr-10">
        <Link to={"/cars/"} className="font-bold text-seaLight hover:text-seaDark text-md lg:text-2xl">
          2024 Porsche 911 GT3 RS
        </Link>
        <p className="text-jet">
          4.0L 6 Cylinder <br />
          50,000 mi
        </p>
      </div>

      <img
        src={porsche2}
        alt="porsche 911"
        className="w-80 h-64 object-cover bg-red-200 rounded-r-lg ml-2"
      />
    </div>
  );
}
