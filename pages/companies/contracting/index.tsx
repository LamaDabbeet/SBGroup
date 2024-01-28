import Image from "next/legacy/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import contractingStyles from "./contracting.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Header from "@/components/common/header";
import { Transition } from "@headlessui/react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import LocaleSwitcher from "../../../components/common/lanaguage-detector";
import useWindowDimensions from "@/hooks/use-window-dimensions";

function ContractingCompany() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [project, setProject] = useState<{
    images: string[];
    englishName: string;
    arabicName: string;
  }>({
    images: [],
    arabicName: "",
    englishName: "",
  });
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(1);
  const sliderImages = [
    {
      mainImage: "/images/contracting/slider/slide-1.jpg",
      mobileImage: "/images/contracting/slider/mobile/slide-1.jpg",
    },
    {
      mainImage: "/images/contracting/slider/slide-2.jpg",
      mobileImage: "/images/contracting/slider/mobile/slide-2.jpg",
    },
    {
      mainImage: "/images/contracting/slider/slide-3.jpg",
      mobileImage: "/images/contracting/slider/mobile/slide-3.jpg",
    },
  ];
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const projects = [
    {
      arabicName:
        "مشروع جمعية المستقلة : أعمال الهيكل لجمعية المستقلة في منطقة ضاحية الفيحاء السكنية - دمشق",
      englishName:
        "Al-Mostaqella Association Project: Structure works for Al-Mostaqella association - Residential Dahiyat Al-Faihaa - Damascus",
      images: [
        "/images/contracting/projects/al-mostaqella/mostaqella-2.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-3.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-4.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-5.jpg",
      ],
    },
    {
      arabicName:
        "مشروع جمعية خزانة تقاعد المهندسين : تنفيذ ثلاثة عشر برج لجمعية خزانة تقاعد المهندسين في منطقة جديدة عرطوز - دمشق",
      englishName:
        "Engineers' Retirement Cabinet Association Project: Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz - Damascus.",
      images: [
        "/images/contracting/projects/artouz/artouz-1.jpg",
        "/images/contracting/projects/artouz/artouz-2.jpg",
        "/images/contracting/projects/artouz/artouz-3.jpg",
        "/images/contracting/projects/artouz/artouz-5.jpg",
      ],
    },
    {
      arabicName:
        " مشروع جمعية المنهل السكنية : أعمال الهيكل لجمعية المنهل السكنية في منطقة ضاحية الفيحاء - دمشق ",
      englishName:
        "Al-Manhal Housing Association Project: Structure works for Al-Manhal housing association in Residential Dahiyat Al-Faihaa - Damascus.",
      images: [
        "/images/contracting/projects/al-manhal/al-manahal-1.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-2.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-3.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع جمعية أعضاء مجلس الشعب : تنفيذ ستة أبراج لجمعية أعضاء مجلس الشعب في منطقة مشروع دمر - دمشق",
      englishName:
        " The Association of The Parliament Project: Execute six towers for the association of the Parliament in Mashrou’ Dummar - Damascus.",
      images: [
        "/images/contracting/projects/majlis/majlis-1.jpg",
        "/images/contracting/projects/majlis/majlis-2.jpg",
        "/images/contracting/projects/majlis/majlis-3.jpg",
        "/images/contracting/projects/majlis/majlis-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع كلية الاداب :مشروع إكساء توسع كلية الآداب لصالح مؤسسة الإنشاءات العسكرية - دمشق",
      englishName:
        "Faculty of Literatures Project  : Cladding project for the expanding of the Faculty of Literatures for the Military Construction Establishment - Damascus.",
      images: [
        "/images/contracting/projects/adab/adab-1.jpg",
        "/images/contracting/projects/adab/adab-2.jpg",
        "/images/contracting/projects/adab/adab-3.jpg",
        "/images/contracting/projects/adab/adab-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع ماسة مول : تقديم مواد إكساء لمشروع ماسة مول في منطقة المالكي - دمشق",
      englishName:
        "Massa Plaza Mall Project: Submission of cladding materials for Massa Plaza Mall in Al-Maliki - Damascus.",
      images: [
        "/images/contracting/projects/massa-mall/massa-1.jpg",
        "/images/contracting/projects/massa-mall/massa-2.jpg",
        "/images/contracting/projects/massa-mall/massa-3.jpg",
        "/images/contracting/projects/massa-mall/massa-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع مشفى المواساة الجديد :أعمال الإكساء الداخلي المبنى الإسعافي لمستشفى المواساة الجديد - دمشق.",
      englishName:
        "New Mowasat Hospital’s Emergency Building Project: Internal cladding works for the emergency building of the new Mowasat Hospital - Damascus.",
      images: [
        "/images/contracting/projects/mwasat/mwasat-1.jpg",
        "/images/contracting/projects/mwasat/mwasat-2.jpg",
        "/images/contracting/projects/mwasat/mwasat-3.jpg",
        "/images/contracting/projects/mwasat/mwasat-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع المركز الطبي في حماه : تنفيذ مستشفى المركز الطبي في مدينة حماه، 6 طوابق، 75 سرير، بمساحة 2000م2 مع ملحق كامل بشراكة من قبل مجموعة البارودي - حماه.",
      englishName:
        "Medical Center Hospital Project in Hama: Execute Medical Center Hospital in Hama, 75 beds – 6 floors with full extension /2000 m2/, a percentage owned by SB Group - Hama.",
      images: [
        "/images/contracting/projects/hama-medical/hama-1.jpg",
        "/images/contracting/projects/hama-medical/hama-2.jpg",
        "/images/contracting/projects/hama-medical/hama-3.jpg",
        "/images/contracting/projects/hama-medical/hama-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع مسـتشـفى دار الشفــاء: إكساء داخلي وخارجي وتوسيع مسـتشـفى دار الشفــاء - دمشق.",
      englishName:
        "Dar Al-Shifaa Hospital project :Cladding of Dar Al-Shifaa Hospital - Damascus .",
      images: [
        "/images/contracting/projects/dar-alshifaa/shifaa-1.jpg",
        "/images/contracting/projects/dar-alshifaa/shifaa-2.jpg",
        "/images/contracting/projects/dar-alshifaa/shifaa-3.jpg",
        "/images/contracting/projects/dar-alshifaa/shifaa-4.jpg",
      ],
    },
    {
      arabicName:
        "مشروع مول برزة : :تنفيذ الأعمال الإنشائية لمشروع المول التجاري في منطقة برزة - دمشق",
      englishName:
        "Barzeh Mall Project  :Execute structural works for Barzeh mall in Barzeh area - Damascus.",
      images: [
        "/images/contracting/projects/barzeh-mall/barzeh-1.jpg",
        "/images/contracting/projects/barzeh-mall/barzeh-2.jpg",
        "/images/contracting/projects/barzeh-mall/barzeh-3.jpg",
        "/images/contracting/projects/barzeh-mall/barzeh-4.jpg",
      ],
    },
  ];
  function openProjectDetails(index: any) {
    setProject(projects[index]);

    var modal = document.getElementById("myModal");

    var modalContent = document.getElementById("modal-content");
    var projectImage = document.getElementById("project-image");

    if (modal && modalContent && projectImage) {
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
      if (screen.width < 768) {
        modalContent.style.width = "85%";
        modalContent.style.height = "60vh";
      } else {
        modalContent.style.width = "49%";
        modalContent.style.height = "70vh";
      }
      modalContent.style.transition = "height 1s ,width 1s";
      projectImage.style.opacity = "1";
      projectImage.style.transition = "opacity 1s";
    }
  }
  function closeProjectDetails() {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");
    var projectImage = document.getElementById("project-image");

    if (modal && modalContent && projectImage) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
      modalContent.style.width = "0";
      modalContent.style.height = "0";
      projectImage.style.opacity = "0";
    }
  }

  return (
    <>
      <div>
        <nav className="bg-gray-800 h-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      src="/images/contracting/logo.png"
                      alt="Workflow"
                      width={85}
                      height={90}
                    />
                  </Link>
                </div>

                <div className="hidden md:flex h-24  items-center">
                  {/* <ul className="flex">
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-cyan hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan  p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-cyan  hover:bg-white duration-200 ease-in border-2 border-cyan text-white hover:text-cyan  p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faInstagram} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-cyan  hover:bg-white duration-200 ease-in border-2 border-cyan  text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-cyan  hover:bg-white duration-200 ease-in border-2 border-cyan  text-white hover:text-cyan p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faWhatsapp} size="sm" />
                      </div>
                    </li>
                  </ul> */}

                  <div className="ml-10 flex items-baseline space-x-4 h-full">
                    <Link
                      href="/"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan  hover:text-cyan  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("home")}
                    </Link>
                    <Link
                      href="/companies/contracting/#about-sbg-contracting"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan  hover:text-cyan  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href="/companies/contracting/#contracting-services"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan  hover:text-cyan  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("services")}
                    </Link>

                    <Link
                      href="/companies/contracting/#contracting-projects"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan  hover:text-cyan  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("projects")}
                    </Link>

                    <Link
                      href="/companies/contracting/#contact-us"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-cyan  hover:text-cyan border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
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
                  className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white`}
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
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-12"
                >
                  <Link
                    href="/companies/contracting/#about-sbg-contracting"
                    onClick={() => setIsOpen(false)}
                    className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("about")}
                  </Link>

                  <Link
                    href="/companies/contracting/#contracting-services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("services")}
                  </Link>

                  <Link
                    href="/companies/contracting/#contracting-projects"
                    onClick={() => setIsOpen(false)}
                    className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    href="/companies/contracting/#contact-us"
                    onClick={() => setIsOpen(false)}
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
      <section>
        <Header sliderImages={sliderImages} color="cyan" />
      </section>
      <div className={contractingStyles.logo_background}>
        <section id="about-sbg-contracting" className="text-center px-16 py-16">
          <h2 className="text-center font-semibold uppercase text-2xl mb-12">
            {t("whoWeAre")}
          </h2>
          <div className="flex justify-center">
            <div id="who-we-are" className="w-8/10">
              <p>{t("whoWeAreDesc1")}</p>
              <p>{t("whoWeAreDesc2")}</p>
              <p>{t("whoWeAreDesc3")}</p>
            </div>
          </div>
        </section>
        <section
          id="contracting-services"
          className="lg:w-2/3  w-full m-auto py-16"
        >
          <h2 className="text-center font-semibold uppercase text-2xl mb-12">
            {t("services")}
          </h2>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
              <Image
                src="/images/contracting/services/constructing-design.jpg"
                alt="Constructing Design"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">
                {t("constructionDesign")}
              </h3>
              <p>{t("constructionDesignDesc")}</p>
            </div>
            <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
              <Image
                src="/images/contracting/services/build.jpg"
                alt="Build"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">{t("build")}</h3>
              <p>{t("buildDesc")}</p>
            </div>
            <div className="lg:w-1/3 w-full px-10 lg:px-0">
              <Image
                src="/images/contracting/services/gerneral-contracting.jpg"
                alt="General Contracting"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">
                {t("generalContracting")}
              </h3>
              <p>{t("generalContractingDesc")}</p>
            </div>
          </div>
        </section>
      </div>
      <section
        className="bg-gray-dark w-full lg:px-16 lg:pt-16 lg:pb-8 px-0 pt-16 pb-0"
        id="contracting-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("projects")}
        </h2>
        <Swiper
          className={contractingStyles.projects_swiper}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          // navigation={true}

          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/al-mostaqella/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(0)}
              >
                <div className={contractingStyles.text}>
                  {t("mostaqellaProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/artouz/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />
              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(1)}
              >
                <div className={contractingStyles.text}>
                  {t("artouzProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/al-manhal/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(2)}
              >
                <div className={contractingStyles.text}>
                  {t("manahelProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/majlis/majlis-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(3)}
              >
                <div className={contractingStyles.text}>{t("majlis")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/adab/adab-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(4)}
              >
                <div className={contractingStyles.text}>{t("adab")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/massa-mall/massa-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(5)}
              >
                <div className={contractingStyles.text}>{t("massaMall")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/mwasat/mwasat-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(6)}
              >
                <div className={contractingStyles.text}>{t("mwasat")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/hama-medical/hama-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(7)}
              >
                <div className={contractingStyles.text}>{t("hamaMedical")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/dar-alshifaa/shifaa-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(8)}
              >
                <div className={contractingStyles.text}>
                  {t("dar-alshifaa")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/barzeh-mall/barzeh-2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div
                className={contractingStyles.overlay}
                onClick={() => openProjectDetails(9)}
              >
                <div className={contractingStyles.text}>{t("barzeh")}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          onClick={closeProjectDetails}
          id="myModal"
          style={{
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0.3s, opacity 0.3s ease-in",
            position: "fixed",
            zIndex: 1,
            paddingTop: "4%",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          className="flex justify-center items-center lg:block"
        >
          {width && width > 768 ? (
            <div
              id="modal-content"
              style={{
                backgroundColor: "#fefefe",
                margin: "auto",
                border: "1px solid #888",
                boxShadow: "-20px 20px 50px 15px black",
                height: 0,
                width: 0,
              }}
            >
              <div style={{ display: "flex", width: "100%", height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "75%",
                    marginInlineEnd: "9px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "67%",
                      width: "100%",
                    }}
                  >
                    <Image
                      alt=""
                      id="project-image"
                      src={project.images[0]}
                      layout="fill"
                      sizes="100vw"
                      style={{
                        opacity: 0,
                      }}
                    ></Image>
                  </div>
                  <div
                    className="bg-cyan"
                    style={{
                      marginTop: "7px",
                      height: "33%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      padding: "25px",
                    }}
                  >
                    <p
                      className="project-image"
                      style={{ wordWrap: "break-word", width: "100%" }}
                    >
                      {locale == "en"
                        ? project.englishName
                        : project.arabicName}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "32.83%",
                      position: "relative",
                      width: "100%",
                      marginBottom: "7px",
                    }}
                  >
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[1]}
                      layout="fill"
                      sizes="100vw"
                    ></Image>
                  </div>
                  <div
                    style={{
                      height: "32.83%",
                      position: "relative",
                      width: "100%",
                      marginBottom: "7px",
                    }}
                  >
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[2]}
                      layout="fill"
                      sizes="100vw"
                    ></Image>{" "}
                  </div>
                  <div
                    style={{
                      height: "32.83%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[3]}
                      layout="fill"
                      sizes="100vw"
                    ></Image>{" "}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="modal-content"
              style={{
                backgroundColor: "#fefefe",
                margin: "auto",
                border: "1px solid #888",
                boxShadow: "-20px 20px 50px 15px black",
                height: 0,
                width: 0,
              }}
            >
              <div style={{ height: "100%" }}>
                <div
                  style={{
                    height: "33.3%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    alt=""
                    id="project-image"
                    src={project.images[0]}
                    layout="fill"
                    sizes="100vw"
                    style={{
                      opacity: 0,
                    }}
                  ></Image>
                </div>
                <div
                  style={{
                    height: "33.7%",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    marginTop: "1.5%",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      position: "relative",
                      marginInlineEnd: "8px",
                    }}
                  >
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[1]}
                      layout="fill"
                      sizes="100vw"
                    ></Image>
                  </div>
                  <div style={{ width: "50%", position: "relative" }}>
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[2]}
                      layout="fill"
                      sizes="100vw"
                    ></Image>{" "}
                  </div>
                </div>
                <div
                  className="bg-cyan"
                  style={{
                    marginTop: "7px",
                    height: "33%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    padding: "25px",
                  }}
                >
                  <p
                    className="project-image"
                    style={{ wordWrap: "break-word", width: "100%" }}
                  >
                    {locale == "en" ? project.englishName : project.arabicName}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="h-40 flex flex-col justify-center align-start">
        <div style={{ backgroundColor: "white" }}></div>

        {/* <h2 className="text-cyan uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li className="hover:text-cyan hover:font-bold hover:cursor-pointer">
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li className="hover:text-cyan hover:font-bold hover:cursor-pointer">
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul> */}
      </section>
      <footer className="text-white" id="contact-us">
        <div
          id="top-footer"
          className={`bg-cyan flex`}
          style={{ height: "120px" }}
        >
          <div className="lg:w-2/3 w-full h-100 ps-12">
            <Image
              src="/images/contracting/white-logo.png"
              height={120}
              width={120}
              style={{ objectFit: "contain" }}
              alt="Mix Concrete White Logo"
            />
          </div>

          {/* <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <h2>{t("followUs")}</h2>
            <ul className="flex mt-2">
              <li>
                <div
                  className={`hover:cursor-pointer bg-white hover:bg-cyan duration-200 ease-in border-2 border-white text-cyan  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-cyan  duration-200 ease-in border-2 border-white text-cyan hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-cyan duration-200 ease-in border-2 border-white text-cyan hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-cyan  duration-200 ease-in border-2 border-white text-cyan  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </li>
            </ul>
          </div> */}
        </div>
        <div id="main-footer" className="bg-gray-dark px-12 py-16">
          <div className="flex mb-8">
            <Image
              src="/images/sbg-white-logo.png"
              width={260}
              height={30}
              alt="Sami Al Baroudi Group White Logo"
            />
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <ul>
                <li>
                  <Link
                    href="/companies/contracting"
                    className={`hover:text-cyan`}
                  >
                    {t("samiBaroudyContracting")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete"
                    className={`hover:text-cyan`}
                  >
                    {t("readyMix")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link"
                    className={`hover:text-cyan`}
                  >
                    {t("roadLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/companies/sbd" className={`hover:text-cyan`}>
                    {t("SBD")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <h2 className={`text-cyan uppercase font-bold`}>
                {t("quickLinks")}
              </h2>
              <ul className="mt-4">
                <li>
                  <Link href="/" className={`hover:text-cyan`} scroll={false}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#about-sbg-contracting"
                    className={`hover:text-cyan`}
                    scroll={false}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-services"
                    className={`hover:text-cyan`}
                    scroll={false}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-projects"
                    className={`hover:text-cyan`}
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contact-us"
                    className={`hover:text-cyan`}
                    scroll={false}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <LocaleSwitcher hoverColor="cyan" textColor="white" />
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <h4 className={`text-cyan uppercase font-bold`}>
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
                      className={`hover:text-cyan hover:underline`}
                      dir="ltr"
                    >
                      +963 11 611 6677
                    </span>
                  </a>
                </li>
                <li className={`hover:text-cyan hover:underline`}>
                  <a href="mailto:info@sambgroup.com">info@sambgroup.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContractingCompany;

ContractingCompany.Layout = "Companies";
// ContractingCompany.LayoutColor = "cyan";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
