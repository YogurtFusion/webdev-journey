"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenrated] = useState("");

  const genrate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      short: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/genrate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenrated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        alert(result.message);
        console.log(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Genrate your short URLS</h1>
      <div className="flex flex-col gap-2">
        <input
          className="px-4 py-2 focus:outline-purple-600 rounded-md "
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          className="px-4 py-2 focus:outline-purple-600 rounded-md "
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button
          onClick={genrate}
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white "
        >
          Genrate
        </button>
      </div>
      {generated &&<> <span className="font-bold text-lg outline-2 outline-black">Your Link</span>
         <code><Link target="_blank" href={generated} >{generated} </Link></code> </> } 
    </div>
  );
};

export default Shorten;
