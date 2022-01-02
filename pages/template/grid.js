import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Grid.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Grid | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main style={{ backgroundColor: 'white' }}>

            <div className={styles1.pageIntro}>
                <h1 style={{ color: 'black' }}>Grid</h1>
            </div>

            <div className={styles2.cards}>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
                        <h3>Grid Card</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles2.cardBg}`}>
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