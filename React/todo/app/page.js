"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
import Form from "@/src/components/Form";

export default function Home() {
  return (
   <div>
    <Header/>
    <TODOHero todos_completed={0} total_todos={0}/>
    <Form/>
    <TODOList todos={[]}/>
   </div>
  );
}
