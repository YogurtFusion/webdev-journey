import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} container >
    <img src="https://picsum.photos/500" alt="" />
    </div>
  );
}
