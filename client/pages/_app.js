import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "../context";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GooeyCircleLoader } from "react-loaders-kit";
import "antd/dist/antd.css";
import "../public/css/style.css";
// import Link from "next/link"

function MyApp({ Component, pageProps }) {
   const loaderProps = {
      loading: true,
      size: 275,
      duration: 2,
      colors: ["#99fffe", "#f42e00", "#042549"],
   };
   return (
      <UserProvider>
         <Head>
            <link rel="stylesheet" href="/css/style" />
         </Head>
         <Navbar />
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         {/* <GooeyCircleLoader
            type="ThreeDots"
            color="#2BAD60"
            height="100"
            width="100"
            // {...loaderProps}
         /> */}
        
         <Component {...pageProps} />
      </UserProvider>
   );
}

export default MyApp;
