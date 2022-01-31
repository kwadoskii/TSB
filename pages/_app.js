import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const progress = new ProgressBar({
  size: 2,
  color: "#110724",
  delay: 80,
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        theme="colored"
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
