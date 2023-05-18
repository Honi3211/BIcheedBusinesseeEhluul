import Button from "../button";
import LittleInfo from "../littleInfo";
import Link from "next/link";

const PromotionPart = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-full md:w-[800px] lg:ml-[10%] px-[20px] md:px-[50px] py-[20px] flex flex-col justify-center items-center text-primary-color bg-gradient-to-t from-[#8f91f1] to-[#a2a3f8] z-20 shadow-2xl rounded-[12px]">
        <h1 className="text-[32px] md:text-[40px] text-[#ffffff] rounded-[12px] px-[10px] py-[12px] font-bold text-center uppercase">
          Хамгийн найдвартай зээлийг танд олгоё
        </h1>
        <div className="text-[18px]">
          <div className="mt-[30px]"></div>

          <p className="text-[16px] md:text-[20px] font-bold text-center text-[#e6e6e6]">
            Бид бүхэн Швед улсад амьдарч буй Монголчууддаа зориулсан зээлийг
            хамгийн бага хүүтэйгээр гаргаж өгөхөөр ажиллаж байна.
          </p>

          <div className="mt-[30px]"></div>

          <LittleInfo
            title={"Хувь зээл"}
            text={
              "Бид танд таны орлогын түвшин болон ажил дээр тань үндэслэж боломжит зээлийг хамгийн бага хүүтэйгээр гаргаж өгнө."
            }
          />

          <div className="mt-[30px]"></div>

          <LittleInfo
            title={"Зээлийн эдийн засагч"}
            text={
              "Зээлийн эдийн засагч нь танд санхүүгийн зөвлөгөө өгөх боломжтой ба таны цаашдын амьдралд санхүүгийн зөв зохицуулалт хийхэд тусална."
            }
          />

          <div className="mt-[30px]"></div>

          <div className="flex justify-center">
            <Link href={"/signup"}>
              <Button text={"Хүсэлт гаргах"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPart;
