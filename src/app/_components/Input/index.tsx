import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  error?: string | false;
  width: string;
  placeholder?: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: number;
  type?: string;
};

const Input = (props: InputProps) => {
  const { label, error, width, placeholder, value, onChange, onBlur, type } =
    props;
  return (
    <div className={`flex flex-col w-${width} rounded-sm bg-blue-500`}>
      <span className="text-base mb-1 h-6">{label && label}</span>
      <div>
        <div className={`flex rounded w-full}`}>
          <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`outline-0 border-2 border-${
              error ? `error` : `text`
            } pl-[6px] w-full rounded text-black focus:border-secondary`}
            placeholder={placeholder && placeholder}
            type={type}
          />
        </div>
        <span className={`h-3.5 text-sm text-error`}>
          {error ? error : "x"}
        </span>
      </div>
    </div>
  );
};

export default Input;
