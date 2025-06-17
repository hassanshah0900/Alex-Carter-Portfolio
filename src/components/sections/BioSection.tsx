import Image from "next/image";
import avatar from "../../../public/avatar.png";
import arrowVector from "../../../public/svgs/arrow-vector.svg";
import Gradient from "../Gradient";
import { twMerge } from "tailwind-merge";

export default function BioSection({ className }: { className?: string }) {
  return (
    <section className={twMerge(className)} id="bio">
      <div className="flex items-center mb-32">
        <div className="self-end">
          <Avatar />
        </div>
        <div className="flex flex-col relative">
          <div className="text-lg mb-24 relative">
            <Image
              className="absolute bottom-0 right-[105%] top-1/2"
              src={arrowVector}
              alt=""
            />
            Hello! I Am{" "}
            <h1 className="text-accent inline-block">Alex Carter</h1>
          </div>
          <span>A Designer who</span>
          <span className="text-5xl leading-tight mb-2">
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
          <span className="text-xs">
            Because if the cover does not impress you what else can?
          </span>
        </div>
      </div>

      <h1 className="text-5xl mb-10">I'm a Graphic Designer.</h1>
      <p className="w-[80%] leading-loose">
        Alex Carter is a Denver-based graphic designer with 6+ years of
        experience crafting strategic visual identities. He specializes in
        translating complex ideas into clean, impactful designs across branding,
        digital (UI/UX, social), and print. Alex believes design solves problems
        and tells unforgettable stories. His style balances modern minimalism
        with vibrant purpose, driven by typography and intuitive layout.
      </p>
    </section>
  );
}

function Avatar() {
  return (
    <div className="relative">
      <Gradient className="w-[150%]" color="purple" />
      <Gradient brightness="high" className="w-full" />
      <Image
        className="w-40 px-10 box-content"
        src={avatar}
        alt="It is avatar image of Alex Carter with Apple laptop in front and avatar is facing you."
      />
    </div>
  );
}
