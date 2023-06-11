"use client";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const navigation = [
  {
    name: "About",
    href: "/about/denflex",
    current: false,
    submenu: [
      { label: "About Denflex", href: "/about/denflex" },
      { label: "R & D", href: "/about/rd" },
      { label: "Notice", href: "/about/notice" },
      { label: "Location", href: "/about/location" },
    ],
  },
  {
    name: "Products",
    href: "/product/spring-endo-file",
    current: false,
    submenu: [
      { label: "Spring Endo File", href: "/product/spring-endo-file" },
      {
        label: "Combined Torque Wrench",
        href: "/product/combined-torque-wrench",
      },
      { label: "One Touch Implant", href: "/product/one-touch-implant" },
      { label: "Helical Attachment", href: "/product/helical-attachment" },
      { label: "Smart Abutment", href: "/product/smart-abutment" },
      { label: "NG Handpiece", href: "/product/ng-handpiece" },
      { label: "Advanced Fixture", href: "/product/advanced-fixture" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    current: false,
    submenu: [
      { label: "events", href: "/events" },
      { label: "seminar", href: "/seminar" },
    ],
  },
  {
    name: "Support",
    href: "/pr-center",
    current: false,
    submenu: [
      { label: "PR Center", href: "/pr-center" },
      { label: "Manuals", href: "/manuals" },
      { label: "Catalogs", href: "/catalogs" },
      { label: "Inquires", href: "/inquires" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const Submenu = ({ items }: any) => (
  <div className="absolute left-0 right-0 bg-white border-b py-24 border-gray-200 shadow-xl dark:bg-gray-800 flex justify-around">
    {items.map((item: any, index: any) => (
      <Link
        key={index}
        href={item.href}
        className="px-4 py-2 text-sm text-gray-700 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {item.label}
      </Link>
    ))}
  </div>
);

const ThemeButton = ({ isDarkTheme, toggleTheme }: any) => (
  <button
    onClick={toggleTheme}
    className={`rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 group px-3 py-2 transition ${
      isDarkTheme
        ? "text-yellow-300 hover:text-yellow-500"
        : "text-blue-500 hover:text-blue-700"
    }`}
  >
    {isDarkTheme ? (
      <SunIcon className="w-5 h-5 text-yellow-400" />
    ) : (
      <MoonIcon className="w-5 h-5 text-blue-500" />
    )}
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = (name: any) => {
    setActiveSubmenu(name);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
    setIsSubmenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const appContent: any = document.querySelector("#app-content");
    if (isSubmenuOpen) {
      appContent.style.filter = "brightness(70%)";
    } else {
      appContent.style.filter = "none";
    }
  }, [isSubmenuOpen]);

  return (
    <header className="py-6 md:py-0 sticky top-0 bg-opacity-70 backdrop-blur pointer-events-none flex flex-col h-full z-40">
      <div className="w-full mx-auto max-w-8xl">
        <div className="relative px-4 sm:px-8 flex gap-4">
          <div className="flex flex-1 items-center">
            <div className="p-0.5 backdrop-blur">
              <Link className="pointer-events-auto" href="/">
                <img
                  className="h-8 lg:h-auto"
                  src="/images/logo.png"
                  alt="denflexLogo"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:flex-1">
            {/* Mobile Menu */}
            <div
              className="pointer-events-auto md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <button
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:R2qb6:"
              >
                Menu
              </button>
            </div>
            {/* DESKTOP */}
            <nav
              className="pointer-events-auto hidden md:block"
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex px-3 text-lg lg:text-xl font-medium text-zinc-800 backdrop-blur dark:text-zinc-200">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    aria-current={item.current ? "page" : undefined}
                    onMouseEnter={() => handleMouseEnter(item.submenu)}
                  >
                    <Link
                      className="block px-3 lg:px-6  py-6 transition hover:text-blue-500 dark:hover:text-blue-400"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {activeSubmenu && <Submenu items={activeSubmenu} />}
            </nav>
          </div>
          <div className="flex justify-end md:flex-1">
            <div className="flex items-center pointer-events-auto">
              <ThemeButton
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal Pop-up */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100] h-screen min-h-screen overflow-auto"
          onClose={() => setIsOpen(false)}
          // onClick={() => setIsOpen(false)}
        >
          <Transition.Child
            key="hi"
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed top-0 inset-0 overflow-y-auto backdrop-blur bg-zinc-800/40 dark:bg-black/80 opacity-100">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                key="hi"
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-auto fixed inset-x-4 top-8 z-[100] origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                  <Dialog.Title
                    as="h2"
                    className="flex flex-row w-full items-center justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    Navigation
                    <XMarkIcon
                      className="w-5"
                      onClick={() => setIsOpen(false)}
                    />
                  </Dialog.Title>
                  <nav className="mt-6">
                    <ul className="my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                      {navigation.map((item) => (
                        <li
                          className="text-left"
                          key={item.name}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                        >
                          <Link className="block py-2" href={item.href}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}
