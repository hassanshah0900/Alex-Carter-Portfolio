"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { navLinks } from "./Navbar";

export default function Sidebar() {
  const ref = useRef<HTMLDialogElement>(null);
  const [isOpen, setOpen] = useState(false);

  function closeSidebar() {
    setOpen(false);
    setTimeout(() => {
      ref.current?.close();
    }, 200);
  }
  function openSidebar() {
    ref.current?.showModal();
    setOpen(true);
  }

  return (
    <div className="sm:hidden">
      <button
        onClick={openSidebar}
        className="text-2xl h-full cursor-pointer hover:text-accent focus-visible:text-accent transition-colors outline-none"
      >
        <MdMenu />
      </button>
      <dialog
        className="backdrop:w-full backdrop:h-full backdrop:bg-white/5"
        onClick={(e) => {
          if (e.currentTarget === e.target) closeSidebar(); // close if click
        }}
        ref={ref}
      >
        <nav
          className={`bg-navbar-background text-navbar-foreground fixed h-full w-1/2 left-0 top-0 z-50 font-poppins p-5 transition-all ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="cursor-pointer text-2xl ms-auto block mb-5 hover:text-accent focus-visible:text-accent transition-colors outline-none"
            onClick={closeSidebar}
          >
            <IoClose />
          </button>
          <ul className="flex flex-col gap-5">
            {navLinks.map((navlink) => (
              <li key={navlink.id}>
                <Link onClick={closeSidebar} href={navlink.url}>
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
