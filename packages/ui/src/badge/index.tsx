import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const badgeVariants = cva(
  "group/badge rounded-4xl focus-visible:border-ring focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:size-3! inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap border border-transparent font-medium transition-all focus-visible:ring-[3px] [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-5 gap-1 px-2 py-0.5 text-xs",
        xs: "[&>svg]:size-2.5! h-4 gap-0.5 px-1.5 py-0.5 text-[10px]",
        sm: "[&>svg]:size-2.5! h-[18px] gap-0.5 px-1.5 py-0.5 text-[11px]",
        lg: "[&>svg]:size-3.5! h-6 gap-1.5 px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  size,
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          badgeVariants({ variant, size: resolvedSize }),
          className,
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
      size: resolvedSize,
    },
  });
}

export { Badge, badgeVariants };
