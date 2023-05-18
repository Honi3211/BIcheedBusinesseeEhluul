import Link from "next/link";
import HeaderEl from "./headerElement";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="w-full bg-primary-color text-secondary-color h-[100px] shadow-custom-headerShadow flex justify-center fixed z-50">
      <div className="w-[90%] md:w-[80%] flex justify-around items-center transition duration-500">
        <Link href={"/signup"}>
          <HeaderEl text={"Хүсэлт гаргах"} />
        </Link>
        <Link href={"/"}>
          <img src={logo.src} alt="" className="w-[100px] cursor-pointer" />
        </Link>
        <Link href={"/"} className="text-center">
          <HeaderEl text={"Бидний тухай"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
