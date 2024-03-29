import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import roadLinkStyles from "./road-link.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Header from "@/components/common/header";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import LocaleSwitcher from "../../../components/common/lanaguage-detector";
import Image from "next/legacy/image";
import useWindowDimensions from "@/hooks/use-window-dimensions";

function RoadLink() {
  const { t } = useTranslation("road-link");
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
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(1);
  const { width } = useWindowDimensions();

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const projects = [
    {
      arabicName:
        "توريد و استيراد بواخر الفحم الحجري بالمواصفات العالية لصالح الزبائن من بلد المنشأ ومن كبرى الشركات العالمية ",
      englishName: " Importing and supplying steam coal in bulk",

      images: [
        "/images/road-link/projects/coal-ship/1.jpg",
        "/images/road-link/projects/coal-ship/2.jpg",
        "/images/road-link/projects/coal-ship/3.jpg",
        "/images/road-link/projects/coal-ship/4.jpg",
      ],
    },
    {
      arabicName: "استخراج ,تصنيع,استيراد و تصدير الحجر و الرخام و الغرانيت",
      englishName:
        "Extracting, manufacturing, importing and exporting stone, marble and granite",
      images: [
        "/images/road-link/projects/marbel/1.jpg",
        "/images/road-link/projects/marbel/2.jpg",
        "/images/road-link/projects/marbel/3.jpg",
        "/images/road-link/projects/marbel/4.jpg",
      ],
    },
    {
      arabicName:
        "تقديم خدمات نقل الطف البركاني و الرمل و الجص من العديد من المقالع الى مصنع اسمنت البادية ,بالإضافة إلى عقود نقل داخلي لتخديم المصنع .",
      englishName:
        " Transportation services of cement, pozzolana ,sand and gypsum materials from the quarries to Al-Badia Cement Factory , in addition to the internal transportation services in the factory.",
      images: [
        "/images/road-link/projects/transport/1.jpg",
        "/images/road-link/projects/transport/2.jpg",
        "/images/road-link/projects/transport/3.jpg",
        "/images/road-link/projects/transport/4.jpg",
      ],
    },
    {
      arabicName:
        "شروع تنفيذ خندق لمعامل إسمنت البادية والمتحدة للإسمنت في منطقة أبو الشامات بطول 1400 م وارتفاع إجمالي 6 م",
      englishName:
        "The Construction of a Trench for Al-Badia Cement Factory and United Cement factory in Abu Al-Shamat area. With 1400 m length and a total height of 6 m.",
      images: [
        "/images/road-link/projects/abo-alshamat/abu-alshamat4.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat2.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat3.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat5.jpg",
      ],
    },
    {
      arabicName:
        "التعاقد مع شركة إسمنت البادية لتقديم الخدمات المقلعية لاستخراج وتكسير ونقل مادتي الحجر الكلسي والحجر البازلتي من مقالع مصنع اسمنت البادية في منطقة خان أبو الشامات إلى كسارات المواد الأولية وساحات التخزين في المصنع",
      englishName:
        " A contract with Al-Badia Cement Factory to provide quarrying services including extraction, crushing, and transportation of limestone and basalt materials from the quarries in Khan Abu Al-Shamat area to the crushers and the storage yards at the factory.",
      images: [
        "/images/road-link/projects/quarries/1.jpg",
        "/images/road-link/projects/quarries/2.jpg",
        "/images/road-link/projects/quarries/3.jpg",
        "/images/road-link/projects/quarries/4.jpg",
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
  const sliderImages = [
    {
      mainImage: "/images/road-link/slider/slider-1.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide1.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slider-2.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide2.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slider-3.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide3.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slider-4.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide4.jpg",
    },
  ];

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
                      src="/images/road-link/logo.png"
                      alt="Workflow"
                      width={85}
                      height={80}
                    />
                  </Link>
                </div>

                <div className="hidden md:flex h-24  items-center">
                  {/* <ul className="flex">
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-yellow hover:bg-white duration-200 ease-in border-2 border-yellow text-white hover:text-yellow  p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-yellow  hover:bg-white duration-200 ease-in border-2 border-yellow  text-white hover:text-yellow  p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faInstagram} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-yellow  hover:bg-white duration-200 ease-in border-2 border-yellow  text-white hover:text-yellow p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                      </div>
                    </li>
                    <li>
                      <div
                        className={`hover:cursor-pointer bg-yellow  hover:bg-white duration-200 ease-in border-2 border-yellow  text-white hover:text-yellow p-2.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                      >
                        <FontAwesomeIcon icon={faWhatsapp} size="sm" />
                      </div>
                    </li>
                  </ul> */}

                  <div className="ml-10 flex items-baseline space-x-4 h-full">
                    <Link
                      href="/"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-yellow  hover:text-yellow  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("home")}
                    </Link>
                    <Link
                      href="/companies/road-link/#about-road-link"
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-yellow  hover:text-yellow  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href="/companies/road-link/#road-link-services"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-yellow  hover:text-yellow  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("services")}
                    </Link>

                    <Link
                      href="/companies/road-link/#road-link-projects"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-yellow  hover:text-yellow  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("projects")}
                    </Link>

                    <Link
                      href="/companies/road-link/#contact-us"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-yellow  hover:text-yellow border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("contactUs")}
                    </Link>
                    <LocaleSwitcher hoverColor="yellow" textColor="gray" />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white`}
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
                    href="/companies/road-link/#about-road-link"
                    onClick={() => setIsOpen(false)}
                    className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("about")}
                  </Link>

                  <Link
                    href="/companies/road-link/#road-link-services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("services")}
                  </Link>

                  <Link
                    href="/companies/road-link/#road-link-projects"
                    onClick={() => setIsOpen(false)}
                    className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    href="/companies/road-link/#contact-us"
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
        <Header color="yellow" sliderImages={sliderImages} />
      </section>
      <section id="about-road-link" className="text-center px-16 py-16">
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("whoWeAre")}
        </h2>
        <div className="flex justify-center">
          <div id="who-we-are" className="w-8/10">
            <p>{t("whoWeAreDesc1")}</p>
            <p>{t("whoWeAreDesc2")}</p>
            <p>{t("whoWeAreDesc3")}</p>
            <p>{t("whoWeAreDesc4")}</p>
          </div>
        </div>
      </section>
      <section
        id="road-link-services"
        className="lg:w-2/3  w-full m-auto py-16"
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("services")}
        </h2>
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
            <Image
              src="/images/road-link/services/transport.jpg"
              alt="Transportation"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("transportation")}</h3>
            <p>{t("transportaionDesc")}</p>
          </div>
          <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
            <Image
              src="/images/road-link/services/quarries.jpg"
              alt="Quarries Works"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("quarriesWorks")}</h3>
            <p>{t("quarriesWorkDesc")}</p>
          </div>
          <div className="lg:w-1/3 w-full px-10 lg:px-0">
            <Image
              src="/images/road-link/services/rock.jpg"
              alt="Rocks industerial"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("rockIndustrial")}</h3>
            <p>{t("rockIndustrialDesc")}</p>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-dark w-full lg:px-16 lg:pt-16 lg:pb-8 px-0 pt-16 pb-0"
        id="road-link-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("projects")}
        </h2>
        <Swiper
          className={roadLinkStyles.projects_swiper}
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
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/coal-ship/3.jpg"
                layout="fill"
                alt="Project"
                objectFit="cover"
                className={roadLinkStyles.image}
              />

              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(0)}
              >
                <div className={roadLinkStyles.text}>{t("coalShip")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/marbel/2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={roadLinkStyles.image}
              />
              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(1)}
              >
                <div className={roadLinkStyles.text}>{t("marbel")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/transport/2.jpg"
                layout="fill"
                alt="Project"
                objectFit="cover"
                className={roadLinkStyles.image}
              />

              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(2)}
              >
                <div className={roadLinkStyles.text}>
                  {t("transportAndLogistic")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/abo-alshamat/abu-alshamat2.jpg"
                layout="fill"
                alt="Project"
                className={roadLinkStyles.image}
              />

              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(3)}
              >
                <div className={roadLinkStyles.text}>{t("abuShammat")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/quarries/2.jpg"
                layout="fill"
                alt="Project"
                className={roadLinkStyles.image}
              />

              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(4)}
              >
                <div className={roadLinkStyles.text}>{t("quarriesWorks")}</div>
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
                    className="bg-yellow"
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
                  className="bg-yellow"
                  style={{
                    marginTop: "1.5%",
                    height: "31.5%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    padding: "25px",
                  }}
                >
                  <p
                    className="project-image"
                    style={{ wordWrap: "break-word", width: "100%",fontSize:'small' }}
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
        <div style={{ height: "4rem", backgroundColor: "white" }}></div>

        {/* <h2 className="text-yellow uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li className="hover:text-yellow hover:font-bold hover:cursor-pointer">
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li className="hover:text-yellow hover:font-bold hover:cursor-pointer">
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul> */}
      </section>
      <footer className="text-white" id="contact-us">
        <div
          id="top-footer"
          className={`bg-yellow flex`}
          style={{ height: "120px" }}
        >
          <div className="lg:w-2/3 w-full h-100 ps-12">
            <Image
              src="/images/road-link/white-logo.png"
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
                  className={`hover:cursor-pointer bg-white hover:bg-yellow duration-200 ease-in border-2 border-white text-yellow  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-yellow  duration-200 ease-in border-2 border-white text-yellow  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-yellow duration-200 ease-in border-2 border-white text-yellow hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-yellow duration-200 ease-in border-2 border-white text-yellow hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
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
                    className={`hover:text-yellow`}
                  >
                    {t("samiBaroudyContracting")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete"
                    className={`hover:text-yellow`}
                  >
                    {t("readyMix")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link"
                    className={`hover:text-yellow`}
                  >
                    {t("roadLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/companies/sbd" className={`hover:text-yellow`}>
                    {t("SBD")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <h2 className={`text-yellow uppercase font-bold`}>
                {t("quickLinks")}
              </h2>
              <ul className="mt-4">
                <li>
                  <Link href="/" className={`hover:text-yellow`} scroll={false}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link/#about-road-link"
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link/#road-link-services"
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link/#road-link-projects"
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link/#contact-us"
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <LocaleSwitcher hoverColor={"yellow"} textColor="white" />
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <h4 className={`text-yellow uppercase font-bold`}>
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
                      className={`hover:text-yellow hover:underline`}
                      dir="ltr"
                    >
                      +963 11 611 6677
                    </span>
                  </a>
                </li>
                <li className={`hover:text-yellow hover:underline`}>
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

export default RoadLink;

RoadLink.Layout = "Companies";
RoadLink.Logo = "/images/road-link/logo.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["road-link"])),
    },
  };
}
