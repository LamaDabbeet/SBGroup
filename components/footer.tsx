import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-silver text-white px-16 py-16">
      <div className="flex mb-16">
        <Image
          src="/images/sbg-white-logo.png"
          width={260}
          height={70}
          alt="Sami Al Baroudi Group White Logo"
        />
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
          <h2 className="font-bold">{t("contact")}</h2>
          <ul className="mt-4">
            <li>
              <span>{t("address")}</span>
            </li>
            <li>
              <a href="tel:+963116116677">
                {t("callUs")}:
                <span className="hover:text-primary hover:underline" dir="ltr">
                  +963 11 611 6677
                </span>
              </a>
            </li>
            <li className="hover:text-primary hover:underline">
              <a href="mailto:info@sambgroup.com">info@sambgroup.com</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
          <h2 className="font-bold">{t("followUs")}</h2>
          <ul className="flex mt-4">
            <li>
              <div className="hover:cursor-pointer bg-white hover:bg-silver p-3.5 duration-200 ease-in border-2 border-white text-silver hover:text-white flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer bg-white hover:bg-silver p-3.5 duration-200 ease-in border-2 border-white text-silver hover:text-white flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer bg-white hover:bg-silver p-3.5 duration-200 ease-in border-2 border-white text-silver hover:text-white flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer bg-white hover:bg-silver p-3.5 duration-200 ease-in border-2 border-white text-silver hover:text-white flex items-center justify-center w-6 h-6 rounded-full hover:cursor-pointer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 w-full">
          <h2 className="font-bold">{t("groupCompanies")}</h2>
          <ul className="mt-4">
            <li className="hover:text-primary">
              <Link href="/companies/contracting">
                Sami Al Baroudi Contracting Co
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/companies/mix-concrete">Ready Mix Concrete Co</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/companies/roadlink">RoadLink</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/companies/sbd">SBD</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
