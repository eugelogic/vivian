import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/CornwallVideos.module.scss'
import styles2 from '../../styles/Gallery.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Cornwall Videos | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles2.pageIntro}>
                <h1>Cornwall Videos</h1>
            </div>

            <div className={styles.cards}>

                <Link href="/video/falmouth-pendennis-point/">
                    <a>
                    <div className={`${styles.card} ${styles.falmouth}`}>
                        <h3>Falmouth Pendennis Point</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

                <Link href="/category/cornwall-videos/">
                    <a>
                    <div className={`${styles.card} ${styles.perranporth}`}>
                        <h3>Cornwall Video</h3>
                    </div>
                    </a>
                </Link>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Grid