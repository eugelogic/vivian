import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Photography by Eugene Molari" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
