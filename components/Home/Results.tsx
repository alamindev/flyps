"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function TrustedUs() {
  return (
    <section className="pt-8 lg:pt-14 pb-10 sm:pb-24 lg:pb-32">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto">
        <div className="max-w-[465px] mx-auto  space-y-3 md:space-y-5">
          <h3 className="font-bold text-brand-body text-[32px] md:text-[48px] text-center">
            Results
          </h3>
          <p className="text-base md:text-lg font-medium text-center text-brand-primary">
            See the outcomes of our work
          </p>
        </div>
      </div>
      <div className="pt-10 md:pt-12 w-full">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          loop
          modules={[Autoplay, FreeMode]}
          spaceBetween={15}
          freeMode={true}
          breakpoints={{
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-1.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-2.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-3.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-4.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-1.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-2.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-3.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-4.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-1.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-2.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-3.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/result-img-4.png"
              width={350}
              height={350}
              className="w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
