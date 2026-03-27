import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-white w-[80vw]  fixed top-10  mx-auto right-0 left-0 rounded-full py-5  px-7 border ">
      <div className="logo flex gap-20 justify-between items-center ">
        <img
          className=" h-8"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt="linktree-vg"
        />
        <ul className="flex gap-10 items-center">
          <li> products </li>
          <li> Templates</li>
          <li> Marketplace</li>
          <li> learn</li>
          <li> Pricing</li>
        </ul>
      </div>
      <div className="flex gap-10 font-bold ">
        <button className="login hover:bg-gray-200 bg-gray-100 p-4 rounded-lg ">
          Log in
        </button>
        <button className="signup bg-gray-900 text-white p-4 rounded-full">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
