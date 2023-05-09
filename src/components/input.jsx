const Input = ({ title, placeholder, className }) => {
  return (
    <div className={`${className}`}>
      <p className="text-white">{title}</p>
      <input
        type="text"
        className="md:w-[300px] px-[10px] box-border py-[5px] rounded-[10px] 
        border-slate-300 border focus:outline-none focus:border-secondary-color focus:ring-1 focus:ring-secondary-color"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
