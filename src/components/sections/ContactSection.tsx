import Image from "next/image";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import arrow from "../../../public/svgs/arrow-vector.svg";
import Link from "../Link";
import { twMerge } from "tailwind-merge";

export default function ContactSection({ className }: { className?: string }) {
  return (
    <section className={twMerge(className)} id="contact">
      <h2 className="text-xl sm:text-2xl mb-5 sm:mb-10">Contact</h2>
      <p className="mb-10 leading-relaxed">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect.
      </p>

      <div className="grid grid-cols-[repeat(2,max-content)] gap-5 justify-start justify-items-start">
        <Link href="/" className="mt-16 sm:mt-20 mb-10">
          alexcarter@gmail.com
        </Link>
        <span className="relative text-accent">
          my Mail{" "}
          <Image
            unoptimized
            className="w-12 sm:w-auto absolute right-[120%]"
            src={arrow}
            alt=""
          />
        </span>
      </div>
      <ul className="flex justify-center items-center gap-5 text-lg">
        <li>
          <Link href="/">
            <PiInstagramLogoFill />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaPhoneAlt />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </section>
  );
}
