import Header from "@/components/header";
import PromotionPart from "@/components/pageParts/promotion";
import Footer from "@/components/footer";
import SponsorsFooter from "@/components/sponsorsFooter";
import bgPhoto from "../../public/bg.webp";
import logo from "../../public/logo.png";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="h-screen">
      <Helmet>
        <link
          rel="icon"
          sizes="180x180"
          href={
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/304492750_368634872151217_7922941841875299432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=r9SLHsWDQ5cAX9IbV0F&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAV7_NxHZHCsfEpTX0zUwKM6jYr7dApgzK6P0Xvg0R2Vg&oe=64685C03"
          }
        />
      </Helmet>
      <Header />
      <div className="px-[20px] md:px-[40px] pt-[110px] md:pt-[160px] pb-[100px]">
        <div className="absolute z-0 right-1 top-[100px]">
          <img src={bgPhoto.src} alt="" />
        </div>
        <PromotionPart />
      </div>
      <SponsorsFooter />
      <Footer />
    </div>
  );
}
