import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Mixed.module.scss'
import styles2 from '../../styles/Video.module.scss'

const FalmouthPendennisPoint = () => {

    return (
    <>
        <Head>
        <title>Falmouth Pendennis Point | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

            <div className={styles2.pageIntro}>
                <h1>Falmouth Pendennis Point</h1>
            </div>

            <div className={`${styles.section} ${styles.colOneLandscape}`}>
                <video className={styles2.video} controls>
                    <source src="https://em-p.s3.eu-west-2.amazonaws.com/falmouth-pendennis-point-20200924-eugene-molari.mp4" type="video/mp4" />
                    Sorry, your browser doesnt support embedded videos.
                </video>
            </div>

            </main>
        </Layout>
      </>
    )
}

export default FalmouthPendennisPoint