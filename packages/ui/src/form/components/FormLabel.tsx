import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../lib";
import { Label } from "../../label";
import useFormField from "../hooks/useFormField";

const FormLabel = forwardRef<HTMLLabelElement, ComponentProps<typeof Label>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        ref={ref}
        data-slot="form-label"
        data-error={!!error}
        className={cn(className, "inline gap-0")}
        htmlFor={formItemId}
        {...props}
      />
    );
  },
);

export default FormLabel;
