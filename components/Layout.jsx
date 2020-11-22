import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </>
)

export default Layout
