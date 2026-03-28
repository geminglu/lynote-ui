import * as React from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { cn } from "../../../lib";
import { FormFieldContext, FormItemContext } from "../context";
import { FormItemPropsType } from "../type";
import FormControl from "./FormControl";
import FormDescription from "./FormDescription";
import FormLabel from "./FormLabel";
import FormMessage from "./FormMessage";
import { formItemMesVariants, formItemVariants } from "./variants";

const FormItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  {
    className,
    children,
    label,
    showMessage = true,
    colon = true,
    required = false,
    render,
    noStyle = false,
    description,
    ...controllerProps
  }: FormItemPropsType<TFieldValues, TName>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const id = React.useId();

  // 如果没有提供render函数，则使用children作为内容
  const content = (
    <Controller
      name={controllerProps.name}
      control={controllerProps.control}
      rules={controllerProps.rules}
      shouldUnregister={controllerProps.shouldUnregister}
      defaultValue={controllerProps.defaultValue}
      disabled={controllerProps.disabled}
      exact={controllerProps.exact}
      render={(...res) => {
        return (
          <FormControl>
            {render
              ? render(...res)
              : React.isValidElement(children)
                ? React.cloneElement(children, res[0].field)
                : children}
          </FormControl>
        );
      }}
    />
  );

  if (noStyle) return content;

  const formItemContent = (
    <div
      ref={ref}
      data-slot="form-item"
      className={cn(formItemVariants(), className)}
    >
      {label && (
        <div>
          <FormLabel>
            {required && <span className="mr-1 text-red-500">*</span>}
            {label}
            {colon && ":"}
          </FormLabel>
        </div>
      )}

      {content}
      {description && <FormDescription></FormDescription>}
      {showMessage && <FormMessage className={cn(formItemMesVariants())} />}
    </div>
  );

  return (
    <FormItemContext.Provider value={{ id }}>
      <FormFieldContext.Provider value={{ name: controllerProps.name }}>
        {formItemContent}
      </FormFieldContext.Provider>
    </FormItemContext.Provider>
  );
};

const FormItemWithRef = React.forwardRef(FormItem) as <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormItemPropsType<TFieldValues, TName> & {
    ref?: React.Ref<HTMLDivElement>;
  },
) => React.ReactElement;

export default FormItemWithRef;
