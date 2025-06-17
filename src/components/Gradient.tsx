import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  color?: "white" | "purple";
  brightness?: "low" | "high";
}

export default function Gradient({
  className,
  brightness = "low",
  color = "white",
}: Props) {
  return (
    <div
      className={twMerge(
        `bg-radial absolute  top-1/2 left-1/2 -translate-1/2 rounded-full -z-10 aspect-square ${
          color === "purple" ? "from-purple-600" : "from-white"
        } from-0% to-transparent to-70% `,
        brightness === "low"
          ? `${
              color === "purple" ? "via-purple-600/30" : "via-white/30"
            } via-20%`
          : `${
              color === "purple" ? "via-purple-600/40" : "via-white/40"
            } via-30%`,
        className
      )}
    />
  );
}
