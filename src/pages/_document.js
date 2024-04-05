import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <title>Dom Casmurro Podcast</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <link rel="icon" type="icon" href="/imgs/favicon.ico"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
