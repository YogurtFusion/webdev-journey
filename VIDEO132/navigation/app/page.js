import Image from "next/image";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function Home() {
 const pathname = usePathname()
  return (
    <>
    Heyy this is main page
    </>
  );
}
