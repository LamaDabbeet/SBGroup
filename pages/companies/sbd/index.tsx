import Image from "next/legacy/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sbdStyles from "./sbd.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Header from "@/components/common/header";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import LocaleSwitcher from "../../../components/common/lanaguage-detector";

function SBD() {
  const { t } = useTranslation("sbd");
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
        "مشروع أبراج دمر : تنفيذ برجيين سكنيين من مشروع أبراج دمر -دمشق",
      englishName:
        "Dummar Heights Project: Structure works for two towers for Dummar heights project in Mashrou’ Dommar- Damascus.",
      images: [
        "/images/sbd/projects/dummar-heights-project/1.jpg",
        "/images/sbd/projects/dummar-heights-project/2.jpg",
        "/images/sbd/projects/dummar-heights-project/3.jpg",
        "/images/sbd/projects/dummar-heights-project/4.jpg",
      ],
    },
    {
      arabicName:
        "تصميم مشروع أبراج دمر : تصميم معماري لبرجين من مشروع أبراج دمر",
      englishName:
        "Dummar Heights Design : Designs for two towers for Dummar heights project in Mashrou’ Dommar- Damascus.",
      images: [
        "/images/sbd/projects/dummar-heights-exterior/1-min.jpg",
        "/images/sbd/projects/dummar-heights-exterior/2-min.jpg",
        "/images/sbd/projects/dummar-heights-exterior/3-min.jpg",
        "/images/sbd/projects/dummar-heights-exterior/4-min.jpg",
      ],
    },
    {
      arabicName:
        "تصميم داخلي لشقق مشروع أبراج دمر : تصميم داخلي لشقق مشروع أبراج دمر – دمشق",
      englishName:
        "Dummar Heights Interior Design: Interior Designs for residential apartments for Dummar heights project in Mashrou’ Dommar- Damascus.",
      images: [
        "/images/sbd/projects/dummar-heights-interior/1-min.jpg",
        "/images/sbd/projects/dummar-heights-interior/2-min.jpg",
        "/images/sbd/projects/dummar-heights-interior/3-min.jpg",
        "/images/sbd/projects/dummar-heights-interior/4-min.jpg",
      ],
    },
    {
      arabicName:
        "مشروع مونتي فيو : تنفيد 25 فيلا سكنية و البنى التحتية من مشروع مونتي فيو -ريف دمشق",
      englishName:
        "Monte View Project : Structure works for 25 Villas and Infrastructure for Monte View Project - Damascus Countryside .",
      images: [
        "/images/sbd/projects/mont-view-project/1.jpg",
        "/images/sbd/projects/mont-view-project/2.jpg",
        "/images/sbd/projects/mont-view-project/3.jpg",
        "/images/sbd/projects/mont-view-project/4.jpg",
      ],
    },

    {
      arabicName:
        "تصميم مشروع مونتي فيو : تصميم 25 فيلا سكنية من مشروع مونتي فيو - ريف دمشق",
      englishName:
        "Monte View Design: Design for 25 Villas for Monte View Project - Damascus Countryside .",
      images: [
        "/images/sbd/projects/mont-view-exterior/1-min.jpg",
        "/images/sbd/projects/mont-view-exterior/2-min.jpg",
        "/images/sbd/projects/mont-view-exterior/3-min.jpg",
        "/images/sbd/projects/mont-view-exterior/4-min.jpg",
      ],
    },
    {
      arabicName:
        "تصميم داخلي لفلل مشروع مونتي فيو : تصميم داخلي ل 25 فيلا سكنية من الداخل لمشروع مونتي فيو - ريف دمشق ",
      englishName:
        "Monte View Interior Design: Interior Design for 25 Villas for Monte View Project - Damascus Countryside ",
      images: [
        "/images/sbd/projects/mont-view-interior/1.jpg",
        "/images/sbd/projects/mont-view-interior/2.jpg",
        "/images/sbd/projects/mont-view-interior/3.jpg",
        "/images/sbd/projects/mont-view-interior/4.jpg",
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
      } else {
        modalContent.style.width = "55%";
      }
      modalContent.style.height = "85vh";
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
      mainImage: "/images/sbd/slider/slide-2.png",
      mobileImage: "/images/sbd/slider/mobile/slide-1.jpg",
    },
    {
      mainImage: "/images/sbd/slider/slide-3.png",
      mobileImage: "/images/sbd/slider/mobile/slide-2.jpg",
    },
    {
      mainImage: "/images/sbd/slider/slide-4.png",
      mobileImage: "/images/sbd/slider/mobile/slide-3.jpg",
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
                      src="/images/sbd/logo.png"
                      alt="Workflow"
                      width={90}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="hidden md:flex h-24  items-center">
                  <div className="ml-10 flex items-baseline space-x-4 h-full">
                    <Link
                      href="/"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-green  hover:text-green  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("home")}
                    </Link>
                    <Link
                      href="/companies/sbd/#about-sbd"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-green  hover:text-green  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href="/companies/sbd/#sbd-services"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-green  hover:text-green  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("services")}
                    </Link>

                    <Link
                      href="/companies/sbd/#sbd-projects"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-green  hover:text-green  border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("projects")}
                    </Link>

                    <Link
                      href="/companies/sbd/#contact-us"
                      scroll={false}
                      className={`uppercase h-full flex items-center text-gray px-3 py-2  text-sm font-medium hover:border-t-4 hover:border-t-green  hover:text-green border-t-white border-t-4 transition duration-300 px-3 py-2 text-sm font-medium`}
                    >
                      {t("contactUs")}
                    </Link>
                    <LocaleSwitcher hoverColor="green" textColor="gray" />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white`}
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
                    href="/companies/sbd/#about-sbd"
                    onClick={() => setIsOpen(false)}
                    className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("about")}
                  </Link>

                  <Link
                    href="/companies/sbd/#sbd-services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("services")}
                  </Link>

                  <Link
                    href="/companies/sbd/#sbd-projects"
                    onClick={() => setIsOpen(false)}
                    className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    href="/companies/sbd/#contact-us"
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
        <Header color="green" sliderImages={sliderImages} />
      </section>
      <section id="about-sbd" className="text-center px-16 py-16">
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
      <section id="sbd-services" className="lg:w-2/3  w-full m-auto py-16">
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("services")}
        </h2>
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10">
            <Image
              src="/images/sbd/services/creative-design.jpg"
              alt="Creative Design"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("creativeDesign")}</h3>
            <p>{t("creativeDesignDesc")}</p>
          </div>

          <div className="lg:w-1/3 w-full lg:mb-0 mb-20 lg:me-10">
            <Image
              src="/images/sbd/services/developments.jpg"
              alt="Developments"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("developments")}</h3>
            <p>{t("developmentsDesc")}</p>
          </div>
          <div className="lg:w-1/3 w-full">
            <Image
              src="/images/sbd/services/marketing.jpg"
              alt="Marketing"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("marketing")}</h3>
            <p>{t("marketingDesc")}</p>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-dark w-full lg:px-16 lg:pt-16 lg:pb-8 px-0 pt-16 pb-0"
        id="sbd-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("projects")}
        </h2>
        <Swiper
          className={sbdStyles.projects_swiper}
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
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/dummar-heights-project/1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />

              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(0)}
              >
                <div className={sbdStyles.text}>
                  {t("dummarHeightsProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/dummar-heights-exterior/1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />
              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(1)}
              >
                <div className={sbdStyles.text}>
                  {t("dummarHeightsExterior")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/dummar-heights-interior/2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />

              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(2)}
              >
                <div className={sbdStyles.text}>
                  {t("dummarHeightsInterior")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/mont-view-project/2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />

              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(3)}
              >
                <div className={sbdStyles.text}>{t("monteViewProject")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/mont-view-exterior/2-min.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />

              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(4)}
              >
                <div className={sbdStyles.text}>{t("monteViewExterior")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={sbdStyles.container}>
              <Image
                src="/images/sbd/projects/mont-view-interior/2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={sbdStyles.image}
              />

              <div
                className={sbdStyles.overlay}
                onClick={() => openProjectDetails(5)}
              >
                <div className={sbdStyles.text}>{t("monteViewInterior")}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {project.images.length === 4 ? (
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
            {project ? (
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
                      width: "70%",
                      marginInlineEnd: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "66.8%",
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
                      className="bg-green"
                      style={{
                        marginTop: "10px",
                        height: "33.2%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        padding: "25px",
                      }}
                    >
                      <p
                        className="project-image "
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
                      width: "30%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: "33.33%",
                        position: "relative",
                        width: "100%",
                        marginBottom: "8px",
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
                        height: "33.33%",
                        position: "relative",
                        width: "100%",
                        marginBottom: "8px",
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
                        height: "33.33%",
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
                {/* <div className={sbdStyles.projectDescContainer5}>
                  <div
                    className={sbdStyles.projectContainer5Tile1}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      alt=""
                      id="project-image"
                      src={project.images[0]}
                      layout="fill"
                      objectFit="cover"
                      style={{ opacity: 0 }}
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer5Tile2}>
                    <Image
                      alt=""
                      className="project-image"
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer5Tile3}>
                    <Image
                      alt=""
                      src={project.images[2]}
                      className="project-image"
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer5Tile4}>
                    {" "}
                    <Image
                      alt=""
                      src={project.images[3]}
                      className="project-image"
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div
                    className={`${sbdStyles.projectContainer5Tile5} bg-green flex items-center justify-center`}
                  >
                    <p className="text-white font-medium px-8">
                      {locale == "en"
                        ? project.englishName
                        : project.arabicName}
                    </p>
                  </div>
                </div> */}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : project.images.length === 3 ? (
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
          >
            {project ? (
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#fefefe",
                  margin: "auto",
                  border: "1px solid #888",
                  width: "55%",
                  height: "85vh",
                  boxShadow: "-20px 20px 50px 15px black",
                }}
              >
                <div className={sbdStyles.projectDescContainer4}>
                  <div
                    className={sbdStyles.projectContainer4Tile1}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      alt=""
                      src={project.images[0]}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer4Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer4Tile3}>
                    <Image
                      alt=""
                      src={project.images[2]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div
                    className={`${sbdStyles.projectContainer4Tile4} bg-green flex items-center justify-center`}
                  >
                    <p className="text-white font-medium px-8">
                      {locale == "en"
                        ? project.englishName
                        : project.arabicName}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
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
          >
            {project ? (
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#fefefe",
                  margin: "auto",
                  border: "1px solid #888",
                  width: "80%",
                  height: "70vh",
                  boxShadow: "-20px 20px 50px 15px black",
                }}
              >
                <div className={sbdStyles.projectDescContainer3}>
                  <div
                    className={sbdStyles.projectContainer3Tile1}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      alt=""
                      src={project.images[0]}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className={sbdStyles.projectContainer3Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div
                    className={`${sbdStyles.projectContainer4Tile4} bg-green flex items-center justify-center`}
                  >
                    <p className="text-white font-medium px-8">
                      {locale == "en"
                        ? project.englishName
                        : project.arabicName}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </section>
      <section
        id="contact-us"
        className="h-40 flex flex-col justify-center align-start"
      >
        <div style={{ height: "4rem", backgroundColor: "white" }}></div>
        {/* <h2 className="text-green uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li className="hover:text-green hover:font-bold hover:cursor-pointer">
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li className="hover:text-green hover:font-bold hover:cursor-pointer">
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul> */}
      </section>
      <footer className="text-white ">
        <div
          id="top-footer"
          className={`bg-green flex`}
          style={{ height: "120px" }}
        >
          <div className="lg:w-2/3 w-full h-100 ps-12 flex items-center">
            <Image
              src="/images/sbd/white-logo.png"
              height={55}
              width={100}
              style={{ objectFit: "contain" }}
              alt="Mix Concrete White Logo"
            />
          </div>
          {/* <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <h2>{t("followUs")}</h2>
            <ul className="flex mt-2">
              <li>
                <div
                  className={`hover:cursor-pointer bg-white hover:bg-green duration-200 ease-in border-2 border-white text-green  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-green  duration-200 ease-in border-2 border-white text-green  hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-green duration-200 ease-in border-2 border-white text-green hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </li>
              <li>
                <div
                  className={`bg-white hover:bg-green duration-200 ease-in border-2 border-white text-green hover:text-white p-3.5 flex items-center justify-center w-6 h-6 rounded-full me-2 hover:cursor-pointer`}
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
                    className={`hover:text-green`}
                  >
                    {t("samiBaroudyContracting")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/mix-concrete"
                    className={`hover:text-green`}
                  >
                    {t("readyMix")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/road-link"
                    className={`hover:text-green`}
                  >
                    {t("roadLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/companies/sbd" className={`hover:text-green`}>
                    {t("SBD")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <h2 className={`text-green uppercase font-bold`}>
                {t("quickLinks")}
              </h2>
              <ul className="mt-4">
                <li>
                  <Link href="/" className={`hover:text-green`} scroll={false}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#about-sbg-contracting"
                    className={`hover:text-green`}
                    scroll={false}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-services"
                    className={`hover:text-green`}
                    scroll={false}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-projects"
                    className={`hover:text-green`}
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contact-us"
                    className={`hover:text-green`}
                    scroll={false}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <LocaleSwitcher hoverColor={"green"} textColor="white" />
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <h4 className={`text-green uppercase font-bold`}>
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
                      className={`hover:text-green hover:underline`}
                      dir="ltr"
                    >
                      +963 11 611 6677
                    </span>
                  </a>
                </li>
                <li className={`hover:text-green hover:underline`}>
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

export default SBD;

SBD.Layout = "Companies";
// SBD.LayoutColor = "green";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["sbd"])),
    },
  };
}
