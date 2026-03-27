"use client"
import Imagse from "next/image";
import styles from "./page.module.css";

export default function Home() {
  
  const handleClick = async  () => {
    let data = [
      {
      name: "Harry",
      role: "Coder"
    },
      {name: "test", 
      role: "test2",}
    ]
    

    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res);
    
  }
  
  return (
    <div className={styles.page}>
     <h1>Next js Api routes demo</h1>
     <button onClick={handleClick} >click me </button>
    </div>
  );
}
