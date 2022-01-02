import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Grid.module.scss'
import styles3 from '../../styles/Architecture.module.scss'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Architecture | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles1.pageIntro}>
                <h1>Architecture</h1>
            </div>

            <div className={styles2.cards}>

                <Link href="/gallery/leverton-st-kentish-town-london-may-2018"><a>
                    <div className={`${styles2.card} ${styles3.levertonSt}`}>
                        <h3>Leverton Street - Kentish Town - London May 2018</h3>
                    </div>
                </a></Link>

                <Link href="/gallery/archway-london-summer-2017"><a>
                    <div className={`${styles2.card} ${styles3.archwaySummer17}`}>
                        <h3>Archway, London - Summer 2017</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a></Link>

                <Link href="/category/architecture/"><a>
                    <div className={`${styles2.card} ${styles3.architectureCat}`}>
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