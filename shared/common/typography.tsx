import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const TypographyH1 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const TypographyH2 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 tracking-tight first:mt-0 text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const TypographyH3 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

const TypographyH4 = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-base md:text-xl font-semibold tracking-tight ",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

const TypographyP = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const TypographySmall = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <small className={cn("text-xs md:text-sm leading-none font-medium", className)} {...props}>
      {children}
    </small>
  );
};

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
};
