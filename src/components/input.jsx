const Input = ({ title, placeholder, className, onChange, type }) => {
  return (
    <div className={`${className}`}>
      <p className="text-white">{title}</p>
      <input
        type={type}
        className="w-full px-[10px] box-border py-[5px] rounded-[10px]
        border-slate-300 border focus:outline-none focus:border-secondary-color focus:ring-1 focus:ring-secondary-color"
        placeholder={placeholder}
        onChange={onChange}
        onWheel={(e) => e.target.blur()}
      />
    </div>
  );
};

export default Input;
