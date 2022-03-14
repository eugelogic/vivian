import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Mixed.module.scss'

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Archway, London - Summer 2017 | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Archway, London - Summer 2017</h1>
            <span className={styles1.categoryLink}>
              <Link href="/category/architecture">
                <a>• ARCHITECTURE •</a>
              </Link>
            </span>
          </div>

          <div className={`${styles2.section} ${styles2.colOneSquare}`}>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-john's-tavern-archway-20170831-eugene-molari.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St John&apos;s Tavern, Archway - London</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colOneSquare}`}>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/archway-mall-london-20170803-eugene-molari.jpg"
                alt="Archway Mall"
                width="1080"
                height="1080"
              />
              <figcaption>Archway Mall - London</figcaption>
            </figure>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Gallery
