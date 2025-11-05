import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <form action="">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="text-white" />
      </div>
    </form>
  );
}
