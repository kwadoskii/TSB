import Document, { Head, Html, Main, NextScript } from "next/document";
import config from "../constants/config.json";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="developed-by" content="Ofor Chikwado Augustine"></meta>
          <meta name="keywords" content={config.appName.keywords.join(", ")}></meta>

          {/* use the below for each pages's tag */}
          {/* ? move this to the individual post page */}
          {/* <meta name="author" content="TutorialBrain"></meta> */}
          {/* <meta name="description" content="Online Tutorials for all type of brains"></meta> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
