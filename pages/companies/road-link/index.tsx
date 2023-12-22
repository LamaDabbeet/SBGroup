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

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const projects = [
    {
      // arabicName:
      //   "من أهم أعمال الشركة تقديم خدمات نقل الرمل و الجص من العديد من المقالع في ريف دمشق و ريف السويداء الى مصانع الاسمنت.",
      // englishName:
      //   "Company Projects: Transport sand and gypsum from a number of quarries in rural Damascuse and rural Swaidaa to cement factorys",
      arabicName: "نقل الرمل والجبص",
      englishName: "Gypsum Transportation",
      images: [
        "/images/road-link/projects/gypsum-transportation/main-image.jpg",
        "/images/road-link/projects/gypsum-transportation/trans1.jpg",
        "/images/road-link/projects/gypsum-transportation/trans2.jpg",
        "/images/road-link/projects/gypsum-transportation/trans3.jpg",
      ],
    },
    {
      arabicName: "الصخور",
      englishName: "Rocks Industrial",
      // arabicName:
      //   "الحجر و الرخام الوطني : حيث قمنا باستخراج كميات- كبيرة من مقالع مرخصة في الرحيبة و حماه و مصيافكما تمت تلبية متطلبات الزبائن من كافة أنواعالخامات بشكل واسع كالتدمري و الرحيباني و البازلت و الحجر الحلبي و السكري و اللاذقاني .......الخ, /n تختلف مصادر الشركة من الحجر و الرخام و الغرانيت - وفقاً لاحتياجات العملاء و متطلبات الأسواق",
      // englishName:
      //   "Company’s stone ,marble, and graniteresources vary according to customers andmarkets requirements./n Local stone and marble: where we have  extracted large quantities of licensed quarriesin Al Rahiba and MasiafAs customers requirement of all types of rawmaterials have been met extensively such asTadmury Basult,Aleppo stone ,SukkaryLattakia etc",
      images: [
        "/images/road-link/projects/rocks/main-image.jpg",
        "/images/road-link/projects/rocks/rocks-2.jpg",
        "/images/road-link/projects/rocks/rocks-3.jpg",
        "/images/road-link/projects/rocks/rocks-1.jpg",
      ],
    },
    {
      arabicName: "نقل الطف البركاني",
      englishName: "Pozlana Transportation",
      // arabicName:
      //   "من أهم أعمال الشركة تقديم خدمات نقل مادة الطف البركاني من العديد من المقالع في ريف دمشق و ريف السويداء الى مصانع الاسمنت.",
      // englishName:
      //   "Company Projects: Transport pozlana from a number of quarries in rural Damascuse and rural Swaidaa  to cement factorys",
      images: [
        "/images/road-link/projects/pozlana-transportation/main-image.jpg",
        "/images/road-link/projects/pozlana-transportation/poz-trans1.jpg",
        "/images/road-link/projects/pozlana-transportation/poz-trans2.jpg",
        "/images/road-link/projects/pozlana-transportation/poz-trans3.jpg",
      ],
    },
    {
      arabicName: "ابو الشامات",
      englishName: "Abo Al-Shamat",
      // arabicName:
      //   "كانت بداية أعمال الشركة مشروع تنفيذ خندق حماية و درء السيول لمعامل اسمنت الباديةو المتحدة للاسمنت في منطقة ابو الشامات ,بطول 14000 م و ارتفاع اجمالي 6 م",
      // englishName:
      //   "The Company’s first project was implementing a flood protection trench for Al-Badia Cement and United Cement  Factories in Abu shamat with 14000 m long and total height of the trench and the berm is 6 m",
      images: [
        "/images/road-link/projects/abo-alshamat/abu-alshamat4.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat2.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat3.jpg",
        "/images/road-link/projects/abo-alshamat/abu-alshamat5.jpg",
      ],
    },
    {
      arabicName: "المقالع والمحاجر",
      englishName: "Quarries Works",
      // arabicName: "المقالع والمحاجر",
      // englishName:
      //   "Contracting with Al-Badia Cement Company to provide quarrying services from the extraction, crushing and transfer of limestone and basalt stone from Al-Badia Cement Factory's quarries in Khan Abu Shammat to raw materials' crushers and storage areas in the factoryIn addition to providing the necessary geologicalservices and engineeringconsultancy to complete the work",
      images: [
        "/images/road-link/projects/quarries/main-image.jpg",
        "/images/road-link/projects/quarries/quar1.jpg",
        "/images/road-link/projects/quarries/quar4.jpg",
        "/images/road-link/projects/quarries/quar3.jpg",
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
        modalContent.style.width = "60%";
      }
      modalContent.style.height = "40vh";
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
                    // href="/#about-sbg-contracting"
                    href=""
                    className="text-gray  block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("about")}
                  </Link>

                  <Link
                    // href="/#contracting-services"
                    href=""
                    className="text-gray block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("services")}
                  </Link>

                  <Link
                    // href="/#contracting-projects"
                    href=""
                    className="text-gray   block px-3 py-2 rounded-md text-base font-medium"
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>

                  <Link
                    // href="/#contact-us"
                    href=""
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
        className="lg:w-2/3  w-full m-auto px-8 py-16"
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("services")}
        </h2>
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div
            className="lg:w-1/3 w-full lg:mb-0 mb-20"
            id="first-arabic-service-block"
          >
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

          <div className="lg:w-1/3 w-full lg:mb-0 mb-20">
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
          <div className="lg:w-1/3 w-full">
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
                src="/images/road-link/projects/gypsum-transportation/main.jpg"
                layout="fill"
                alt="Project"
                objectFit="cover"
                className={roadLinkStyles.image}
              />

              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(0)}
              >
                <div className={roadLinkStyles.text}>
                  {t("transportGypsum")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/rocks/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={roadLinkStyles.image}
              />
              <div
                className={roadLinkStyles.overlay}
                onClick={() => openProjectDetails(1)}
              >
                <div className={roadLinkStyles.text}>{t("rockIndustrial")}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/pozlana-transportation/main-image.jpg"
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
                  {t("transportPozlana")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={roadLinkStyles.container}>
              <Image
                src="/images/road-link/projects/abo-alshamat/main.jpg"
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
                src="/images/road-link/projects/quarries/main.JPG"
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
                <div className={roadLinkStyles.projectDescContainer5}>
                  <div
                    className={roadLinkStyles.projectContainer5Tile1}
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
                  <div className={roadLinkStyles.projectContainer5Tile2}>
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
                  <div className={roadLinkStyles.projectContainer5Tile3}>
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
                  <div className={roadLinkStyles.projectContainer5Tile4}>
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
                    className={`${roadLinkStyles.projectContainer5Tile5} bg-yellow flex items-center justify-center`}
                  >
                    <div className="text-white font-medium px-8">
                      {locale == "en"
                        ? project.englishName
                        : project.arabicName}
                    </div>
                  </div>
                </div>
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
                  width: "80%",
                  height: "70vh",
                  boxShadow: "-20px 20px 50px 15px black",
                }}
              >
                <div className={roadLinkStyles.projectDescContainer4}>
                  <div
                    className={roadLinkStyles.projectContainer4Tile1}
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
                  <div className={roadLinkStyles.projectContainer4Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={roadLinkStyles.projectContainer4Tile3}>
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
                    className={`${roadLinkStyles.projectContainer4Tile4} bg-yellow flex items-center justify-center`}
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
                <div className={roadLinkStyles.projectDescContainer3}>
                  <div
                    className={roadLinkStyles.projectContainer3Tile1}
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
                  <div className={roadLinkStyles.projectContainer3Tile2}>
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
                    className={`${roadLinkStyles.projectContainer4Tile4} bg-yellow flex items-center justify-center`}
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
      <section className="h-80 px-16 py-16 flex flex-col justify-center align-start">
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
          className={`bg-yellow px-12 py-16 lg:flex lg:justify-between`}
        >
          <div className="lg:w-2/3 w-full">
            <h1 className="lg:text-3xl text-xl font-bold ">{t("roadLink")}</h1>
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
                    href="/companies/contracting/#about-road-link"
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-services"
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contracting-projects"
                    className={`hover:text-yellow`}
                    scroll={false}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/contracting/#contact-us"
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
