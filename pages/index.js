import Head from 'next/head'
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

      <div className={`${styles.cards} ${styles.homepageCategoryCards}`}>

        <a href="/architecture/">
            <div className={`${styles.card} ${styles.architectureCat}`}>
                <div className="card__title">
                    <h3>Architecture</h3>
                </div>
            </div>
        </a>

        <a href="/benches/">
            <div className={`${styles.card} ${styles.benchesCat}`}>
                <div className="card__title">
                    <h3>Benches</h3>
                </div>
            </div>
        </a>

        <a href="/aerials/">
            <div className={`${styles.card} ${styles.aerialsCat}`}>
                <div className="card__title">
                    <h3>Aerials</h3>
                </div>
            </div>
        </a>

        <a href="/flora/">
            <div className={`${styles.card} ${styles.floraCat}`}>
                <div className="card__title">
                    <h3>Flora</h3>
                </div>
            </div>
        </a>

        <a href="/tfl/">
            <div className={`${styles.card} ${styles.tflCat}`}>
                <div className="card__title">
                    <h3>Tfl</h3>
                </div>
            </div>
        </a>

        <a href="/vehicles/">
            <div className={`${styles.card} ${styles.vehiclesCat}`}>
                <div className="card__title">
                    <h3>Vehicles</h3>
                </div>
            </div>
        </a>

        <a href="/outdoors/">
            <div className={`${styles.card} ${styles.outdoorsCat}`}>
                <div className="card__title">
                    <h3>Outdoors</h3>
                </div>
            </div>
        </a>

        <a href="/home/">
            <div className={`${styles.card} ${styles.homeCat}`}>
                <div className="card__title">
                    <h3>Home</h3>
                </div>
            </div>
        </a>

        <a href="/skies/">
            <div className={`${styles.card} ${styles.skiesCat}`}>
                <div className="card__title">
                    <h3>Skies</h3>
                </div>
            </div>
        </a>

      </div>

    </main>
    </Layout>
    </>
  )
}
