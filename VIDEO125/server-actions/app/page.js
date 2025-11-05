"use client"
import styles from "./page.module.css";
import { SubmitAction } from "@/actions/form";


export default function Home() {

  
  return (
  <div className={styles.page} >
    <form action={SubmitAction} className={styles.main}>
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
