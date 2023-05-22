import Image from "next/image";
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

function ContractingCompany() {
  const { t } = useTranslation("common");

  // const [project, setProject] = useState({ images: [], desc: "" });

  const [project, setProject] = useState<{ images: any; desc: string }>({
    images: [],
    desc: "",
  });

  const projects = [
    {
      desc: "1Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. ",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
      ],
    },
    {
      desc: "2Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. ",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
        "/../public/images/project1-3.jpg",
      ],
    },
    {
      desc: "3Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. ",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
        "/../public/images/project1-3.jpg",
        "/../public/images/project1-4.jpg",
      ],
    },
    {
      desc: "4Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. c",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
        "/../public/images/project1-3.jpg",
        "/../public/images/project1-4.jpg",
      ],
    },
    {
      desc: "5Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. ",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
        "/../public/images/project1-3.jpg",
        "/../public/images/project1-4.jpg",
      ],
    },
    {
      desc: "6 Execute thirteen towers for the Engineers' Retirement Cabinet Association in Jadaydeh Artouz. ",
      images: [
        "/../public/images/project1-1.jpg",
        "/../public/images/project1-2.jpg",
        "/../public/images/project1-3.jpg",
        "/../public/images/project1-4.jpg",
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
          modules={[Navigation]}
          className={contractingStyles.header_swiper}
        >
          <SwiperSlide>
            <Image
              src="/../public/images/contracting-header.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
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
              src="/../public/images/constructing-design.jpg"
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
              src="/../public/images/build.jpg"
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
              src="/../public/images/general-contracting.jpg"
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
          watchSlidesProgress={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />
              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>Hello World</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>Hello World</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project3.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>
                  Execute thirteen towers for the Engineers Retirement Cabinet
                  Association in Jadaydeh Artouz.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>Hello World</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />

              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>Hello World</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={contractingStyles.container}>
              <Image
                src="/../public/images/project3.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={contractingStyles.image}
              />
              <div className={contractingStyles.overlay}>
                <div className={contractingStyles.text}>Hello World</div>
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
              paddingTop: "100px",
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
                      {project?.desc}
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
              paddingTop: "100px",
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
              paddingTop: "100px",
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
            Arabic
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li>
            ِEnglish
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
