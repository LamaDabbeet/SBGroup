import Image from "next/legacy/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

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

  const projects = [
    {
      arabicName: "جمعية المستقلة السكنية",
      englishName: "Al-Mostaqella Association",
      images: [
        "/images/contracting/projects/al-mostaqella/mostaqella-2.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-3.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-4.jpg",
        "/images/contracting/projects/al-mostaqella/mostaqella-5.jpg",
      ],
    },
    {
      arabicName: "جمعية خزانة تعاقد المهندسين",
      englishName: "Artouz Engineers Towers",
      images: [
        "/images/contracting/projects/artouz/artouz-1.jpg",
        "/images/contracting/projects/artouz/artouz-2.jpg",
        "/images/contracting/projects/artouz/artouz-3.jpg",
        "/images/contracting/projects/artouz/artouz-5.jpg",
      ],
    },
    {
      arabicName: "جمعية المنهل السكنية",
      englishName: "Al-Manhal Housing Association",
      images: [
        "/images/contracting/projects/al-manhal/al-manahal-1.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-2.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-3.jpg",
        "/images/contracting/projects/al-manhal/al-manahal-4.jpg",
      ],
    },
  ];
  function openProjectDetails(event: any) {
    setProject(projects[event.clickedIndex]);

    var modal = document.getElementById("myModal");
    if (modal) {
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
    }
  }
  function closeProjectDetails() {
    var modal = document.getElementById("myModal");
    if (modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  }

  return (
    <>
      <section>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className={contractingStyles.header_swiper}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <Image
              src="/images/contracting/slider/slide1.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "70vh" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/images/contracting/slider/slide2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "70vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/contracting/slider/slide3.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "70vh" }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
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
        className="lg:w-2/3  w-full m-auto px-16 py-16"
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("services")}
        </h2>
        <div className="lg:flex lg:justify-between lg:space-x-12">
          <div className="lg:w-1/3 w-full lg:mb-0 mb-12">
            <Image
              src="/images/constructing-design.jpg"
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
          <div className="lg:w-1/3 w-full lg:mb-0 mb-12">
            <Image
              src="/images/build.jpg"
              alt="Build"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("build")}</h3>
            <p>{t("buildDesc")}</p>
          </div>
          <div className="lg:w-1/3 w-full">
            <Image
              src="/images/general-contracting.jpg"
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
      <section
        className="bg-gray-dark w-full px-16 pt-16 pb-8"
        id="contracting-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("projects")}
        </h2>
        <Swiper
          style={{ width: "70%" }}
          className={contractingStyles.projects_swiper}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onClick={openProjectDetails}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/artouz/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />
              <div className={contractingStyles.overlay}>
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

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>
                  {t("manahelProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/images/contracting/projects/al-mostaqella/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>
                  {t("mostaqellaProject")}
                </div>
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
          >
            {project ? (
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#fefefe",
                  margin: "auto",
                  border: "1px solid #888",
                  width: "60%",
                  height: "40vh",
                  boxShadow: "-20px 20px 50px 15px black",
                }}
              >
                <div className={contractingStyles.projectDescContainer5}>
                  <div
                    className={contractingStyles.projectContainer5Tile1}
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
                  <div className={contractingStyles.projectContainer5Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={contractingStyles.projectContainer5Tile3}>
                    <Image
                      alt=""
                      src={project.images[2]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={contractingStyles.projectContainer5Tile4}>
                    {" "}
                    <Image
                      alt=""
                      src={project.images[3]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div
                    className={`${contractingStyles.projectContainer5Tile5} bg-cyan flex items-center justify-center`}
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
                <div className={contractingStyles.projectDescContainer4}>
                  <div
                    className={contractingStyles.projectContainer4Tile1}
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
                  <div className={contractingStyles.projectContainer4Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={contractingStyles.projectContainer4Tile3}>
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
                    className={`${contractingStyles.projectContainer4Tile4} bg-cyan flex items-center justify-center`}
                  >
                    <p className="text-white font-medium px-8">
                      {project.desc}
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
                <div className={contractingStyles.projectDescContainer3}>
                  <div
                    className={contractingStyles.projectContainer3Tile1}
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
                  <div className={contractingStyles.projectContainer3Tile2}>
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
                    className={`${contractingStyles.projectContainer4Tile4} bg-cyan flex items-center justify-center`}
                  >
                    <p className="text-white font-medium px-8">
                      {project.desc}
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
      <section id="contact-us" className="h-80 px-16 py-16">
        <h2 className="text-cyan uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li>
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li>
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default ContractingCompany;

ContractingCompany.Layout = "Companies";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
