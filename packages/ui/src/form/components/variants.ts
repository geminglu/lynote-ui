import { cva } from "../../../lib";

export const formDescriptionVariants = cva("text-muted-foreground text-sm");

export const formItemVariants = cva("relative grid gap-2");

export const formItemMesVariants = cva(
  "absolute bottom-0 left-0 translate-y-[calc(100%+2px)]",
);

export const formMessageVariants = cva("text-destructive text-sm");

export const formRootVariants = cva("w-full space-y-6");
