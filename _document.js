import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/304492750_368634872151217_7922941841875299432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFEryXQd4TuXXWe9aceJ77OBrzvUBS7iP0GvO9QFLuI_VYPcoCD-DMQGt0slpQYlAFmqXf1QfJ-Sxj8QZJmZDIx&_nc_ohc=nfaMBCV8g_0AX-bK4DR&_nc_ht=scontent.fuln2-2.fna&oh=00_AfCiuL6pjs5hAt4U0YJYssvQM0Jt1_VCO6QPC8y4JOy78g&oe=64880003"
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
