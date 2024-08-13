export const Textarea = (props) => {
  const { cols, rows, placeholder, name, ...rest } = props;
  return (
    <textarea
      name={name}
      id={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className="border border-salte-100 px-4 py-2 w-full rounded-md outline-1 outline-slate-200"
      {...rest}
    ></textarea>
  );
};
