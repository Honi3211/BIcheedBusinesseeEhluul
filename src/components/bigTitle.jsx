const BigTitle = ({ text, className }) => {
  return (
    <h2
      className={`${className} font-bold text-secondary-color flex flex-start md:text-[20px] md:w-full px-[15px] underline underline-offset-4 text-center`}
    >
      {text}
    </h2>
  );
};

export default BigTitle;
