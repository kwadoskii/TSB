import NProgress from "nprogress";
import Router from "next/router";
import Title from "../components/Title";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

Router.onRouteChangeStart = (url) => {
  if (location.pathname !== url) NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  NProgress.configure({
    parent: "#__next",
    showSpinner: false,
    template: `<div class="bar" style="background: black;" role="bar"><div class="peg" style="box-shadow: 0 0 10px black, 0 0 5px black;"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
  });

  return (
    <>
      <Title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
