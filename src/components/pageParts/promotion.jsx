import { texts } from "../../../texts";
import Button from "../button";
import LittleInfo from "../littleInfo";
import Link from "next/link";

const PromotionPart = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-full md:w-[800px] lg:ml-[10%] px-[20px] md:px-[50px] py-[20px] flex flex-col justify-center items-center text-primary-color bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] z-20 shadow-2xl rounded-[12px]">
        <h1 className="text-[32px] md:text-[40px] text-[#ffffff] rounded-[12px] px-[10px] py-[12px] font-bold text-center uppercase">
          {texts.homePage.headerPart.title}
        </h1>
        <div className="text-[18px]">
          <div className="mt-[30px]"></div>

          <p className="text-[16px] md:text-[20px] font-bold text-center text-[#e6e6e6]">
            {texts.homePage.headerPart.paragraph}
          </p>

          <div className="mt-[30px]"></div>

          <LittleInfo
            title={texts.homePage.listsPart.list1}
            text={texts.homePage.listsPart.paragraph1}
          />

          <div className="mt-[30px]"></div>

          <LittleInfo
            title={texts.homePage.listsPart.list2}
            text={texts.homePage.listsPart.paragraph2}
          />

          <div className="mt-[30px]"></div>

          <div className="flex justify-center">
            <Link href={"/signup"}>
              <Button text={texts.homePage.button} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPart;
