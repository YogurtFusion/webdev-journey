import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-white w-[80vw] absolute top-10 right-[10vw] rounded-full p-5 ">
      <div className="logo flex gap-20 items-center">
        <img 
        className=" h-8"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt="linktree-vg"
        />
        <ul className="flex gap-10 items-center" >
          <li> products </li>
          <li> Templates</li>
          <li> Marketplace</li>
          <li> learn</li>
          <li> Pricing</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
