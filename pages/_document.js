import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Ofor Chikwado Augustine"></meta>
          {/* use the below for each pages's tag */}
          <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
          <meta name="author" content="TutorialBrain"></meta>
          <meta
            name="description"
            content="Online Tutorials for all type of brains"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
