import { Inter } from "next/font/google";
import App from "./components/App";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
