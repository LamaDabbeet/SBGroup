import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useWindowDimensions from "@/hooks/use-window-dimensions";

function Header({ color }: any) {
  const { width } = useWindowDimensions();
  const sliderImages = [
    {
      mainImage: "/images/road-link/slider/slide1.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide1.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slide2.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide2.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slide3.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide3.jpg",
    },
    {
      mainImage: "/images/road-link/slider/slide4.jpg",
      mobileImage: "/images/road-link/slider/mobile/slide4.jpg",
    },
  ];
  debugger;
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
                sizes="100vw"
                style={{ width: "100%", height: "90vh" }}
                className="relative"
              />
            ) : (
              <Image
                src={item.mobileImage}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
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
