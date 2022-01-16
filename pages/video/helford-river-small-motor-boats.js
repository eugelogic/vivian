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
        <title>Helford River Small Motor Boats | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

            <div className={styles1.pageIntro}>
                <h1>Helford River Small Motor Boats - Sept 2020</h1>
                <span className={styles1.categoryLink}><Link href="/category/cornwall-videos"><a>• CORNWALL VIDEOS •</a></Link></span>
            </div>

            <div className={`${styles2.sectionAlt} ${styles2.colTwoPortraitVideo}`}>
                <div className={styles2.colOneOfTwoPortraitVideo}>
                    <video className={styles3.video} controls>
                        <source src="https://em-p.s3.eu-west-2.amazonaws.com/helford-river-small-motor-boat-south-20200921-eugene-molari.mp4" type="video/mp4" />
                        Sorry, your browser doesnt support embedded videos.
                    </video>
                </div>
                <div className={styles2.colOneOfTwoPortraitVideo}>
                    <video className={styles3.video} controls>
                        <source src="https://em-p.s3.eu-west-2.amazonaws.com/helford-river-small-motor-boat-north-20200921-eugene-molari.mp4" type="video/mp4" />
                        Sorry, your browser doesnt support embedded videos.
                    </video>
                </div>
            </div>

            </main>
        </Layout>
    </>
    )
}

export default Video