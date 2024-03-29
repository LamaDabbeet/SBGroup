import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "./common/lanaguage-detector";
import MobileMenu from "./common/mobile-menu";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

function Navbar() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(1);
  const { locale } = useRouter();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-10">
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex-shrink-0">
                <Image
                  src={"/images/sbg-logo.png"}
                  alt="Workflow"
                  width={240}
                  height={45}
                />
              </div>
              <div className="hidden md:block h-full transition duration-500">
                <div className="h-full ml-10 flex items-baseline space-x-4 ">
                  <Link
                    href="/#about-sbg"
                    scroll={false}
                    className="h-full flex items-center text-gray px-3 py-2 text-sm font-medium hover:border-t-4 hover:border-t-primary hover:text-primary border-t-white border-t-4 transition duration-300"
                  >
                    {" "}
                    {t("about")}
                  </Link>
                  <div className="group inline-block relative transition duration-300">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 inline-flex items-center group-hover:border-t-4 group-hover:border-t-primary transition duration-300">
                      {locale === "ar" ? (
                        <>
                          <span className="ml-1 text-gray  py-2 text-sm font-medium group-hover:text-primary border-t-white border-t-4 ">
                            {t("groupCompanies")}
                          </span>
                          <ChevronDownIcon
                            className="-ml-1 h-5 w-5 text-gray group-hover:text-primary"
                            aria-hidden="true"
                          />
                        </>
                      ) : (
                        <>
                          <span className="mr-1 text-gray  py-2 text-sm font-medium group-hover:text-primary border-t-white border-t-4 ">
                            {t("groupCompanies")}
                          </span>
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray group-hover:text-primary"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>

                    <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-10 bg-white transition duration-300">
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/contracting"
                        >
                          {t("samiBaroudyContracting")}{" "}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/mix-concrete"
                        >
                          {t("readyMix")}{" "}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/road-link"
                        >
                          {t("roadLink")}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/sbd"
                        >
                          {t("SBD")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/careers"
                    scroll={false}
                    className="h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-primary hover:text-primary border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium"
                  >
                    {t("careers")}
                  </Link>

                  <Link
                    href="/#news"
                    scroll={false}
                    className="h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-primary hover:text-primary border-t-white border-t-4 transition duration-300 text-gray-300 hover:text-primary px-3 py-2  text-sm font-medium"
                  >
                    {t("news")}
                  </Link>

                  <Link
                    href="/#contact-us"
                    scroll={false}
                    className="h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-primary hover:text-primary border-t-white border-t-4 transition duration-300 px-3 py-2 r text-sm font-medium"
                  >
                    {t("contact")}
                  </Link>
                  <LocaleSwitcher hoverColor="primary" textColor="gray" />
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white "
                aria-controls="mobile-menu"
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
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden h-screen" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-12">
                <Link
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                  className="text-gray hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("about")}
                </Link>
                <Accordion open={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <span className="text-gray hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                      {" "}
                      {t("groupCompanies")}
                    </span>
                  </AccordionHeader>
                  <AccordionBody>
                    <ul className="text-gray-700 pt-1 group-hover:block z-10 bg-white transition duration-300">
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/contracting"
                        >
                          {t("samiBaroudyContracting")}{" "}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/mix-concrete"
                        >
                          {t("readyMix")}{" "}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/road-link"
                        >
                          {t("roadLink")}
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="hover:bg-primary hover:text-white text-gray py-2 px-4 block text-sm"
                          href="/companies/sbd"
                        >
                          {t("SBD")}
                        </Link>
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
                <Link
                  href="/#contact-us"
                  onClick={() => setIsOpen(false)}
                  className="text-gray hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("contact")}
                </Link>

                <Link
                  href="/#news"
                  onClick={() => setIsOpen(false)}
                  className="text-gray  hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("news")}
                </Link>

                <Link
                  href="/careers"
                  onClick={() => setIsOpen(false)}
                  className="text-gray hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("careers")}
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

export default Navbar;
