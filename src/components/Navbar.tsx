import Image from "next/image";
import logo from "../../public/logo.png";
import NextLink from "next/link";
import Container from "./Container";
import Link from "./Link";

export default function Navbar() {
  return (
    <div className="bg-navbar-background w-full">
      <Container className="py-5 flex justify-between">
        <NextLink className="w-10" href="/">
          <Image src={logo} alt="" />
        </NextLink>
        <nav className="w-1/3">
          <ul className="text-navbar-foreground h-full font-poppins flex justify-between items-center gap-5 w-full">
            <li>
              <Link href="/#bio">Bio</Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-colors"
                href="/#skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-colors"
                href="/#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent transition-colors"
                href="/#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
