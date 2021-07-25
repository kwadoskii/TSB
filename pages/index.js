import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title title="Home" />

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">TSB</a>
        </h1>

        <p className={styles.description}>A forum to write, learn and earn.</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Write &rarr;</h3>
            <p>Capture stories and happening around you.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Read about other people's stories.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Earn &rarr;</h3>
            <p>Get paid for being active every week.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            style={{ visibility: "hidden" }}
          ></a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/kwadoskii" target="_blank" rel="noopener noreferrer">
          Powered by @kwadoskii
        </a>
      </footer>
    </div>
  );
}
