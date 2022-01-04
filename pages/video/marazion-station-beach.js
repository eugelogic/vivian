import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Mixed.module.scss'
import styles3 from '../../styles/Video.module.scss'

const Video = () => {

    return (
    <>
        <Head>
        <title>Marazion Station Beach | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

            <div className={styles1.pageIntro}>
                <h1>Marazion Station Beach - May 2018</h1>
                <span className={styles1.categoryLink}><Link href="/category/cornwall-videos"><a>• CORNWALL VIDEOS •</a></Link></span>
            </div>

            <div className={`${styles2.section} ${styles2.colOneMobile}`}>
                <video className={styles3.video} controls>
                    <source src="https://em-p.s3.eu-west-2.amazonaws.com/marazion-station-beach-20180504-eugene-molari.mp4" type="video/mp4" />
                    Sorry, your browser doesnt support embedded videos.
                </video>
            </div>

            </main>
        </Layout>
    </>
    )
}

export default Video