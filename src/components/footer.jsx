import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { pictures, texts } from "../../texts";

const Footer = () => {
  return (
    <div className="bg-primary-color text-secondary-color md:h-[200px] flex justify-center z-50 box-border px-[40px] md:px-[20px] py-8 md:py-12 relative">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row md:justify-around">
        <div className="w-[200px] hidden md:flex items-center">
          <img src={pictures.logo.src} alt="" />
        </div>
        <div className="flex flex-col ">
          <span className="mb-[10px] text-[16px] md:text-[20px] text-white underline underline-offset-4">
            {texts.footer.title}
          </span>
          <p>
            <span className="text-white">{texts.footer.numberPart.title}</span>{" "}
            {texts.footer.numberPart.text}
          </p>
          <p>
            <span className="text-white">
              {texts.footer.locationPart.title}
            </span>{" "}
            {texts.footer.locationPart.text}
          </p>
          <div className="flex items-center">
            <span className="text-white mr-[4px]">
              {texts.footer.socialPart.title}
            </span>
            <Link
              href={"https://www.facebook.com/tochiro.richot"}
              target="_blank"
            >
              <FacebookIcon className="cursor-pointer mt-1" />
            </Link>
          </div>
          <div className="mb-[15px]"></div>
        </div>
        <div className="flex flex-col border-t-2 md:border-t-[0] border-white">
          <span className="text-[20px] md:text-[30px]">
            <span className="text-white">
              {texts.footer.descriptionPart.headerTopFirst}
            </span>{" "}
            {texts.footer.descriptionPart.headerTopLast}
          </span>
          <p className="-mt-[5px] md:text-[16px] text-[12px] text-white">
            {texts.footer.descriptionPart.headerBotFirst}
            <span className="text-secondary-color">
              {texts.footer.descriptionPart.headerBotLast}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
