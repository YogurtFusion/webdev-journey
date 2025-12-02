import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("the id is ", process.env.ID, "and the password is ", process.env.SECRET);
  
  return (
  <div className="">
    hey this is a home page and here is ID: {process.env.ID}
    <p>and the secret is: {process.env.SECRET} </p>
  </div>
  );
}
