"use client";

type ButtonProps = {
  buttonText: string;
  styleType: "primary" | "secondary";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps) => {
  const { buttonText, onClick, styleType, type } = props;
  const getStyle = () => {
    if (styleType === "primary") {
      return `bg-containerBg border-border text-text hover:bg-bodyBg hover:border-secondary`;
    }
    if (styleType === "secondary") {
      return `bg-text border-border text-bodyBg hover:bg-border hover:text-text hover:border-text`;
    }
  };
  return (
    <button
      onClick={onClick}
      className={`w-32 h-8 text-base text-sm ${getStyle()} rounded-lg border-2`}
      type={type ? type : "button"}
    >
      {buttonText}
    </button>
  );
};

export default Button;
