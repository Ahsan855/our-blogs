import Link from "next/link";

export default function HomeMenu() {
  return (
    <div className="hidden md:block overflow-y-auto">
      <ul className="flex">
        <li>
          <Link
            href="/"
            className="block py-2 text-2xl px-4 text-white menu-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 text-2xl px-4 text-white menu-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 text-2xl px-4 text-white menu-link"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            href="/signin"
            className="block py-2 text-2xl px-4 text-white menu-link"
          >
            Signin
          </Link>
        </li>
      </ul>
    </div>
  );
}
