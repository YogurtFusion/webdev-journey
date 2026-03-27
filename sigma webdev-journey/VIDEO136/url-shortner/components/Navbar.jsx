import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="  h-16 bg-purple-700 flex justify-between items-center px-3 text-white">
      <div className="logo">
        <Link href={"/"}>
          <li>BiTLinKs</li>
        </Link>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/shorten"}>
          <li> shorten </li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link href={"/shorten"}>
          <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
            {" "}
            Try Now{" "}
          </button>
        </Link>
        <Link href={"/Github"}>
          <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
            Github
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
