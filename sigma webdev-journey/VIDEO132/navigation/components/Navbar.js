"use client"
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="">
        Navbar
      </div>
      <div className="">
        this navbar is inside{pathname}
      </div>
    </div>
  );
};

export default Navbar;
