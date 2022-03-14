import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Mixed.module.scss'

const Mixed = () => {
  return (
    <>
      <Head>
        <title>Gothenburg 2018 | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Gothenburg 2018</h1>
          </div>

          <div className={`${styles2.section} ${styles2.colOneLandscape}`}>
            <figure>
              <Image
                src="/gothenburg-härlanda-tjärn-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colTwo}`}>
            <figure>
              <Image
                src="/gothenburg-bryggan-härlanda-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
            <figure>
              <Image
                src="/gothenburg-härlanda-tjärn-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colOneLandscape}`}>
            <figure>
              <Image
                src="/gothenburg-bryggan-härlanda-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colThree}`}>
            <figure>
              <Image
                src="/gothenburg-härlanda-tjärn-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
            <figure>
              <Image
                src="/gothenburg-bryggan-härlanda-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
            <figure>
              <Image
                src="/gothenburg-härlanda-tjärn-20180704-eugene-molari.jpg"
                alt="Gothenburg Outdoors"
                width="2448"
                height="1836"
              />
              <figcaption>Gothenburg Outdoors</figcaption>
            </figure>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Mixed
