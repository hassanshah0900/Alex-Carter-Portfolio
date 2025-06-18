import Image from "next/image";
import NextLink from "next/link";
import logo from "../../public/logo.png";
import Container from "./Container";
import Link from "./Link";
import Sidebar from "./Sidebar";

export const navLinks = [
  { id: 1, name: "Bio", url: "/#bio" },
  { id: 2, name: "Skills", url: "/#skills" },
  { id: 3, name: "Projects", url: "/#projects" },
  { id: 4, name: "Contact", url: "/#contact" },
];

export default function Navbar() {
  return (
    <div className="bg-navbar-background w-full">
      <Container className="py-3 sm:py-5 flex justify-between">
        <NextLink className="w-10" href="/">
          <Image src={logo} alt="Alex Carter's portfolio website's logo" />
        </NextLink>
        <div className="flex justify-center items-center">
          <nav className="hidden sm:block">
            <ul className="text-navbar-foreground h-full font-poppins flex justify-between items-center gap-5 w-full">
              {navLinks.map((navlink) => (
                <li key={navlink.id}>
                  <Link href={navlink.url}>{navlink.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Sidebar />
        </div>
      </Container>
    </div>
  );
}
