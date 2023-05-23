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

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <section>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="hover:border-b-4 hover:border-b-secondary transition duration-500"
        >
          <SwiperSlide>
            <Image
              src="/images/main-header.jpg"
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
          className={styles.projects_swiper2}
          centeredSlides={false}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          watchSlidesProgress={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("contracting")}
            </div>
            <Link href="/companies/contracting">
              <Image
                src="/images/contracting.jpg"
                layout="fill"
                objectFit="cover"
                alt="Project"
                className={styles.slider_img}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("mixConcrete")}{" "}
            </div>
            <Image
              src="/images/mix-concrete.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("transportation")}
            </div>
            <Image
              src="/images/contracting.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="uppercase bg-primary text-white h-20 text-2xl flex items-center justify-center">
              {t("quarriesWorks")}
            </div>
            <Image
              src="/images/contracting.jpg"
              layout="fill"
              objectFit="cover"
              alt="Project"
              className={styles.slider_img}
            />
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
