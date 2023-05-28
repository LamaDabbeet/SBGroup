import { Navigation, Autoplay } from "swiper";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
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

  const handleSlideChange = () => {
    if (swiper) {
      setCurrentSlideIndex(swiper?.activeIndex);
    }
  };

  const initialNews: INews[] = [
    {
      date: "Febraury 14,2023",
      englishTitle: "Construction begins in Monte View ... ",
      arabicTitle: "بدأت أعمال البناء في ماونتن فيو",
    },
    {
      date: "March 7,2023",
      englishTitle: "Our Participation in BUILDEX",
      arabicTitle: "مشاركتنا في معرض بيلدكس",
    },
    {
      date: "May 17,2023",
      englishTitle: "Construction begins in Artouz",
      arabicTitle: "بدأت أعمال البناء في عرطوز",
    },
  ];
  const [news, setNews] = useState(initialNews);
  return (
    <>
      <section>
        <Swiper
          modules={[Navigation]}
          className="hover:border-b-4 hover:border-b-secondary border-b-white border-b-4 transition duration-500"
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide className="parent">
            <Image
              src="/images/homepage/slider/slide1.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
              className="relative"
            />
            <p className="block absolute top-1/3 right-24 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
              className="relative"
            />
            <p className="block absolute top-1/3 right-24 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide3.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
              className="relative"
            />
            <p className="block absolute top-1/3 right-24 text-primary font-semibold text-2xl">
              {t("mainHeaderTitle")}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide4.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="about-sbg" className="text-center px-16 py-16">
        <h2 className="text-center font-semibold uppercase text-2xl mb-12">
          {t("aboutSBG")}
        </h2>
        <div className="flex justify-center">
          <div id="about-content" className="w-8/10">
            <p>{t("aboutSBGDesc1")}</p>
            <p>{t("aboutSBGDesc2")}</p>
          </div>
        </div>
      </section>
      <section className={styles.projects_section2} id="sbg-projects">
        <Swiper
          id="project-slider"
          className={styles.projects_swiper2}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          <SwiperSlide className="hover:border-b-4 hover:border-b-secondary border-b-white border-b-4 transition duration-500">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("transportation")}
            </div>
            <Link href="/companies/contracting">
              <Image
                src="/images/homepage/sectors/transportation.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.slider_img}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("mixConcrete")}
            </div>
            <Image
              src="/images/contracting/projects/al-manhal/al-manahal-1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("quarriesWorks")}
            </div>
            <Image
              src="/images/homepage/sectors/quarries-works.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("contracting")}
            </div>
            <Link href="/companies/contracting">
              {" "}
              <Image
                src="/images/contracting/projects/al-manhal/al-manahal-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.slider_img}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("development")}
            </div>
            <Image
              src="/images/homepage/sectors/development.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-pointer">
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("design")}
            </div>
            <Image
              src="/images/homepage/sectors/design.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section
        id="contact-us"
        className="h-80 px-16 py-16 flex flex-col justify-center align-start"
      >
        <h2 className="text-primary uppercase text-3xl font-semibold">
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
        </ul>
      </section>
      <section style={{ overflow: "hidden" }}>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-1/2 w-full">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
              // loop={true}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              centeredSlides={true}
              modules={[Autoplay]}
              className="mySwiper"
              style={{ overflow: "hidden" }}
            >
              <SwiperSlide>
                <div className="w-4/5 flex align-center justify-center m-28">
                  <Image
                    src="/images/contracting/slider/slide1.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "60vh",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex align-center justify-center m-28">
                  <Image
                    src="/images/contracting/slider/slide2.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "60vh",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex align-center justify-center m-28">
                  <Image
                    src="/images/contracting/slider/slide3.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "60vh",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:w-1/2 w-full">
            <div style={{ width: "100%", height: "60vh" }} className="ms-12">
              <h2 className="text-secondary font-bold uppercase text-xl mb-8">
                {t("latestNews")}
              </h2>
              <div>
                {news.map((newsItem, index) => {
                  return (
                    <div className="mb-8">
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
    </>
  );
}
Home.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
