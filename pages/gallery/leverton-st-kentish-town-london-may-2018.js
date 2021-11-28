import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/GridAlt.module.css'

const LevertonSt = () => {

    return (
        <>
        <Head>
            <title>Leverton St - Kentish Town - London | Eugene Molari Photography</title>
        </Head>
        <Layout>
            <main>

                <div className={styles.pageIntro}>
                    <h1>Leverton St - Kentish Town - London - May 2018</h1>
                    <p><a href="https://www.google.com/maps/@51.5511464,-0.1398279,3a,75y,94.11h,87.26t/data=!3m6!1e1!3m4!1sLt5fcimOWFHU4MT-_XgPuA!2e0!7i16384!8i8192" target="_blank" rel="noreferrer noopener nofollow">See Leverton Street on Google Maps</a></p>
                    <span className={styles.categoryLink}><Link href="/category/architecture"><a>• ARCHITECTURE •</a></Link></span>
                </div>

                <div className={styles.cards}>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-01.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-02.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-03.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-04.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-05.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-06.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-07.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-08.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-09.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-10.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-11.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
                        width='640'
                        height='640'
                    />
                </figure>

                <figure>
                    <Image
                        src='https://eugebucket.s3-eu-west-1.amazonaws.com/emp/2018-05/Leverton_St-Kentish_Town-London-May_2018-12.jpg'
                        alt='Leverton_St-Kentish_Town-London-May_2018-12'
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