import Image from "next/image";
import styles from "./page.module.css";
import fs from "fs/promises"

export default function Home() {

  const SubmitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"));
    let a = await fs.writeFile("chapple.txt", "heyy it's from the chapple ")
    
  }
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
