import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className= {styles.page}>
    <img src="https://picsum.photos/1500" width={500} height={500} alt="Random imgae" fill={true} object-contain />
   <Image src= "https://picsum.photos/1000" width={500} height={500} alt="Random iamge" />
    </div>
  );
}
