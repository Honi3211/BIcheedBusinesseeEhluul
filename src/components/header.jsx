import Link from "next/link";
import HeaderEl from "./headerElement";

const Header = () => {
  return (
    <div className="w-full bg-primary-color text-secondary-color h-[100px] shadow-custom-headerShadow flex justify-center fixed z-50">
      <div className="w-[90%] md:w-[80%] flex justify-around items-center transition duration-500">
        <Link href={"/signup"}>
          <HeaderEl text={"Хүсэлт"} />
        </Link>
        <Link href={"/"}>
          <img
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/304492750_368634872151217_7922941841875299432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-VdyELdCbHYAX9Mod9T&_nc_ht=scontent.fuln8-1.fna&oh=00_AfCMragx4GYfKz9xdZQO9CNN7r00uzJJstHVFgPAely1Fg&oe=645C7E83"
            alt=""
            className="w-[100px] cursor-pointer"
          />
        </Link>
        <Link href={"/"} className="text-center">
          <HeaderEl text={"Бидний тухай"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
