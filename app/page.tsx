import { Inter } from "next/font/google";
import HeadVideo from "./components/HeadVideo";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <HeadVideo />
    </main>
  );
}
