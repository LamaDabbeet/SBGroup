import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useWindowDimensions from "@/hooks/use-window-dimensions";

function Header({ color, sliderImages }: any) {
  const { width } = useWindowDimensions();

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      className={`hover:border-b-4 hover:border-b-${color} hover:border-t-${color} border-t-white border-b-white border-b-4  border-t-4 transition duration-500`}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
    >
      {sliderImages.map((item: any) => {
        return (
          <SwiperSlide>
            {width && width > 760 ? (
              <Image
                src={item.mainImage}
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                unoptimized
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <Image
                src={item.mobileImage}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                unoptimized
                style={{ width: "100%", height: "80vh" }}
                className="relative"
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Header;
