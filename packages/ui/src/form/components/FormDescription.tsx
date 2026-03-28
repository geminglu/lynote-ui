import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../lib";
import useFormField from "../hooks/useFormField";
import { formDescriptionVariants } from "./variants";

const FormDescription = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        data-slot="form-description"
        id={formDescriptionId}
        className={cn(formDescriptionVariants({ className }))}
        {...props}
      />
    );
  },
);

export default FormDescription;
