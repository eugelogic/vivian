import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Mixed.module.scss'
import styles2 from '../../styles/Gallery.module.scss'

const ArchwayLondonSummer2017 = () => {

    return (
    <>
        <Head>
        <title>Archway, London - Summer 2017 | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

            <div className={styles2.pageIntro}>
                <h1>Archway, London - Summer 2017</h1>
                <p><a href="https://www.google.com/maps/@51.5628906,-0.1359766,3a,75y,62.67h,86.8t/data=!3m6!1e1!3m4!1s599t0tuIPlbIIkHe4Vifog!2e0!7i16384!8i8192" target="_blank" rel="noreferrer noopener nofollow">See St John&apos;s Tavern on Google Maps</a></p>
                <span className={styles2.categoryLink}><Link href="/category/architecture"><a>• ARCHITECTURE •</a></Link></span>
            </div>

            <div className={`${styles.section} ${styles.colOne}`}>
                <figure>
                <Image
                    src="https://em-p.s3.eu-west-2.amazonaws.com/st-john's-tavern-archway-20170831-eugene-molari.jpg"
                    alt='St Johns Tavern-Archway'
                    width='1080'
                    height='1080'
                />
                <figcaption>St John&apos;s Tavern, Archway - London</figcaption>
                </figure>
            </div>

            <div className={`${styles.section} ${styles.colOne}`}>
                <figure>
                <Image
                    src="https://em-p.s3.eu-west-2.amazonaws.com/archway-mall-london-20170803-eugene-molari.jpg"
                    alt='Archway Mall'
                    width='1080'
                    height='1080'
                />
                <figcaption>Archway Mall - London</figcaption>
                </figure>
            </div>

            </main>
        </Layout>
      </>
    )
}

export default ArchwayLondonSummer2017