import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,300&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <title>Arch.News</title>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}
