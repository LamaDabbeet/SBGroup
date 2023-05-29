import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function Header() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      className="hover:border-b-4 hover:border-b-cyan hover:border-t-cyan border-t-white border-b-white border-b-4  border-t-4 transition duration-500"
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
          style={{ width: "100%", height: "87vh" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/contracting/slider/slide2.jpg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "87vh" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/contracting/slider/slide3.jpg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "87vh" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default Header;
