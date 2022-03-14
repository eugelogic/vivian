import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Grid.module.scss'
import styles3 from '../../styles/Cornwall.module.scss'

const Category = () => {
  return (
    <>
      <Head>
        <title>Cornwall | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Cornwall</h1>
          </div>

          <div className={styles2.cards}>
            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall-videos/">
              <a>
                <div className={`${styles2.card} ${styles3.perranporth}`}>
                  <h3>VIDEOS</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
                </div>
              </a>
            </Link>

            <Link href="/category/cornwall/">
              <a>
                <div className={`${styles2.card} ${styles3.defaultBg}`}>
                  <h3>Cornwall</h3>
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
