"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InputIcon from "@mui/icons-material/Input";
import NavigationIcon from "@mui/icons-material/Navigation";

const links = [
  { name: "Inputs", href: "/", icon: InputIcon },
  {
    name: "Navigation",
    href: "/navigation",
    icon: NavigationIcon,
  },
  //   { name: "React Hook Form", href: "/rhf", icon: ChecklistIcon },
  //   { name: "RHF & Controller", href: "/rhfctrl", icon: ChecklistRtlIcon },
  //   {
  //     name: "RHF backend validated",
  //     href: "/rhfbackend",
  //     icon: ApiIcon,
  //   },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "border border-solid border-blue-500 text-blue-500":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
