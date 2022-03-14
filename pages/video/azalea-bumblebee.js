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
        <title>Azalea and the Bumblebee | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Azalea and the Bumblebee</h1>
            <span className={styles1.categoryLink}>
              <Link href="/category/flora-videos">
                <a>• FLORA VIDEOS •</a>
              </Link>
            </span>
          </div>

          <div className={`${styles2.section} ${styles2.colOnePortraitVideo}`}>
            <video className={styles3.video} controls>
              <source
                src="https://em-p.s3.eu-west-2.amazonaws.com/azalea-bumblebee-20180519-eugene-molari.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesnt support embedded videos.
            </video>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Video
