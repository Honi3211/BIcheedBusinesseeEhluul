const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="px-[20px] py-[10px] rounded-[8px] bg-primary-color text-white hover:bg-secondary-color hover:text-primary-color transition duration-200"
    >
      {text}
    </button>
  );
};
export default Button;
