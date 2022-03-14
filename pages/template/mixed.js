import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/Mixed.module.scss'

const Mixed = () => {
  return (
    <>
      <Head>
        <title>Mixed Sections | Eugene Molari Photography</title>
      </Head>
      <Layout>
        <main>
          <div className={styles1.pageIntro}>
            <h1>Mixed Sections</h1>
          </div>

          <div className={`${styles2.section} ${styles2.colOneSquare}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colTwo}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colOneLandscape}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colThree}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colTwo}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colOneSquare}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colTwoPortrait}`}>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                alt="St Martin's Lane Hotel - London"
                width="2448"
                height="3264"
              />
              <figcaption>St Martin&apos;s Lane Hotel - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                alt="St Martin's Lane Hotel - London"
                width="2448"
                height="3264"
              />
              <figcaption>St Martin&apos;s Lane Hotel - London</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colThree}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-03/20180303-1616-fluorescent-bench-on-south-bank-london-02.jpg"
                alt="Fluorescent bench on South bank - London"
                width="1440"
                height="1080"
              />
              <figcaption>Fluorescent bench on South bank - London</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colOneSquare}`}>
            <figure>
              <Image
                src="https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2017-08/20170831-1555-St_Johns_Tavern-Archway-London.jpg"
                alt="St Johns Tavern-Archway"
                width="1080"
                height="1080"
              />
              <figcaption>St Johns Tavern - Archway</figcaption>
            </figure>
          </div>

          <div className={`${styles2.section} ${styles2.colThree}`}>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                alt="St Martin's Lane Hotel - London"
                width="2448"
                height="3264"
              />
              <figcaption>St Martin&apos;s Lane Hotel - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                alt="St Martin's Lane Hotel - London"
                width="2448"
                height="3264"
              />
              <figcaption>St Martin&apos;s Lane Hotel - London</figcaption>
            </figure>
            <figure>
              <Image
                src="https://em-p.s3.eu-west-2.amazonaws.com/st-martin's-lane-hotel-london-20150804-eugene-molari.jpg"
                alt="St Martin's Lane Hotel - London"
                width="2448"
                height="3264"
              />
              <figcaption>St Martin&apos;s Lane Hotel - London</figcaption>
            </figure>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Mixed
