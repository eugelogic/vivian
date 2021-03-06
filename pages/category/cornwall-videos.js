import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Grid.module.scss'
import styles3 from '../../styles/CornwallVideos.module.scss'

const Category = () => {
  return (
    <>
      <Head>
        <title>Cornwall Videos | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Cornwall Videos</h1>
          </div>

          <div className={styles2.cards}>
            <Link href="/video/pendennis-point-falmouth/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Pendennis Point, Falmouth</h3>
                </div>
              </a>
            </Link>

            <Link href="/video/marazion-station-beach/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Marazion Station Beach</h3>
                </div>
              </a>
            </Link>

            <Link href="/video/helford-river-small-motor-boats">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Small Motor Boats on the Helford River</h3>
                </div>
              </a>
            </Link>

            <Link href="/video/marazion-beach">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Marazion Beach</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall Video</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall Video</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall Video</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall Video</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
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

export default Category
