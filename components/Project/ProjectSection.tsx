"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { PROJECT_ITEMS } from "./Project.constant";

const ProjectSection = () => {
  return (
    <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {PROJECT_ITEMS.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.3, // Delay bertahap: item pertama 0s, kedua 0.2s, ketiga 0.4s, dst.
            ease: "easeOut",
          }}
          className="shadow-2xl p-4 rounded-2xl"
          key={index}
        >
          <Image
            src={item.image}
            alt="Proyek Image"
            className="rounded-tl-2xl rounded-tr-2xl"
          />
          <h1 className="mt-6 mb-3 text-2xl font-semibold">{item.header}</h1>
          <p className="text-base/loose ">{item.content}</p>
          <div className="mt-6 mb-3">
            <Link
              href={"#"}
              className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
            >
              Lihat Website
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectSection;
