import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Archviz.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>✌ Hey Welcome!</span>
          <h1>News about the <span>Archviz </span>World.</h1>
          <p>
            Get access to all the publications <br/>
            <span> for $ 4.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/dragon-640.png" alt="Rendering Character" />
      </main>
    </>
     
  )
}
