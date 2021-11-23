import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Eugene Molari Photography</title>
    </Head>
    <Layout>
    <main>

      <div className={`${styles.section} ${styles.colOne}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colTwo}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colOne}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colThree}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colTwo}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colOne}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colThree}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg'
            alt='Fluorescent bench on South bank - London'
            width='1440'
            height='1080'
          />
          <figcaption>Fluorescent bench on South bank - London</figcaption>
        </figure>
      </div>

      <div className={`${styles.section} ${styles.colOne}`}>
        <figure>
          <Image
            src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg'
            alt='St Johns Tavern-Archway'
            width='1080'
            height='1080'
          />
          <figcaption>St Johns Tavern - Archway</figcaption>
        </figure>
      </div>

    </main>
    </Layout>
    </>
  )
}
