import React from "react";
import { HERO_ITEMS } from "./HeroInfo.constant";

const HeroInfo = () => {
  return (
    <div className="sm:absolute bottom-0 left-0 sm:bg-slate-700/75 sm:text-white grid sm:grid-cols-3 w-full text-center h-56 items-center bg-transparent text-slate-700 sm:mt-0 mt-16 grid-cols-2 sm:gap-0 gap-7">
      {HERO_ITEMS.map((item, index) => (
        <div key={index}>
          <p className="text-5xl font-bold">{item.paragraf}</p>
          <h2 className="mt-3 text-xl">{item.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default HeroInfo;
