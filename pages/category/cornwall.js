import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Cornwall.module.scss'
import styles2 from '../../styles/Gallery.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Cornwall | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles2.pageIntro}>
                <h1>Cornwall</h1>
            </div>

            <div className={styles.cards}>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.cornwallCat}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.trelissick}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.cornwallCat}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall-videos/"><a>
                    <div className={`${styles.card} ${styles.trelissick}`}>
                        <h3>Videos</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.cornwallCat}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.trelissick}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

                <Link href="/category/cornwall/"><a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall</h3>
                    </div>
                </a></Link>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Grid