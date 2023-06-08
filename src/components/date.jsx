const DateInput = ({ text, index, onChange, className }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center m-[15px]`}
      key={index}
    >
      <p className="text-white">{text}</p>
      <input
        type={"date"}
        className={`w-full px-[10px] box-border py-[5px] rounded-[10px]`}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
