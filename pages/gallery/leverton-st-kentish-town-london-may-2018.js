import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles1 from '../../styles/Intro.module.scss'
import styles2 from '../../styles/GridAlt.module.scss'

const LevertonSt = () => {

    return (
        <>
        <Head>
            <title>Leverton St, Kentish Town, London - May 2018 | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

                <div className={styles1.pageIntro}>
                    <h1>Leverton St, Kentish Town, London - May 2018</h1>
                    <p><a href="https://www.google.com/maps/@51.5511464,-0.1398279,3a,75y,94.11h,87.26t/data=!3m6!1e1!3m4!1sLt5fcimOWFHU4MT-_XgPuA!2e0!7i16384!8i8192" target="_blank" rel="noreferrer noopener nofollow">See Leverton Street on Google Maps</a></p>
                    <span className={styles1.categoryLink}><Link href="/category/architecture"><a>• ARCHITECTURE •</a></Link></span>
                </div>

                <div className={styles2.cards}>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-01-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-02-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-03-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-04-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-05-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-06-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-07-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-08-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-09-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-10-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-11-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://em-p.s3.eu-west-2.amazonaws.com/leverton-st-kentish-town-london-12-20180520-eugene-molari.jpeg'
                        alt='Leverton Street, Kentish Town, London - May 2018'
                        width='640'
                        height='640'
                    />
                </figure>

                </div>
            </main>
        </Layout>
        </>
    )
}

export default LevertonSt