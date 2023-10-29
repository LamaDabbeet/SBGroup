import Image from "next/legacy/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mixConcreteStyles from "./mix-concrete.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Header from "@/components/common/header";

function MixConcrete() {
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

  return (
    <>
      <section>
        <Header color="red" />
      </section>
      <section id="about-sbg-contracting" className="text-center px-16 py-16">
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("whoWeAre")}
        </h2>
        <div className="flex justify-center">
          <div id="who-we-are" className="w-8/10">
            <p>{t("roadLinkPage.whoWeAreDesc1")}</p>
            <p>{t("roadLinkPage.whoWeAreDesc2")}</p>
            <p>{t("roadLinkPage.whoWeAreDesc3")}</p>
          </div>
        </div>
      </section>
      <section
        id="contracting-services"
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
              src="/images/constructing-design.jpg"
              alt="Constructing Design"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <h3 className="font-medium text-xl my-6">{t("transportation")}</h3>
            <p>{t("roadLinkPage.transportaionDesc")}</p>
          </div>

          <div className="lg:w-1/3 w-full lg:mb-0 mb-20">
            <Image
              src="/images/build.jpg"
              alt="Build"
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
              src="/images/general-contracting.jpg"
              alt="General Contracting"
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
        id="contracting-projects"
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
          onClick={openProjectDetails}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/al-mostaqella/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("mostaqellaProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/artouz/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />
              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("artouzProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/al-manhal/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("manahelProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/al-mostaqella/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("mostaqellaProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/artouz/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />
              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("artouzProject")}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={mixConcreteStyles.container}>
              <Image
                src="/images/contracting/projects/al-manhal/main.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={mixConcreteStyles.image}
              />

              <div className={mixConcreteStyles.overlay}>
                <div className={mixConcreteStyles.text}>
                  {t("manahelProject")}
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
                <div className={mixConcreteStyles.projectDescContainer5}>
                  <div
                    className={mixConcreteStyles.projectContainer5Tile1}
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
                  <div className={mixConcreteStyles.projectContainer5Tile2}>
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
                  <div className={mixConcreteStyles.projectContainer5Tile3}>
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
                  <div className={mixConcreteStyles.projectContainer5Tile4}>
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
                    className={`${mixConcreteStyles.projectContainer5Tile5} bg-red flex items-center justify-center`}
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
                <div className={mixConcreteStyles.projectDescContainer4}>
                  <div
                    className={mixConcreteStyles.projectContainer4Tile1}
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
                  <div className={mixConcreteStyles.projectContainer4Tile2}>
                    <Image
                      alt=""
                      src={project.images[1]}
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                    ></Image>
                  </div>
                  <div className={mixConcreteStyles.projectContainer4Tile3}>
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
                    className={`${mixConcreteStyles.projectContainer4Tile4} bg-red flex items-center justify-center`}
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
                <div className={mixConcreteStyles.projectDescContainer3}>
                  <div
                    className={mixConcreteStyles.projectContainer3Tile1}
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
                  <div className={mixConcreteStyles.projectContainer3Tile2}>
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
                    className={`${mixConcreteStyles.projectContainer4Tile4} bg-red flex items-center justify-center`}
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
        className="h-80 px-16 py-16 flex flex-col justify-center align-start"
      >
        <h2 className="text-red uppercase text-3xl font-semibold">
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
        </ul>
      </section>
    </>
  );
}

export default MixConcrete;

MixConcrete.Layout = "Companies";
MixConcrete.LayoutColor = "red";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
