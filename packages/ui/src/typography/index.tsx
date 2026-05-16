import { cn } from "../../lib";

export function TypographyH1({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="typography-h1"
      className={cn(
        "scroll-m-20 text-balance text-center text-4xl font-extrabold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH2({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="typography-h2"
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="typography-h3"
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH4({
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="typography-h4"
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH5({
  className,
  ...props
}: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="typography-h5"
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH6({
  className,
  ...props
}: React.ComponentProps<"h6">) {
  return (
    <h6
      data-slot="typography-h6"
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-p"
      className={cn("not-first:mt-6 leading-7", className)}
      {...props}
    />
  );
}

export function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      data-slot="typography-blockquote"
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}

export function TypographyUl({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="typography-ul"
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  );
}

export function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      data-slot="typography-inline-code"
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyLead({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-lead"
      className={cn("text-muted-foreground text-xl", className)}
      {...props}
    />
  );
}

export function TypographyLarge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="typography-large"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

export function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      data-slot="typography-small"
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}

export function TypographyMuted({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-muted"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
