import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = (props: { children:ReactNode }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main role="main">{props.children}</main>
    <Footer />
  </>
)

export default Layout
