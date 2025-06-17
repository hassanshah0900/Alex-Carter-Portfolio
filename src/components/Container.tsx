import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1000px] px-4 mx-auto ${className}`}>{children}</div>
  );
}
