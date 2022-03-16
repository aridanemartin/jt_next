import Nav from '@components/Nav/Nav'
import Head from 'next/head'
import '../styles/globals.css'
import { motion , AnimatePresence} from 'framer-motion';
import Footer from '@components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900;1,700&family=Staatliches&display=swap" rel="stylesheet"/>
      </Head>
      <Nav/>



      <AnimatePresence exitBeforeEnter>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                    <Component {...pageProps} />
                </motion.div>
      </AnimatePresence>
      <Footer/>
      
    </>
  )
}

export default MyApp
