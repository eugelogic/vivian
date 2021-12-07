import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Eugene Molari Photography</title>
    </Head>
    <Layout>
    <main>

      <div className={`${styles.cards} ${styles.homepageCategoryCards}`}>

        <Link href="/category/architecture/"><a>
            <div className={`${styles.card} ${styles.architectureCat}`}>
                <div className="card__title">
                    <h3>Architecture</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/benches/"><a>
            <div className={`${styles.card} ${styles.benchesCat}`}>
                <div className="card__title">
                    <h3>Benches</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/aerials/"><a>
            <div className={`${styles.card} ${styles.aerialsCat}`}>
                <div className="card__title">
                    <h3>Aerials</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/flora/"><a>
            <div className={`${styles.card} ${styles.floraCat}`}>
                <div className="card__title">
                    <h3>Flora</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/tfl/"><a>
            <div className={`${styles.card} ${styles.tflCat}`}>
                <div className="card__title">
                    <h3>Tfl</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/vehicles/"><a>
            <div className={`${styles.card} ${styles.vehiclesCat}`}>
                <div className="card__title">
                    <h3>Vehicles</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/outdoors/"><a>
            <div className={`${styles.card} ${styles.outdoorsCat}`}>
                <div className="card__title">
                    <h3>Outdoors</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/home/"><a>
            <div className={`${styles.card} ${styles.homeCat}`}>
                <div className="card__title">
                    <h3>Home</h3>
                </div>
            </div>
        </a></Link>

        <Link href="/category/skies/"><a>
            <div className={`${styles.card} ${styles.skiesCat}`}>
                <div className="card__title">
                    <h3>Skies</h3>
                </div>
            </div>
        </a></Link>

      </div>

    </main>
    </Layout>
    </>
  )
}
