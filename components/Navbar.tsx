"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Products", href: "/products", current: false },
  { name: "Events", href: "/events", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<any>({
    about: false,
    products: false,
    events: false,
    contact: false,
  });
  const { systemTheme, theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  const buttonClassName = `group px-3 py-2 transition ${
    isDarkTheme
      ? "text-yellow-300 hover:text-yellow-500"
      : "text-blue-500 hover:text-blue-700"
  }`;

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    setTheme(newTheme);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const toggleDropdown = (item: any) => {
    setIsDropdownOpen((prevState: any) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <>
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
          <div className="flex justify-end flex-1 items-center">
            {/* Mobile Menu */}
            <div
              className="pointer-events-auto md:hidden"
              onClick={() => openModal()}
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
            <nav className="pointer-events-auto hidden md:block">
              <ul className="flex px-3 text-lg lg:text-xl font-medium text-zinc-800 backdrop-blur dark:text-zinc-200">
                {navigation.map((item: any) => (
                  <li
                    key={item.name}
                    aria-current={item.current ? "page" : undefined}
                    onMouseEnter={() => toggleDropdown(item.name)}
                    onMouseLeave={() => toggleDropdown(item.name)}
                  >
                    <Link
                      className="relative block px-3 lg:px-6 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                    {isDropdownOpen[item.name] && (
                      <div className="absolute top-full bg-white rounded-lg shadow-lg">
                        {/* Dropdown content */}
                        <ul className="py-2">
                          {/* Replace with your dropdown items */}
                          {[1, 2, 3].map((i) => (
                            <li key={i} className="px-4 py-2">
                              {item.name} {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pointer-events-auto ml-2 rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
              <button onClick={toggleTheme} className={buttonClassName}>
                {isDarkTheme ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-blue-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal Pop-up */}
     {/* Mobile Menu Modal Pop-up */}
     <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen flex items-center justify-center px-4 py-6 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 dark:bg-white/10 dark:opacity-75" />
            </Transition.Child>

            {/* Mobile Menu Content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Menu
                    </Dialog.Title>
                    <div className="mt-2">
                      <nav className="flex flex-col gap-2">
                        {navigation.map((item: any) => (
                          <div key={item.name}>
                            {item.dropdown ? (
                              <div>
                                <button
                                  className={`block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md ${
                                    isDropdownOpen[item.name]
                                      ? "bg-gray-100"
                                      : ""
                                  }`}
                                  onClick={() => toggleDropdown(item.name)}
                                >
                                  {item.name}
                                </button>
                                <div
                                  className={`${
                                    isDropdownOpen[item.name]
                                      ? "block"
                                      : "hidden"
                                  }`}
                                >
                                  {item.dropdown.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                    >
                                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        {subItem.name}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link href={item.href}>
                                <a className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
