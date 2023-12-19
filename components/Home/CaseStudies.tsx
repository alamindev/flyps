"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  return (
    <section className="max-sm:pr-0 px-4 z-40 relative pb-12 md:pb-20 lg:pb-28">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto space-y-6 sm:space-y-10">
        <Swiper
          spaceBetween={15}
          slidesPerView={1.2}
          breakpoints={{
            680: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="overflow-hidden rounded-lg relative">
              <ul className="flex gap-3 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
                <li>
                  <Link
                    href="#"
                    className="px-4 sm:px-7 py-2 rounded-md bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    LLM
                  </Link>
                </li>
              </ul>
              <Image
                alt="stories"
                src="/assets/images/case-studies-1.png"
                width={350}
                height={160}
                className="h-[160px] w-full object-cover object-center"
              />
              <div className="px-6 py-6  bg-white flex gap-2 justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                    <Link href="/dashboard" className="   text-brand-primary">
                      Cerebral palsy detection
                    </Link>
                  </h2>
                </div>
                <div className="sm:w-6 shrink-0 flex justify-end">
                  <Link
                    href="#"
                    className="rounded-sm bg-brand-primary hover:bg-opacity-90 transition-all w-5 h-5 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        fill="#fff"
                        d="M1 2.6a.4.4 0 000 .8v-.8zm8.283.683a.4.4 0 000-.566L6.737.172a.4.4 0 00-.565.565L8.434 3 6.172 5.263a.4.4 0 00.565.565l2.546-2.545zM1 3.4h8v-.8H1v.8z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden rounded-lg relative">
              <ul className="flex gap-3 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
                <li>
                  <Link
                    href="#"
                    className="px-4 sm:px-7 py-2 rounded-md bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    LLM
                  </Link>
                </li>
              </ul>
              <Image
                alt="stories"
                src="/assets/images/case-studies-2.png"
                width={350}
                height={160}
                className="h-[160px] w-full object-cover object-center"
              />
              <div className="px-6 py-6  bg-white flex gap-2 justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                    <Link href="/dashboard" className="   text-brand-primary">
                      Vidvi - Live shopping
                    </Link>
                  </h2>
                </div>
                <div className="sm:w-6 shrink-0 flex justify-end">
                  <Link
                    href="#"
                    className="rounded-sm bg-brand-primary hover:bg-opacity-90 transition-all w-5 h-5 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        fill="#fff"
                        d="M1 2.6a.4.4 0 000 .8v-.8zm8.283.683a.4.4 0 000-.566L6.737.172a.4.4 0 00-.565.565L8.434 3 6.172 5.263a.4.4 0 00.565.565l2.546-2.545zM1 3.4h8v-.8H1v.8z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden rounded-lg relative">
              <ul className="flex gap-3 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
                <li>
                  <Link
                    href="#"
                    className="px-4 sm:px-7 py-2 rounded-md bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    Medtech
                  </Link>
                </li>
              </ul>
              <Image
                alt="stories"
                src="/assets/images/case-studies-3.png"
                width={350}
                height={160}
                className="h-[160px] w-full object-cover object-center"
              />
              <div className="px-6 py-6  bg-white flex gap-2 justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                    <Link href="/dashboard" className="   text-brand-primary">
                      MyAlyce - Wrist tracker
                    </Link>
                  </h2>
                </div>
                <div className="sm:w-6 shrink-0 flex justify-end">
                  <Link
                    href="#"
                    className="rounded-sm bg-brand-primary hover:bg-opacity-90 transition-all w-5 h-5 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        fill="#fff"
                        d="M1 2.6a.4.4 0 000 .8v-.8zm8.283.683a.4.4 0 000-.566L6.737.172a.4.4 0 00-.565.565L8.434 3 6.172 5.263a.4.4 0 00.565.565l2.546-2.545zM1 3.4h8v-.8H1v.8z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-start sm:justify-end">
          <Link
            href="#"
            className="flex gap-3 items-center text-base font-medium text-brand-body"
          >
            <span>More awesome Case Studies </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="8"
              fill="none"
              viewBox="0 0 15 8"
            >
              <path
                fill="#264EEE"
                d="M1 3.5a.5.5 0 000 1v-1zm13.354.854a.5.5 0 000-.708L11.172.464a.5.5 0 10-.708.708L13.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM1 4.5h13v-1H1v1z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
