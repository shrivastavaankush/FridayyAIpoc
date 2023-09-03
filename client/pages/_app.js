import '@/styles/globals.css'
import Head from "next/head";
import LOGO from "../public/logo.png"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return(
  <>
    <Head>
                  <title>Friday AI - Transform your content into a captivating shopping experience</title>
                  <meta
                      name="description"
                      content="make your content shopable"
                  />
                  <meta
                      name="viewport"
                      content="width=device-width, initial-scale=1"
                  />
    </Head>
    <Navbar class="sticky top-0 z-50"/>
  <Component {...pageProps} />
  <Footer/>
  </>
)
}
