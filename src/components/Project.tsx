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
      className={`grid grid-cols-2 items-start font-poppins ${
        alignment === "left" ? "text-left" : "text-right"
      }`}
    >
      <div className="italic relative">
        <div className="text-accent font-semibold mb-1">Featured Project</div>
        <h2 className="text-2xl mb-10 font-semibold">{title}</h2>
        <div
          className={`w-[110%] absolute z-10 ${
            alignment === "left" ? "left-0" : "right-0"
          }`}
        >
          <ProjectDescription>{description}</ProjectDescription>
        </div>
      </div>
      <div
        className={`w-full aspect-video rounded-lg bg-accent/20 relative ${
          alignment === "left" ? "order-last" : "order-first"
        }`}
      >
        <Gradient className="w-full aspect-square" color="purple" />
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={imgUrl}
            fill
            className={`object-cover object-center rounded-lg ${
              alignment === "left"
                ? "translate-x-5 translate-y-5"
                : "-translate-x-5 translate-y-5"
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
