import Link from "next/link";
import HeaderEl from "./headerElement";;
import { pictures, texts } from "../../texts";

const Header = () => {
  return (
    <div className="w-full bg-primary-color text-secondary-color h-[100px] shadow-custom-headerShadow flex justify-center fixed z-50">
      <div className="w-[90%] md:w-[80%] flex justify-around items-center transition duration-500">
        <Link href={"/signup"}>
          <HeaderEl text={texts.header.leftText} />
        </Link>
        <Link href={"/"}>
          <img
            src={pictures.logo.src}
            alt=""
            className="w-[100px] cursor-pointer"
          />
        </Link>
        <Link href={"/"} className="text-center">
          <HeaderEl text={texts.header.rightText} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
