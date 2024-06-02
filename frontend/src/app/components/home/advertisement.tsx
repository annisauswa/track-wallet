"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AdvertisementImg from "../../../../public/advertisement2.png";

const Advertisement = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: false,
    arrows: false,
    centerPadding: "50px",
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login");
    },
  });

  return (
    <div className="min-h-full px-7 pb-7">
      <h1 className="text-[18px] font-medium mb-4">Advertisement</h1>
      <Slider className="flex" {...settings}>
        <div>
          <Image
            src={AdvertisementImg}
            alt="Advertisement 1"
            width={250}
            height={133}
            className="w-[280px]"
          />
        </div>
        <div>
          <Image
            src={AdvertisementImg}
            alt="Advertisement 2"
            width={250}
            height={133}
            className="w-[280px]"
          />
        </div>
        <div>
          <Image
            src={AdvertisementImg}
            alt="Advertisement 3"
            width={250}
            height={133}
            className="w-[280px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Advertisement;
