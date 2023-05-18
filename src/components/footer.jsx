import FacebookIcon from "@mui/icons-material/Facebook";
import { SvgIcon } from "@mui/material";
import Link from "next/link";
import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div className="bg-primary-color text-secondary-color md:h-[200px] flex justify-center z-50 box-border px-[40px] md:px-[20px] py-8 md:py-12 relative">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row md:justify-around">
        <div className="w-[200px] hidden md:flex items-center">
          <img
            src={logo.src}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <span className="mb-[10px] text-[16px] md:text-[20px] text-white underline underline-offset-4">
            Холбоо барих
          </span>
          <p>
            <span className="text-white">Утас:</span> 0700289544
          </p>
          <p>
            <span className="text-white">Байршил:</span> Sweden, Stockholm
          </p>
          <div className="flex items-center">
            <span className="text-white mr-[4px]">Сошиал хаяг:</span>
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
            <span className="text-white">Бичээд</span> Бизнесээ Эхлүүл
          </span>
          <p className="-mt-[5px] md:text-[16px] text-[12px] text-white">
            Бид танд{" "}
            <span className="text-secondary-color">өнөөдөр тусална.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
