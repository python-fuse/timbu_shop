const Button = ({ label, variant }) => {
  return (
    <button
      className={`${variant} duration-300 text-ellipsis flex p-2 rounded-xl`}
    >
      {label}
    </button>
  );
};

export default Button;
