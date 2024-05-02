import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  error?: string | false;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: number;
  type?: string;
};

const Input = (props: InputProps) => {
  const { label, error, value, onChange, onBlur, type } = props;
  return (
    <div className={`flex flex-col rounded-sm`}>
      <span className="text-text mb-1 h-6 text-xs xl:text-base">{label}</span>
      <div>
        <div className={`flex rounded w-full`}>
          <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`outline-0 border-2 border-${
              error ? `accentLight` : `text`
            } pl-[6px] w-full rounded text-primaryDark focus:border-tertiaryDark`}
            type={type}
          />
        </div>
        <span
          className={`h-3.5 text-xs xl:text-base text-${
            error ? `accentLight` : `primaryDark`
          }`}
        >
          {error ? error : "x"}
        </span>
      </div>
    </div>
  );
};

export default Input;
