import Image from "next/image";
import avatar from "../../../public/avatar.png";
import arrowVector from "../../../public/svgs/arrow-vector.svg";
import Gradient from "../Gradient";
import { twMerge } from "tailwind-merge";

export default function BioSection({ className }: { className?: string }) {
  return (
    <section className={twMerge("relative pt-14", className)} id="bio">
      <div className="flex items-end mb-18 sm:mb-32">
        <Avatar />
        <div className="flex flex-col items-start relative">
          <span className="text-xs sm:text-base">A Designer who</span>
          <span className="text-xl xs:text-2xl sm:text-5xl leading-tight mb-2">
            Judges a book <br /> by its{" "}
            <span className="text-accent relative inline-block">
              cover{" "}
              <div
                style={{ borderRadius: "100%" }}
                className="absolute border border-foreground w-[120%] h-full top-0 left-1/2 -translate-x-1/2 -rotate-6"
              />
            </span>
            ...
          </span>
          <span className="text-2xs xs:text-xs text-wrap">
            Because if the cover does not impress you what else can?
          </span>
        </div>
      </div>

      <h1 className="text-xl xs:text-2xl sm:text-5xl mb-5 sm:mb-10">
        I'm a Graphic Designer.
      </h1>
      <p className="w-full text-xs sm:text-base sm:w-[80%] leading-loose">
        Alex Carter is a Denver-based graphic designer with 6+ years of
        experience crafting strategic visual identities. He specializes in
        translating complex ideas into clean, impactful designs across branding,
        digital (UI/UX, social), and print. Alex believes design solves problems
        and tells unforgettable stories.
      </p>
    </section>
  );
}

function Avatar() {
  return (
    <div className="shrink-0">
      <div className="absolute top-0 left-0 translate-x-34 sm:translate-x-62">
        <Image
          className="w-16 sm:w-auto absolute bottom-0 right-[105%] top-1/2"
          unoptimized
          src={arrowVector}
          alt=""
        />
        <div className="text-nowrap text-sm sm:text-lg">
          Hello! I Am <h1 className="text-accent inline-block">Alex Carter</h1>
        </div>
      </div>
      <div className="relative">
        <Gradient className="w-[150%]" color="purple" />
        <Gradient brightness="high" className="w-full" />
        <Image
          className="w-32 sm:w-60 px-5 sm:px-10"
          src={avatar}
          alt="It is avatar image of Alex Carter with Apple laptop in front and avatar is facing you."
        />
      </div>
    </div>
  );
}
