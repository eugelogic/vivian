import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Architecture.module.css'

const Grid = () => {

    return (
        <>
        <Head>
            <title>Architecture | Eugene Molari Photography</title>
        </Head>
        <Layout>
        <main>

            <div className={styles.pageIntro}>
                <h1>Architecture</h1>
            </div>

            <div className={styles.cards}>

                <a href="/gallery/leverton-st-kentish-town-london-may-2018">
                    <div className={`${styles.card} ${styles.levertonSt}`}>
                        <h3>Leverton Street - Kentish Town - London May 2018</h3>
                    </div>
                </a>

                <a href="#">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

                <a href="/category/architecture/">
                    <div className={`${styles.card} ${styles.architectureCat}`}>
                        <h3>Architecture</h3>
                    </div>
                </a>

            </div>

        </main>
        </Layout>
        </>
    )
}

export default Grid