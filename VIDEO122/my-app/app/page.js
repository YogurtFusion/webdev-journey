// "use client"
// import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import fs from "fs/promises"
import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data";

export default async function Home() {
  // const [count, setCount] = useState(0)
  console.log("Heyy this is mapple shyrup")
  // let a = fs.readFile(".gitignore")
  // a.then(e=>{collectSegmentData(e.tostring())})
const a = await fs.readFile(".gitignore", "utf8")
console.log("file content: \n", a)
  return (
    <div className="flex" >
      {/* I'm a component{count}
      <button onClick={()=>{setCount(count+1)}} >Click me </button> */}
    </div>
  );
}
