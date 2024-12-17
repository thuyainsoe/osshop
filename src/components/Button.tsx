type ButtonProps = {
  label: string;
  className: string; // Use className instead of class
};

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={`${className} h-[40px] px-3 flex items-center rounded-md justify-center text-nowrap`}
    >
      {label}
    </button>
  );
};

export default Button;
