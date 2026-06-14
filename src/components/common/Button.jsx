const Button = ({
  title,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;