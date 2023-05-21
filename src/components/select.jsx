import Select from "react-select";

const SelectInput = ({
  text,
  index,
  options,
  defaultValue,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col justify-center m-[15px]`}>
      <p className="text-white">{text}</p>
      <Select
        className="w-full box-border"
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        isSearchable={false}
        key={index}
      />
    </div>
  );
};

export default SelectInput;
