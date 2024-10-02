"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "./logo-white.svg";

// export function NavBar() {
//   const pathName = usePathname();
//   return (
//     <nav className="m-3 flex h-16 justify-center">
//       <Image src={logo} alt="StixGames logo" className="mr-16 w-48" />
//
//       <ul className="flex flex-row items-center gap-4">
//         <li className="font-bold text-gray-50 decoration-gray-600 decoration-2 underline-offset-8">
//           <Link
//             href="/tile-composer"
//             className={`${pathName === "/tile-composer" || pathName === "/" ? "underline" : ""}`}
//           >
//             Tile Composer
//           </Link>
//         </li>
//         <li className="font-bold text-gray-50 decoration-gray-600 decoration-2 underline-offset-8">
//           <Link
//             href="/grassshader"
//             className={`${pathName === "/grassshader" ? "underline" : ""}`}
//           >
//             DirectX 11 Grass Shader
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Tile Composer", href: "/", paths: ["/", "/tile-composer"] },
  {
    name: "DirectX 11 Grass Shader",
    href: "/grassshader",
    paths: ["/grassshader"],
  },
  { name: "Contact", href: "/contact", paths: ["/contact"] },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar({
  hoverOverContent,
}: Readonly<{
  hoverOverContent: boolean;
}>) {
  const pathName = usePathname();
  return (
    <Disclosure
      as="nav"
      className={`inset-x-0 z-10 ${hoverOverContent ? "absolute" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="StixGames logo"
                  className="w-48 lg:mr-16"
                  priority={true}
                />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      item.paths.some((path) => path === pathName)
                        ? "page"
                        : undefined
                    }
                    className={classNames(
                      item.paths.some((path) => path === pathName)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={
                item.paths.some((path) => path === pathName)
                  ? "page"
                  : undefined
              }
              className={classNames(
                item.paths.some((path) => path === pathName)
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
