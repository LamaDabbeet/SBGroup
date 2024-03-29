import Image from "next/legacy/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mixConcreteStyles from "./mix-concrete.module.css";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Header from "@/components/common/header";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import LocaleSwitcher from "../../../components/common/lanaguage-detector";
import useWindowDimensions from "@/hooks/use-window-dimensions";

function MixConcrete() {
  const { t } = useTranslation("mix-concrete");
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const [project, setProject] = useState<{
    images: string[];
    englishName: string;
    arabicName: string;
  }>({
    images: [],
    arabicName: "",
    englishName: "",
  });

  const projects = [
    {
      arabicName:
        " مشروع مدينة أب تاون :تنفيذ الهيكل البيتوني لمدينة (أب تاون) الترفيهية في مشروع دمر-دمشق.",
      englishName:
        " UP Town City Project : The concrete structure of “Up Town city” in Mashrou’ Dummar- Damascus.",
      images: [
        "/images/mix-concrete/projects/up-town/1-min.jpg",
        "/images/mix-concrete/projects/up-town/2-min.jpg",
        "/images/mix-concrete/projects/up-town/3-min.jpg",
        "/images/mix-concrete/projects/up-town/4-min.jpg",
      ],
    },
    {
      arabicName:
        " مشروع جمعية أعضاء مجلس الشعب : تنفيذ أعمال الصب لستة أبراج لجمعية أعضاء مجلس الشعب في مشروع دمر-دمشق      ",
      englishName:
        "The Association of The Parliament Project: Concrete works of six towers for the association of the Parliament in Mashrou’ Dummar- Damascus.",
      images: [
        "/images/mix-concrete/projects/majlis-alshaab/1-min.jpg",
        "/images/mix-concrete/projects/majlis-alshaab/2-min.jpg",
        "/images/mix-concrete/projects/majlis-alshaab/3-min.jpg",
        "/images/mix-concrete/projects/majlis-alshaab/4-min.jpg",
      ],
    },
    {
      arabicName:
        "مشروع جمعية خزانة تقاعد المهندسين : تنفيذ أعمال الصب لثلاثة عشر برج لجمعية خزانة تقاعد المهندسين في منطقة جديدة عرطوز-دمشق.",
      englishName:
        " Engineers' Retirement Cabinet Association project: Concrete works of thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz- Damascus.",
      images: [
        "/images/mix-concrete/projects/jdidat-artouz/1-min.jpg",
        "/images/mix-concrete/projects/jdidat-artouz/2-min.jpg",
        "/images/mix-concrete/projects/jdidat-artouz/3-min.jpg",
        "/images/mix-concrete/projects/jdidat-artouz/4-min.jpg",
      ],
    },
    {
      arabicName:
        "أبراج دمر : تنفيذ أعمال الصب  لبرجيين سكنيين من مشروع أبراج دمر-دمشق",
      englishName:
        " Dummar Heights towers : Concrete works of two towers for Dummar heights project in Mashrou’ Dommar- Damascus.",
      images: [
        "/images/mix-concrete/projects/dummar-27/1-min.jpg",
        "/images/mix-concrete/projects/dummar-27/2-min.jpg",
        "/images/mix-concrete/projects/dummar-27/3-min.jpg",
        "/images/mix-concrete/projects/dummar-27/4-min.jpg",
      ],
    },
    {
      arabicName:
        "مشروع جمعية المنهل السكنية : تنفيذ أعمال الصب لجمعية المنهل السكنية في منطقة ضاحية الفيحاء-دمشق",
      englishName:
        "Al-Manhal Housing Association Project: Concrete works of Al-Manhal housing association – Mashrou’ Dummar- Damascus.",
      images: [
        "/images/mix-concrete/projects/al-manahel/1-min.jpg",
        "/images/mix-concrete/projects/al-manahel/2-min.jpg",
        "/images/mix-concrete/projects/al-manahel/3-min.jpg",
        "/images/mix-concrete/projects/al-manahel/4-min.jpg",
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
      mainImage: "/images/mix-concrete/slider/slider-1.jpg",
      mobileImage: "/images/mix-concrete/slider/mobile/slider-1.jpg",
    },
    {
      mainImage: "/images/mix-concrete/slider/slider-2.jpg",
      mobileImage: "/images/mix-concrete/slider/mobile/slider-2.jpg",
    },
    {
      mainImage: "/images/mix-concrete/slider/slider-3.jpg",
      mobileImage: "/images/mix-concrete/slider/mobile/slider-3.jpg",
    },
    {
      mainImage: "/images/mix-concrete/slider/slider-4.jpg",
      mobileImage: "/images/mix-concrete/slider/mobile/slider-2.jpg",
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
                      src="/images/mix-concrete/logo.png"
                      alt="Workflow"
                      width={130}
                      height={120}
                    />
                  </Link>
                </div>
                <div className="hidden md:flex h-24  items-center">
                  <div className="ml-10 flex items-baseline space-x-4 h-full">
                    <Link
                      href="/"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-red  hover:text-red  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("home")}
                    </Link>
                    <Link
                      href="/companies/mix-concrete/#about-mix-concrete"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-red  hover:text-red  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href="/companies/mix-concrete/#mix-concrete-services"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-red  hover:text-red  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("services")}
                    </Link>

                    <Link
                      href="/companies/mix-concrete/#mix-concrete-projects"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-red  hover:text-red  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("projects")}
                    </Link>

                    <Link
                      href="/companies/mix-concrete/#contact-us"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-red  hover:text-red border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("contactUs")}
                    </Link>
                    <LocaleSwitcher hoverColor="red" textColor="gray" />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white`}
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
                    href="/companies/mix-concrete/#about-mix-concrete"
                    onClick={() => setIsOpen(false)}
                    className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("about")}
                  </Link>

                  <Link
                    href="/companies/mix-concrete/#mix-concrete-services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("services")}
                  </Link>

                  <Link
                    href="/companies/mix-concrete/#mix-concrete-projects"
                    onClick={() => setIsOpen(false)}
                    className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    href="/companies/mix-concrete/#contact-us"
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
        <Header color="red" sliderImages={sliderImages} />
      </section>
      <div className={mixConcreteStyles.logo_background}>
        <section id="about-mix-concrete" className="text-center px-16 py-16">
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
          id="mix-concrete-services"
          className="lg:w-2/3  w-full m-auto py-16"
        >
          <h2 className="text-center font-semibold uppercase text-2xl mb-12">
            {t("services")}
          </h2>
          <div className="lg:flex lg:justify-between lg:space-x-12">
            <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
              <Image
                src="/images/mix-concrete/services/quality-control1.jpg"
                alt="Quality Control"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">
                {t("qualityControl")}
              </h3>
              <p>{t("qualityControlDesc")}</p>
            </div>
            <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10 px-10 lg:px-0">
              <Image
                src="/images/mix-concrete/services/delivery-services1.jpg"
                alt="Delivery Services"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">
                {t("deliveryServices")}
              </h3>
              <p>{t("deliveryServiceDesc")}</p>
            </div>
            <div className="lg:w-1/3 w-full px-10 lg:px-0">
              <Image
                src="/images/mix-concrete/services/technical-support1.jpg"
                alt="Technical Support"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="font-medium text-xl my-6">
                {t("technicalSupport")}
              </h3>
              <p>{t("technicalSupportDesc")}</p>
            </div>
          </div>
        </section>
      </div>

      <section
        className="bg-gray-dark w-full lg:px-16 lg:pt-16 lg:pb-8 px-0 pt-16 pb-0"
        id="mix-concrete-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("projects")}
        </h2>
        <Swiper
          className={mixConcreteStyles.projects_swiper}
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
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/mix-concrete/projects/up-town/1-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div
                className={mixConcreteStyles.overlay}
                onClick={() => openProjectDetails(0)}
              >
                <div className={mixConcreteStyles.text}>{t("uptown")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/mix-concrete/projects/majlis-alshaab/1-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />
              <div
                className={mixConcreteStyles.overlay}
                onClick={() => openProjectDetails(1)}
              >
                <div className={mixConcreteStyles.text}>
                  {t("majlis-alshaab")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/mix-concrete/projects/jdidat-artouz/1-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div
                className={mixConcreteStyles.overlay}
                onClick={() => openProjectDetails(2)}
              >
                <div className={mixConcreteStyles.text}>
                  {t("jdidatArtouz")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/mix-concrete/projects/dummar-27/1-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div
                className={mixConcreteStyles.overlay}
                onClick={() => openProjectDetails(3)}
              >
                <div className={mixConcreteStyles.text}>{t("dummar27")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/mix-concrete/projects/al-manahel/1-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div
                className={mixConcreteStyles.overlay}
                onClick={() => openProjectDetails(4)}
              >
                <div className={mixConcreteStyles.text}>{t("alManahel")}</div>
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
                    className="bg-red"
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
                  className="bg-red"
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
        <div style={{ height: "2rem", backgroundColor: "white" }}></div>
        {/* <h2 className="text-red uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li className="hover:text-red hover:font-bold hover:cursor-pointer">
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li className="hover:text-red hover:font-bold hover:cursor-pointer">
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul> */}
      </section>
      <footer className="text-white" id="contact-us">
        <div
          id="top-footer"
          className={`bg-red flex`}
          style={{ height: "120px" }}
        >
          <div className="lg:w-2/3 w-full h-100 ps-12 ">
            <Image
              src="/images/mix-concrete/white-logo1.png"
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
                  className={`hover:cursor-pointer bg-white hover:bg-red duration-200 ease-in border-2 border-white text-red  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-red  duration-200 ease-in border-2 border-white text-red  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-red duration-200 ease-in border-2 border-white text-red hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-red duration-200 ease-in border-2 border-white text-red hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
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
                    className={`hover:text-red`}
                  >
                    {t("samiBaroudyContracting")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete"
                    className={`hover:text-red`}
                  >
                    {t("readyMix")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link"
                    className={`hover:text-red`}
                  >
                    {t("roadLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/companies/sbd" className={`hover:text-red`}>
                    {t("SBD")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <h2 className={`text-red uppercase font-bold`}>
                {t("quickLinks")}
              </h2>
              <ul className="mt-4">
                <li>
                  <Link href="/" className={`hover:text-red`} scroll={false}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete/#about-mix-concrete"
                    className={`hover:text-red`}
                    scroll={false}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete/#mix-concrete-services"
                    className={`hover:text-red`}
                    scroll={false}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete/#mix-concrete-projects"
                    className={`hover:text-red`}
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete/#contact-us"
                    className={`hover:text-red`}
                    scroll={false}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <LocaleSwitcher hoverColor={"red"} textColor="white" />
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <h4 className={`text-red uppercase font-bold`}>{t("contact")}</h4>
              <ul className="mt-4">
                <li>
                  <span>{t("address")}</span>
                </li>
                <li>
                  <a href="tel:+963116116677">
                    {t("callUs")}:
                    <span
                      className={`hover:text-red hover:underline`}
                      dir="ltr"
                    >
                      +963 11 611 6677
                    </span>
                  </a>
                </li>
                <li className={`hover:text-red hover:underline`}>
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

export default MixConcrete;

MixConcrete.Layout = "Companies";
// MixConcrete.LayoutColor = "red";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["mix-concrete"])),
    },
  };
}
