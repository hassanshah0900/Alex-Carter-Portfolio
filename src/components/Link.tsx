import React, { ComponentProps } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

export default function Link({
  children,
  className,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className={twMerge(
        "hover:text-accent transition-colors focus-visible:text-accent outline-none",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
