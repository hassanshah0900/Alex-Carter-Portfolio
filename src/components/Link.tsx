import React, { ComponentProps } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<typeof NextLink>;

export default function Link({ children, className, ...props }: Props) {
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
