import Image from "next/image";
import ProjectDescription from "./ProjectDescription";
import Gradient from "./Gradient";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  alignment?: "left" | "right";
}

export default function Project({
  title,
  description,
  imgUrl,
  alignment = "left",
}: Props) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-start font-poppins ${
        alignment === "left" ? "sm:text-left" : "sm:text-right"
      }`}
    >
      <div className="italic relative">
        <div className="text-accent font-semibold mb-1">Featured Project</div>
        <h2 className="text-xl sm:text-2xl mb-5 sm:mb-10 font-semibold">
          {title}
        </h2>
        <div
          className={`w-full sm:w-[115%] relative z-10 ${
            alignment === "left" ? "sm:float-left" : "sm:float-right"
          }`}
        >
          <ProjectDescription>{description}</ProjectDescription>
        </div>
      </div>
      <div
        className={`w-full aspect-video rounded-lg bg-accent/20 relative order-first ${
          alignment === "left" ? "sm:order-last" : "sm:order-first"
        }`}
      >
        <Gradient className="w-full" color="purple" />
        <div className="relative w-full h-full">
          <Image
            src={imgUrl}
            fill
            className={`object-cover object-center rounded-lg translate-x-2 translate-y-2 ${
              alignment === "left"
                ? "sm:translate-x-4 sm:translate-y-4"
                : "sm:-translate-x-4 sm:translate-y-4"
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
