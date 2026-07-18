"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import type { Size } from "../../lib";
import { cn, ConfigProvider, useConfigProvider } from "../../lib";

const inputOTPSlotVariants = cva(
  "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input shadow-xs relative flex items-center justify-center border-y border-r text-sm outline-none transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
  {
    variants: {
      size: {
        default: "h-9 w-9",
        xs: "h-7 w-7 text-xs",
        sm: "h-8 w-8 text-xs",
        lg: "h-10 w-10 text-base",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function InputOTP({
  className,
  containerClassName,
  size,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  size?: Size;
}) {
  const otp = (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
  return size ? <ConfigProvider size={size}>{otp}</ConfigProvider> : otp;
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  size,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof inputOTPSlotVariants> & {
    index: number;
  }) {
  const { size: resolvedSize } = useConfigProvider({ size });
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-size={resolvedSize}
      className={cn(inputOTPSlotVariants({ size: resolvedSize }), className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
};
