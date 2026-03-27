"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      {" "}
      <div className="">
        this is use params bitch and this is params 👉 {params.slug}{" "}
      </div>
      blogpage
      <div className="chal_chiaya_chaiya">
        <button type="button" onClick={() => router.push("/dashboard")}>
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default page;
