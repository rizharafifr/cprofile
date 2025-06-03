import React from "react";
import { SERVICE_ITEMS } from "./ServiceSection.constant";

const ServiceSection = () => {
  return (
    <>
      {SERVICE_ITEMS.map((item, index) => (
        <div key={index}>
          <i className={item.iClass}></i>
          <p className="font-semibold text-2xl/normal mb-2">{item.header}</p>
          <p className="text-base/loose">{item.bodyContent}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceSection;
