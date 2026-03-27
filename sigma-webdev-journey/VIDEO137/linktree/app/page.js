"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [invalue, setInvalue] = useState("linktr.ee/");
  return (
    <main>
      <section className="bg-[#d2e823] min-h-screen grid grid-cols-2 ">
        <div className="flex justify-center flex-col ml-[10vw] gap-3 ">
          <p className="text-[#254f1a] font-bold text-7xl">
            A link in bio built{" "}
          </p>
          <p className="text-[#254f1a] font-bold text-7xl">for you. </p>

          <p className="text-[#254f1a] text-xl my-4">
            join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="input flex gap-2">
            <input
              type="text"
              className="p-2 focus:outline-green-700 bg-white rounded-md "
              placeholder="bittr.ee/your-url"
              onChange={(e) => setInvalue(e.target.value)}
              value={invalue}
            />
            <button className="bg-pink-200 rounded-full px-4 py-4 font-semibold">
              Claim your Bittree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col my-[10vw] mt-[10vw] ">
          <img src="/home.png" alt="homepage image" />
        </div>
      </section>

      <section className="bg-red-700 min-h-screen"></section>
    </main>
  );
}
