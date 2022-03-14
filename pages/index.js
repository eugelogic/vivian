import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles1 from '../styles/Grid.module.scss'
import styles2 from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles2.siteMantra}>
            <p>
              <i>Carpe Lucem</i>
            </p>
          </div>

          <div className={styles1.cards}>
            <Link href="/category/architecture/">
              <a>
                <div className={`${styles1.card} ${styles2.architectureCat}`}>
                  <h3>Architecture</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles1.card} ${styles2.cornwallCat}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/gallery/reflections/">
              <a>
                <div className={`${styles1.card} ${styles2.reflectionsCat}`}>
                  <h3>Reflections</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/benches/">
              <a>
                <div className={`${styles1.card} ${styles2.benchesCat}`}>
                  <h3>Benches</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/travels/">
              <a>
                <div className={`${styles1.card} ${styles2.travelsCat}`}>
                  <h3>Travels</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/flora/">
              <a>
                <div className={`${styles1.card} ${styles2.floraCat}`}>
                  <h3>Flora</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/tfl/">
              <a>
                <div className={`${styles1.card} ${styles2.tflCat}`}>
                  <h3>Tfl</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/vehicles/">
              <a>
                <div className={`${styles1.card} ${styles2.vehiclesCat}`}>
                  <h3>Vehicles</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/outdoors/">
              <a>
                <div className={`${styles1.card} ${styles2.outdoorsCat}`}>
                  <h3>Outdoors</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/home/">
              <a>
                <div className={`${styles1.card} ${styles2.homeCat}`}>
                  <h3>Home</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/skies/">
              <a>
                <div className={`${styles1.card} ${styles2.skiesCat}`}>
                  <h3>Skies</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/aerials/">
              <a>
                <div className={`${styles1.card} ${styles2.aerialsCat}`}>
                  <h3>Aerials</h3>
                </div>
              </a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}
