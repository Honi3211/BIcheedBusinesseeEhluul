import FacebookIcon from "@mui/icons-material/Facebook";
import { SvgIcon } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary-color text-secondary-color md:h-[200px] flex justify-center z-50 box-border px-[40px] md:px-[20px] py-8 md:py-12 relative">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row md:justify-around">
        <div className="w-[200px] hidden md:flex items-center">
          <img
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/304492750_368634872151217_7922941841875299432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-VdyELdCbHYAX9Mod9T&_nc_ht=scontent.fuln8-1.fna&oh=00_AfCMragx4GYfKz9xdZQO9CNN7r00uzJJstHVFgPAely1Fg&oe=645C7E83"
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
