import { Label } from "./Label";
import { Textarea } from "./Textarea";

export const TextareaForm = (props) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} placeholder={placeholder} {...rest} />
    </div>
  );
};
