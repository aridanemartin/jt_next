import Nav from "@components/Nav/Nav";
import Head from "next/head";
import "../styles/globals.css";
import Footer from "@components/Footer/Footer";
import AriSignature from "@components/AriSignature/AriSignature";
import { Cormorant, Source_Sans_Pro, Staatliches } from "@next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const sourceSansPro = Source_Sans_Pro({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700"],
});
const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900;1,700&family=Staatliches&display=swap"
          rel="stylesheet"
        /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <style jsx global>{`
          ${staatliches}
          ${sourceSansPro},
        ${cormorant},
        `}</style>
      </Head>
      <Nav />

      <div>
        <Component {...pageProps} />
      </div>

      <Footer />
      <AriSignature />
    </>
  );
}

export default MyApp;
