const HeaderEl = ({ text }) => {
  return (
    <span className="text-[16px] w-[66px] md:w-[140px] flex text-center font-bold cursor-pointer hover:underline transition duration-500">
      {text}
    </span>
  );
};
export default HeaderEl;
