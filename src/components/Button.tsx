import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {}

export default function Button({ className, children, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        "py-2 px-6 border border-border rounded-full bg-btn-background font-poppins cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
