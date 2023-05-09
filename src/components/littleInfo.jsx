const LittleInfo = ({ title, text }) => {
  return (
    <div className="text-primary-color">
      <h2 className="text-[22px] font-bold text-[#ffffff]">{title}</h2>
      <p className="text-[16px] text-justify text-secondary-color">{text}</p>
    </div>
  );
};

export default LittleInfo;
