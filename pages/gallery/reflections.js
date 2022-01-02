import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Mixed.module.scss'

const Reflections = () => {

    return (
    <>
        <Head>
        <title>Reflections | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

            <div className={styles1.pageIntro}>
                <h1>Reflections</h1>
            </div>

            <div className={`${styles2.section} ${styles2.colOnePortrait}`}>
                <figure>
                <Image
                    src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                    alt='St Martin&apos;s Lane Hotel - London'
                    width='2448'
                    height='3264'
                />
                {/* <figcaption>St Martin&apos;s Lane Hotel - London</figcaption> */}
                </figure>
            </div>

            <div className={`${styles2.section} ${styles2.colOneLandscape}`}>
                <figure>
                <Image
                    src="https://em-p.s3.eu-west-2.amazonaws.com/institute-of-directors-20150325-eugene-molari.jpg"
                    alt='Institute of Directors'
                    width='2778'
                    height='2084'
                />
                {/* <figcaption>Institute of Directors</figcaption> */}
                </figure>
            </div>

            <div className={`${styles2.section} ${styles2.colOnePortrait}`}>
                <figure>
                <Image
                    src="https://em-p.s3.eu-west-2.amazonaws.com/del-parc-junction-road-20150529-eugene-molari.jpg"
                    alt='Del Parc, Junction road - London'
                    width='2448'
                    height='3264'
                />
                {/* <figcaption>Del Parc, Junction road - London</figcaption> */}
                </figure>
            </div>

            </main>
        </Layout>
      </>
    )
}

export default Reflections