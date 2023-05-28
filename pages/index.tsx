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
export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Autoplay]}
          className="hover:border-b-4 hover:border-b-secondary border-b-white border-b-4 transition duration-500"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide1.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/slider/slide3.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "90vh" }}
            />
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
          watchSlidesProgress={true}
          modules={[Navigation]}
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
              src="/images/homepage/sectors/mix-concrete.jpg"
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
            <Image
              src="/images/homepage/sectors/contracting.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
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
      <section id="contact-us" className="h-80 px-16 py-16">
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
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="w-full flex align-center justify-center m-28">
              <Image
                className="w-1/2"
                src="/images/contracting/slider/slide1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "70vh" }}
              />
              <div className="w-1/2">hgjjhgjjhg</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex align-center justify-center m-28">
              <Image
                className="w-1/2"
                src="/images/contracting/slider/slide1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "70vh" }}
              />
              <div className="w-1/2">hgjjhgjjhg</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex align-center justify-center m-28">
              <Image
                className="w-1/2"
                src="/images/contracting/slider/slide1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "70vh" }}
              />
              <div className="w-1/2">hgjjhgjjhg</div>
            </div>
          </SwiperSlide>
        </Swiper>
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
