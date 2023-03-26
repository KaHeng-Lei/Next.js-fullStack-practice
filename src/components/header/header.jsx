import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image
          src={"/images/logo_black.png"}
          alt="logo"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>nim ad minima veniam quis</h1>
    </div>
  </header>
);
