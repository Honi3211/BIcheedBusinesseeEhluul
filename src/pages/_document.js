import { Html, Head, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";

export default function Document() {
  return (
    <Html lang="en">
      <Helmet>
        <link
          rel="icon"
          sizes="180x180"
          href="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/304492750_368634872151217_7922941841875299432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b-VHba0QPqEAX9ttZyb&_nc_ht=scontent.fuln8-1.fna&oh=00_AfDyvf171jeuK5cYHGCOBbb8CuAIcgMTlxT_s2zsGuHtpA&oe=64607303"
        />
      </Helmet>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Бичээд Бизнесээ Эхлүүл</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
