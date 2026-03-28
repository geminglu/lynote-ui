import { type FieldValues, FormProvider } from "react-hook-form";
import { cn } from "../../../lib";
import type { FormPropsType } from "../type";
import { formRootVariants } from "./variants";

const FormRoot = <TFormValues extends FieldValues>({
  onSubmit = () => {},
  className,
  ...props
}: FormPropsType<TFormValues>) => {
  return (
    <FormProvider {...props}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className={cn(formRootVariants({ className }))}
      >
        {props?.children || null}
      </form>
    </FormProvider>
  );
};
export default FormRoot;
