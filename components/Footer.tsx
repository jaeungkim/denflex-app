import Link from "next/link";
import { useMemo } from "react";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Products", url: "/projects" },
  { label: "Events", url: "/events" },
  { label: "Contact", url: "/contact" },
];

const Footer = () => {
  const menu = useMemo(
    () => (
      <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {menuItems.map((item) => (
          <Link
            key={item.url}
            className="transition hover:text-blue-500 dark:hover:text-blue-400"
            href={item.url}
          >
            {item.label}
          </Link>
        ))}
      </div>
    ),
    []
  );

  return (
    <footer className="mt-32">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-4xl lg:max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  {menu}
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    © {new Date().getFullYear()} Denflex. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
