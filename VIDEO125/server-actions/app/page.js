"use client"
import styles from "./page.module.css";
import { SubmitAction } from "@/actions/form";
import { useRef } from "react";


export default function Home() {

  let ref = useRef()
  return (
  <div className={styles.page} >
    <form ref={ref}  action={(e)=>{ SubmitAction(e); ref.current.reset()}} className={styles.main}>
      <div >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="text-white" />
      </div>
      <div>
        <label htmlFor="add">Address </label>
        <input name="add" id="add"
        className="text-white"  type="text" />
      </div>

      <div>
        <button>Submit</button>
        
      </div>
    </form>
    </div>
  );
}
