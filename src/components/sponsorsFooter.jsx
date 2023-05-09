import { sponsors } from "../../public/sponsors";
import Image from "next/image";

const SponsorsFooter = () => {
  return (
    <div className="bg-[#9f96ff] flex-wrap text-secondary-color flex items-center justify-center z-50 box-border px-[40px] md:px-[20px] py-4 md:py-12 relative">
      {sponsors.map((sponsor, index) => {
        return (
          <Image
            src={sponsor.src}
            alt=""
            className="w-[200px] my-[4px] mx-[10px] "
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SponsorsFooter;
