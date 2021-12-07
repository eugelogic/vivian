import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Grid.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Grid | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main style={{ backgroundColor: 'white' }}>

            <div className={styles.pageIntro}>
                <h1 style={{ color: 'black' }}>Grid</h1>
            </div>

            <div className={styles.cards}>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Grid