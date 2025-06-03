"use client";

import Link from "next/link";
import React from "react";
import useScrollToTop from "./useScrollToTop";

const ScrollToTop = () => {
  const { isVisible } = useScrollToTop();
  return (
    <Link
      href={"#beranda"}
      className={`fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full text-center hover:bg-slate-700 cursor-pointer transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
};

export default ScrollToTop;
