"use client";

type ButtonProps = {
  buttonText: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps) => {
  const { buttonText, onClick, type } = props;

  return (
    <button
      onClick={onClick}
      className={`w-32 h-8 text-base text-sm text-primaryDark border-accentDark bg-secondary hover:bg-tertiaryLight rounded-lg border-2`}
      type={type ? type : "button"}
    >
      {buttonText}
    </button>
  );
};

export default Button;
