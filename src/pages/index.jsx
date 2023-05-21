import Header from "@/components/header";
import PromotionPart from "@/components/pageParts/promotion";
import Footer from "@/components/footer";
import SponsorsFooter from "@/components/sponsorsFooter";
import bgPhoto from "../../public/bg.webp";

export default function Home() {
  return (
    <div className="h-screen">
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
