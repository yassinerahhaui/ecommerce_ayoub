"use client";
import { Link, usePathname } from "@/navigation";
import { navData1 } from "@/interfaces/navbar";
import { Pages } from "@/interfaces/navbar";

const NavStart = (props: Pages) => {
  const navData: navData1[] = [
    { id: 0, name: props.home, link: "/" },
    { id: 1, name: props.store, link: "/store" },
    { id: 2, name: props.blog, link: "/blog" },
    { id: 3, name: props.about, link: "/about" },
    { id: 4, name: props.contact, link: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <ul className="flex items-center">
      {navData.map((el) => (
        <li
          key={el.id}
          className={`transition-all ease-in-out duration-500 border-b-2  m-2 hover:py-2 font-medium ${
            el.link === pathname
              ? "border-black text-black py-2"
              : "border-transparent text-gray-800 hover:border-b-2 hover:border-gray-800"
          }`}
        >
          <Link href={el.link}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavStart;
