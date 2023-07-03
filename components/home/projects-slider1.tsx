import { useTranslation } from "next-i18next";
import $ from "jquery";
import { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

function ProjectsSlider1() {
  const { t } = useTranslation("common");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />
        </div>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />{" "}
        </div>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />
        </div>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />
        </div>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />
        </div>
        <div>
          <Image
            src="/images/homepage/sectors/transportation.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project"
          />
        </div>
      </Slider>
    </>
  );
}
export default ProjectsSlider1;
