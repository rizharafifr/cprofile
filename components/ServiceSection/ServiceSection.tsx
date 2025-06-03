"use client";

import React from "react";
import { motion } from "motion/react";
import { SERVICE_ITEMS } from "./ServiceSection.constant";

const ServiceSection = () => {
  return (
    <>
      {SERVICE_ITEMS.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.2, // Delay bertahap: item pertama 0s, kedua 0.2s, ketiga 0.4s, dst.
            ease: "easeOut",
          }}
          className="shadow-2xl p-7 rounded-2xl"
          key={index}
        >
          <i className={item.iClass}></i>
          <p className="font-semibold text-2xl/normal mb-2">{item.header}</p>
          <p className="text-base/loose">{item.bodyContent}</p>
        </motion.div>
      ))}
    </>
  );
};

export default ServiceSection;
