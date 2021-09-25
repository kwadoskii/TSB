import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const progress = new ProgressBar({
  size: 3,
  color: "#110724",
  delay: 80,
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
