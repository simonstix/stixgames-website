import { NavBar } from "@/app/_ui/nav-bar";
import Image from "next/image";
import logo from "@/app/_ui/logo-white.svg";
import Link from "next/link";

export function Layout({
  children,
  hoverOverContent,
  colors,
}: Readonly<{
  children: React.ReactNode;
  hoverOverContent: boolean;
  colors?: {
    footer: string;
    footerText: string;
    footerTextHover: string;
  };
}>) {
  if (colors === undefined) {
    colors = {
      footer: "bg-gray-900",
      footerText: "text-gray-50",
      footerTextHover: "hover:text-gray-400",
    };
  }

  return (
    <div className={`flex min-h-screen flex-col`}>
      <NavBar hoverOverContent={hoverOverContent} />
      <div className="relative flex grow flex-col items-stretch">
        {children}
      </div>
      <footer
        className={`flex flex-row flex-wrap items-center justify-around gap-16 p-4 py-12 ${colors.footer} ${colors.footerText}`}
      >
        <div className="flex flex-col flex-wrap items-center gap-8 sm:flex-row">
          <Image
            src={logo}
            alt="StixGames logo"
            className="w-36 shrink"
            priority={true}
          />
          <div className="flex flex-col gap-1">
            <p>© StixGames</p>
            <p>2015 - {new Date().getFullYear()}</p>
            <p>All rights reserved.</p>
          </div>
        </div>
        <Link href="/impressum" className={`${colors.footerTextHover}`}>
          Impressum
        </Link>
      </footer>
    </div>
  );
}
