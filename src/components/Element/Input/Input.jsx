import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, ...rest } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      ref={ref}
      placeholder={placeholder}
      className="border border-salte-100 px-4 py-2 w-full rounded-md outline-1 outline-slate-200"
      {...rest}
    />
  );
});
