import { forwardRef } from "react";
import { cn } from "../../../lib";
import useFormField from "../hooks/useFormField";
import type { FormMessageProps } from "../type";
import { formMessageVariants } from "./variants";

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, render, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = String(error?.message ?? "");

    if (!body) {
      return null;
    }

    return render ? (
      render(body)
    ) : (
      <p
        ref={ref}
        data-slot="form-message"
        id={formMessageId}
        className={cn(formMessageVariants({ className }))}
        {...props}
      >
        {body}
      </p>
    );
  },
);

export default FormMessage;
