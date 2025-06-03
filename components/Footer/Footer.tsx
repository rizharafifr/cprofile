import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="pt-20 pb-6 flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-4">
        <p className="">&copy; Copyright 2025</p>

        <div className="flex gap-4">
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
