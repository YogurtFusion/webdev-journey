"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchparams = useSearchParams()
  return (
    <>
    Heyy this is main page and blog is {searchparams.get("blog")} and utm source is{searchparams.get("utm_source")} 
    </>
  );
}
