import {
  Navigation,
  Autoplay,
  Zoom,
  EffectFade,
  EffectCoverflow,
} from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./home.module.css";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useState } from "react";
import { useRouter } from "next/router";
// import ProjectsSlider from "@/components/home/projects-slider";
import ProjectsSlider1 from "@/components/home/projects-slider1";
import useWindowDimensions from "@/hooks/use-window-dimensions";
// import ProjectsSlider2 from "@/components/home/projects-slider2";
interface INews {
  date: string;
  englishTitle: string;
  arabicTitle: string;
}

export default function Home() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { width } = useWindowDimensions();

  const handleSlideChange = () => {
    if (swiper) {
      setCurrentSlideIndex(swiper?.activeIndex);
    }
  };
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

  const initialNews: INews[] = [
    {
      date: "Febraury 14,2023",
      englishTitle: "Construction begins in Monte View Project",
      arabicTitle: "بدأت أعمال البناء في ماونتن فيو",
    },
    {
      date: "March 7,2023",
      englishTitle: "Construction begins in Dummar Heights Project",
      arabicTitle: "بدأت أعمال البناء في مشروع أبراج دمر",
    },
    {
      date: "May 17,2023",
      englishTitle: "Construction begins in Barzah Mall Project",
      arabicTitle: "بدأت أعمال البناء في مشروع مول برزة",
    },
  ];
  const [news, setNews] = useState(initialNews);
  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Autoplay]}
          className="hover:border-b-4 hover:border-b-secondary border-b-white border-b-4 transition duration-500"
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          <SwiperSlide className="parent">
            {width && width > 760 ? (
              <Image
                src="/images/homepage/slider/slide1.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "90vh" }}
                className="relative"
              />
            ) : (
              <Image
                src="/images/homepage/slider/mobile/slide1.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "80vh" }}
                className="relative"
              />
            )}

            <p className="block absolute md:top-1/3 md:right-24 top-1/4 left-4 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {width && width > 760 ? (
              <Image
                src="/images/homepage/slider/slide2.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "90vh" }}
                className="relative"
              />
            ) : (
              <Image
                src="/images/homepage/slider/mobile/slide2.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "80vh" }}
                className="relative"
              />
            )}

            <p className="block absolute md:top-1/3 md:right-24 top-1/4 left-4 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {width && width > 760 ? (
              <Image
                src="/images/homepage/slider/slide3.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "90vh" }}
                className="relative"
              />
            ) : (
              <Image
                src="/images/homepage/slider/mobile/slide3.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "80vh" }}
                className="relative"
              />
            )}

            <p className="block absolute md:top-1/3 md:right-24 top-1/4 left-4 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {width && width > 760 ? (
              <Image
                src="/images/homepage/slider/slide4.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "90vh" }}
              />
            ) : (
              <Image
                src="/images/homepage/slider/mobile/slide4.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "80vh" }}
              />
            )}

            <p className="block absolute md:top-1/3 md:right-24 top-1/4 left-4  text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="about-sbg" className="text-center lg:px-16 py-16 px-0">
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("aboutSBG")}
        </h2>
        <div className="flex justify-center">
          <div id="about-content" style={{ width: "80%" }}>
            <p className="text-lg">{t("aboutSBGDesc1")}</p>
            <p className="text-lg">{t("aboutSBGDesc2")}</p>
          </div>
        </div>
      </section>
      <section style={{ overflow: "hidden" }}>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="w-full">
            <Swiper
              loop={true}
              autoplay={{
                delay: 8000,
              }}
              slidesPerView={1}
              centeredSlides={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {/* <SwiperSlide>
                <div className="flex align-center justify-center lg:flex-row flex-col lg:m-28 m-8">
                  <div className="w-full lg:w-1/2 flex items-center md:order-1 order-2 mt-12 md:mt-0">
                    <p
                      className="text-primary font-regular text-justify mb-12 lg:mb-0"
                      style={{ width: "90%" }}
                    >
                      {t("groupStrategyDesc")}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:order-2 order-1">
                    <Image
                      src="/images/homepage/about/about-1.jpg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        height: "45vh",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="flex align-center justify-center lg:flex-row flex-col lg:m-28 m-8">
                  <div className="w-full lg:w-1/2 flex  items-center md:order-1 order-2 mt-12 md:mt-0">
                    {/* <h2
                      className="text-primary font-bold text-justify mb-8"
                      style={{ width: "90%" }}
                    >
                      Our Values
                    </h2> */}
                    <p
                      className="text-primary font-regular text-justify mb-12 lg:mb-0 text-lg"
                      style={{ width: "90%" }}
                    >
                      {t("ourValuesDesc")}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:order-2 order-1">
                    <Image
                      src="/images/homepage/about/about-2.jpg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        height: "45vh",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex align-center justify-center lg:flex-row flex-col lg:m-28 m-8">
                  <div className="w-full lg:w-1/2 flex items-center md:order-1 order-2 mt-12 md:mt-0">
                    <p
                      className="text-primary font-regular text-justify mb-12 lg:mb-0 text-lg"
                      style={{ width: "90%" }}
                    >
                      {t("scopOfWorkDesc")}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 md:order-2 order-1">
                    <Image
                      src="/images/homepage/about/about-3.jpg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        height: "45vh",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* <section>
        hgfjhfhjf
        <ProjectsSlider1></ProjectsSlider1>
      </section> */}
      <section className={styles.projects_section2} id="sbg-projects">
        <Swiper
          id="project-slider"
          className={styles.projects_swiper2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay, Navigation]}
          loop={true}
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
          watchSlidesProgress={true}
        >
          <SwiperSlide className="">
            <Link href="/companies/contracting">
              <Image
                src="/images/homepage/sectors/transportation1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.slider_img}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <Image
              src="/images/homepage/sectors/mix-concrete1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <Image
              src="/images/homepage/sectors/quarries-work1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <Link href="/companies/contracting">
              {" "}
              <Image
                src="/images/homepage/sectors/contracting1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.slider_img}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <Image
              src="/images/homepage/sectors/development1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <Image
              src="/images/homepage/sectors/design1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="mt-20 mb-20" id="news">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-1/2 w-full  md:order-1 order-2 mt-12 md:mt-0">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
              // loop={true}
              effect="fade"
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              centeredSlides={true}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
              style={{ overflow: "hidden" }}
            >
              <SwiperSlide>
                <div className=" flex align-center justify-center lg:m-12 m-8">
                  <Image
                    src="/images/homepage/news/monte-view.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "45vh",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex align-center justify-center lg:m-12 m-8">
                  <Image
                    src="/images/homepage/news/dummar-heights.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "45vh",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex align-center justify-center lg:m-12 m-8">
                  <Image
                    src="/images/homepage/news/barzeh-mall.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "45vh",
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:w-1/2 w-full overflow-hidden  md:order-2 order-1 mt-12 md:mt-0 ">
            <div
              style={{ width: "100%", height: "45vh" }}
              className="lg:ms-12 ms-8 me-8"
            >
              <h2 className="text-secondary font-bold uppercase text-xl mb-8">
                {t("latestNews")}
              </h2>
              <div>
                {news.map((newsItem, index) => {
                  return (
                    <div className="mb-4">
                      <p className="text-silver">{newsItem.date}</p>
                      <h3 className="text-primary text-lg">
                        <span
                          className={
                            index == currentSlideIndex
                              ? "text-xl font-bold"
                              : ""
                          }
                        >
                          {" "}
                          {locale === "en"
                            ? newsItem.englishTitle
                            : newsItem.arabicTitle}
                        </span>
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-dark w-full lg:px-16 lg:pt-16 lg:pb-8 px-0 pt-16 pb-0"
        id="mix-concrete-projects"
        style={{ height: "60vh" }}
      >
        <h2 className="text-center font-semibold uppercase text-2xl mb-12 text-white">
          {t("otherInvestments")}
        </h2>
        <Swiper
          className={styles.projects_swiper}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
            <div className={styles.container}>
              <Image
                src="/images/homepage/investments/1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.image}
              />

              <div
                className={styles.overlay}
                // onClick={() => openProjectDetails(0)}
              >
                {/* <div className={styles.text}>{t("uptown")}</div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <Image
                src="/images/homepage/investments/2.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.image}
              />
              <div
                className={styles.overlay}
                // onClick={() => openProjectDetails(1)}
              >
                {/* <div className={styles.text}>{t("majlis-alshaab")}</div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <Image
                src="/images/homepage/investments/3.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.image}
              />

              <div
                className={styles.overlay}
                // onClick={() => openProjectDetails(2)}
              >
                {/* <div className={styles.text}>{t("jdidatArtouz")}</div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <Image
                src="/images/homepage/investments/4.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.image}
              />

              <div
                className={styles.overlay}
                // onClick={() => openProjectDetails(3)}
              >
                {/* <div className={styles.text}>{t("dummar27")}</div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <Image
                src="/images/homepage/investments/5.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.image}
              />

              <div
                className={styles.overlay}
                // onClick={() => openProjectDetails(3)}
              >
                {/* <div className={styles.text}>{t("dummar27")}</div> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section
        id="contact-us"
        className="h-40 flex flex-col justify-center align-start"
      >
        {/* <h2 className="text-primary uppercase text-3xl font-semibold">
          {t("brochure")}
        </h2>
        <p>{t("downloadBrochure")}</p>
        <ul className="mt-2">
          <li className="hover:text-secondary hover:font-bold hover:cursor-pointer">
            {t("arabic")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
          <li className="hover:text-secondary hover:font-bold hover:cursor-pointer">
            {t("english")}
            <FontAwesomeIcon icon={faDownload} className="ms-2" />
          </li>
        </ul> */}
      </section>
    </>
  );
}
Home.Layout = "Main";
// Home.LayoutColor = "default";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
