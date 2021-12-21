import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
// import Link from "next/link"

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link rel="stylesheet" href="/css/style" />
         </Head>
         <Navbar />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
