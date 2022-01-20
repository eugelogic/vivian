import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Grid.module.scss'
import styles3 from '../../styles/Travels.module.scss'

const Category = () => {

    return (
        <>
        <Head>
            <title>Travels | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles1.pageIntro}>
                <h1>Travels</h1>
            </div>

            <div className={styles2.cards}>

                <Link href="/gallery/gothenburg-2018/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Gothenburg 2018</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels-videos/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>VIDEOS</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

                <Link href="/category/travels/"><a>
                    <div className={`${styles2.card} ${styles3.defaultBg}`}>
                        <h3>Travels</h3>
                    </div>
                </a></Link>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Category