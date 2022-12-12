import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Storedat Starter template</title>
        <meta name="description" content="Web3 Storage made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://storedat.io">Storedat!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://docs.storedat.io" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about the Storedat API.</p>
          </a>

          <a href="https://auth.storedat.io" className={styles.card}>
            <h2>Beta &rarr;</h2>
            <p>
              Sign up to get access a set of API keys that grant full access to the
              API!
            </p>
          </a>

          <a href="/api/get-arweave-data" className={styles.card}>
            <h2>Get data from Arweave &rarr;</h2>
            <p>Fetch data directly from Arweave</p>
          </a>

          <a href="/api/get-filecoin-data" className={styles.card}>
            <h2>Get data from filecoin &rarr;</h2>
            <p>Fetch data directly from filecoin</p>
          </a>

          <a href="/api/get-glossary-term" className={styles.card}>
            <h2>Get a web3 glossary term &rarr;</h2>
            <p>Check out what the response object looks like</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
