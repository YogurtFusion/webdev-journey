"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // console.log("the id is ", process.env.ID, "and the password is ", process.env.SECRET);
  
  return (
  <div className="">
    {/* hey this is a home page and here is ID: {process.env.ID} */}
    {/* <p>and the secret is: {process.env.SECRET} </p> */}
    <h1>this is from local ENV {process.env.CARD} </h1>
    <h2>the public id is {process.env.NEXT_PUBLIC_ID} </h2>
    <h1>and the test is {process.env.NEXT_PUBLIC_TEST} </h1>
  </div>
  );
}
