export const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      type={type}
      className={`h-10 px-6 font-medium text-base rounded-md ${classname} text-white hover:bg-opacity-80`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
