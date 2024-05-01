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
      return `text-text bg-bodyBg border-border hover:text-bodyBg hover:bg-text hover:border-secondary`;
    }
    if (styleType === "secondary") {
      return `text-bodyBg bg-text border-border hover:text-text hover:bg-border hover:border-text`;
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
