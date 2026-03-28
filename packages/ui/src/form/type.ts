import { ReactNode } from "react";
import type {
  ControllerProps,
  FieldPath,
  FieldValues,
  Message,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export type FormPropsType<TFormValues extends FieldValues> = {
  onSubmit?: SubmitHandler<TFormValues>;
  children?: React.ReactNode;
  className?: string;
} & UseFormReturn<TFormValues>;

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export type FormMessageProps = React.ComponentProps<"p"> & {
  render?: (message: Message) => React.ReactNode;
};

export interface FormItemPropsType<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  children?: ReactNode;
  className?: string;
  /** label 标签的文本，当不需要 label 又需要与冒号对齐，可以设为 null */
  label?: ReactNode;
  /**
   * 配合 label 属性使用，表示是否显示 label 后面的冒号
   * @default true
   */
  colon?: boolean;
  /**
   * 是否显示错误
   * @default true
   */
  showMessage?: boolean;
  /**
   * 是否为必选字段，不会对表单进行验证，设置为true时会在label的开始位置显示红色的'*'
   * @default false
   */
  required?: boolean;
  /**
   * 渲染函数，用于渲染表单控件
   */
  render?: ControllerProps<TFieldValues, TName>["render"];

  /**
   * 是否无样式，不显示 label 和错误信息
   * @default false
   */
  noStyle?: boolean;
  /** 描述 */
  description?: ReactNode;
}
