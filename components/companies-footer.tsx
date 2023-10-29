import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";
import LocaleSwitcher from "./common/lanaguage-detector";

function CompaniesFooter({ color }: any) {
  const { t } = useTranslation("common");

  return (
    <footer className="text-white ">
      <div
        id="top-footer"
        className={`bg-${color} px-12 py-16 lg:flex lg:justify-between`}
      >
        <div className="lg:w-2/3 w-full">
          <h1 className="lg:text-3xl text-xl font-bold ">
            {t("samiBaroudyContracting")}
          </h1>
        </div>
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <h2>{t("followUs")}</h2>
          <ul className="flex mt-2">
            <li>
              <div
                className={`hover:cursor-pointer bg-white hover:bg-${color} duration-200 ease-in border-2 border-white text-${color}  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </li>
            <li>
              <div
                className={`bg-white hover:bg-${color}  duration-200 ease-in border-2 border-white text-${color}  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </li>
            <li>
              <div
                className={`bg-white hover:bg-${color} duration-200 ease-in border-2 border-white text-${color} hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </li>
            <li>
              <div
                className={`bg-white hover:bg-${color}  duration-200 ease-in border-2 border-white text-${color}  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="main-footer" className="bg-gray-dark px-12 py-16">
        <div className="flex mb-8">
          <Image
            src="/images/sbg-white-logo.png"
            width={260}
            height={70}
            alt="Sami Al Baroudi Group White Logo"
          />
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
            <ul>
              <li>
                <Link
                  href="/companies/contracting"
                  className={`hover:text-${color}`}
                >
                  {t("samiBaroudyContracting")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/mix-concrete"
                  className={`hover:text-${color}`}
                >
                  {t("readyMix")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/road-link"
                  className={`hover:text-${color}`}
                >
                  {t("roadLink")}
                </Link>
              </li>
              <li>
                <Link href="/companies/sbd" className={`hover:text-${color}`}>
                  {t("SBD")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
            <h2 className={`text-${color} uppercase font-bold`}>
              {t("quickLinks")}
            </h2>
            <ul className="mt-4">
              <li>
                <Link href="/" className={`hover:text-${color}`} scroll={false}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/contracting/#about-sbg-contracting"
                  className={`hover:text-${color}`}
                  scroll={false}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/contracting/#contracting-services"
                  className={`hover:text-${color}`}
                  scroll={false}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/contracting/#contracting-projects"
                  className={`hover:text-${color}`}
                  scroll={false}
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/contracting/#contact-us"
                  className={`hover:text-${color}`}
                  scroll={false}
                >
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                {" "}
                <LocaleSwitcher hoverColor={color} textColor="white" />
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 w-full">
            <h4 className={`text-${color} uppercase font-bold`}>
              {t("contact")}
            </h4>
            <ul className="mt-4">
              <li>
                <span>{t("address")}</span>
              </li>
              <li>
                <a href="tel:+963116116677">
                  {t("callUs")}:
                  <span
                    className={`hover:text-${color} hover:underline`}
                    dir="ltr"
                  >
                    +963 11 611 6677
                  </span>
                </a>
              </li>
              <li className={`hover:text-${color} hover:underline`}>
                <a href="mailto:info@sambgroup.com">info@sambgroup.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CompaniesFooter;
