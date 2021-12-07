import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Architecture.module.scss'
import styles2 from '../../styles/Gallery.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Architecture | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles2.pageIntro}>
                <h1>Architecture</h1>
            </div>

            <div className={styles.cards}>

                <Link href="/gallery/leverton-st-kentish-town-london-may-2018"><a>
                    <div className={`${styles.card} ${styles.levertonSt}`}>
                        <h3>Leverton Street - Kentish Town - London May 2018</h3>
                    </div>
                </a></Link>

                <Link href="/gallery/archway-london-summer-2017"><a>
                    <div className={`${styles.card} ${styles.archwaySummer17}`}>
                        <h3>Archway, London - Summer 2017</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Grid