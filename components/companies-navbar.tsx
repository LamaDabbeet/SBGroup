import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "./common/lanaguage-detector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function CompaniesNavbar() {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src={"/images/sb-contracting-logo.png"}
                    alt="Workflow"
                    width={85}
                    height={38}
                  />
                </Link>
              </div>

              <div className="hidden md:flex h-24  items-center">
                <ul className="flex">
                  <li>
                    <div className="hover:cursor-pointer bg-cyan hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faFacebookF} size="sm" />
                    </div>
                  </li>
                  <li>
                    <div className="hover:cursor-pointer bg-cyan hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faInstagram} size="sm" />
                    </div>
                  </li>
                  <li>
                    <div className="hover:cursor-pointer bg-cyan hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                    </div>
                  </li>
                  <li>
                    <div className="hover:cursor-pointer bg-cyan hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                      <FontAwesomeIcon icon={faWhatsapp} size="sm" />
                    </div>
                  </li>
                </ul>

                <div className="ml-10 flex items-baseline space-x-4 h-full">
                  <Link
                    href="/companies/contracting/#about-sbg-contracting"
                    scroll={false}
                    className="uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan hover:text-cyan border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium"
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="/companies/contracting/#contracting-services"
                    scroll={false}
                    className="uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan hover:text-cyan border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium"
                  >
                    {t("services")}
                  </Link>

                  <Link
                    href="/companies/contracting/#contracting-projects"
                    scroll={false}
                    className="uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan hover:text-cyan border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium"
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    href="/companies/contracting/#contact-us"
                    scroll={false}
                    className="uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan hover:text-cyan border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium"
                  >
                    {t("contactUs")}
                  </Link>
                  <LocaleSwitcher hoverColor="cyan" textColor="gray" />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                aria-controls="companies-mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100 absolute z-10 w-full bg-white"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden h-screen" id="companies-mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-12">
                <Link
                  href="/#about-sbg-contracting"
                  className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                  scroll={false}
                >
                  {t("about")}
                </Link>

                <Link
                  href="/#contracting-services"
                  className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                  scroll={false}
                >
                  {t("services")}
                </Link>

                <Link
                  href="/#contracting-projects"
                  className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                  scroll={false}
                >
                  {t("projects")}
                </Link>

                <Link
                  href="/#contact-us"
                  className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                  scroll={false}
                >
                  {t("contactUs")}
                </Link>
                <div className="text-gray block px-3 py-2 rounded-md text-base font-medium">
                  <LocaleSwitcher></LocaleSwitcher>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default CompaniesNavbar;
