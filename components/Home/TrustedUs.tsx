"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function TrustedUs() {
  return (
    <section className="bg-g2  pt-14 pb-12 lg:pb-24 md:pt-24 lg:pt-32 xl:pt-40 ">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto">
        <div className="max-w-[465px] mx-auto  space-y-3 md:space-y-5">
          <h3 className="font-bold text-brand-body text-[32px] md:text-[48px] text-center">
            They trusted us
          </h3>
          <p className="text-base md:text-lg font-medium text-center text-brand-primary">
            We helped clients from various industries
          </p>
        </div>
      </div>
      <div className="pt-10 md:pt-14 w-full">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          loop
          modules={[Autoplay, FreeMode]}
          spaceBetween={60}
          freeMode={true}
          breakpoints={{
            768: {
              slidesPerView: "auto",
              spaceBetween: 85,
            },
          }}
        >
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-1.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-2.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-3.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-4.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-5.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-6.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-7.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-8.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-5.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-6.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-2.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-3.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-2.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-3.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-3.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide className=" !h-14 !w-auto !flex items-center ">
            <Image
              alt="stories"
              src="/assets/images/logo-4.svg"
              width={150}
              height={40}
              className="w-auto h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="px-4">
        <div className="max-w-screen-md lg:max-w-screen-xl mx-auto -mt-8 sm:-mt-12">
          <div className="max-w-[780px] mx-auto">
            <Image
              alt="stories"
              src="/assets/images/map.svg"
              width={780}
              height={500}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
