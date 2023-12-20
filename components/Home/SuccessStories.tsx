import Star from "@/app/lib/svg/star";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="px-4 pt-2 z-40 relative pb-12 sm:pb-16">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto space-y-6 sm:space-y-10">
        <div className="flex gap-1 sm:gap-7 flex-col sm:flex-row items-center sm:items-end">
          <h2 className="font-bold tracking-tight text-[32px] max-sm:text-center lg:text-[48px] leading-[1.3] text-brand-body">
            Success Stories
          </h2>
          <p className="text-brand-primary max-sm:text-center text-lg font-medium pb-2">
            Inspiring Client journeys with us
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-6">
          <div className="rounded-lg overflow-hidden shadow-4xl relative bg-white lg:-mr-3">
            <ul className="flex gap-2 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  LLM
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  Medtech
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  Robotics
                </Link>
              </li>
            </ul>
            <Image
              alt="stories"
              src="/assets/images/stories-img-1.png"
              width={570}
              height={413}
              className="h-[220px] sm:h-[410px]  w-full object-cover object-center"
            />
            <div className="px-6 py-5  bg-white flex gap-3 justify-between items-start">
              <div className="space-y-1.5">
                <h5 className="text-base font-extrabold text-brand-body/70">
                  BioCam
                </h5>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Endoscopic capsule with machine learning
                  </Link>
                </h2>
                <p className="text-base lg:line-clamp-2 text-brand-body !leading-[1.5]  ">
                  Detect diseases through entire digestion system and avoid
                  colonoscopy.
                </p>
              </div>
              <div className="sm:w-10 shrink-0 flex justify-end pt-0.5">
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
          <div className="lg:pl-12 xl:pl-[82px] flex-col-reverse flex gap-7 lg:gap-16 lg:flex-col">
            <div className="rounded-lg overflow-hidden shadow-4xl relative bg-white">
              <ul className="flex gap-2 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
                <li>
                  <Link
                    href="#"
                    className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    Medtech
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    Robotics
                  </Link>
                </li>
              </ul>
              <Image
                alt="stories"
                src="/assets/images/stories-img-2.png"
                width={570}
                height={317}
                className="h-[220px] sm:h-[315px] w-full object-cover object-center"
              />
              <div className="px-6 py-5 bg-white flex gap-2.5 justify-between items-start">
                <div className="space-y-1.5">
                  <h5 className="text-base font-extrabold text-brand-body/70">
                    Provectus Algae
                  </h5>
                  <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                    <Link href="/dashboard" className="   text-brand-primary">
                      Identify algae cells
                    </Link>
                  </h2>
                  <p className="text-base text-brand-body lg:line-clamp-2 !leading-[1.5] xl:-mr-10 ">
                    Robust algaes detection allow to produce high-value
                    compounds for use in a wide array of industries and
                    applications.
                  </p>
                </div>
                <div className="sm:w-10 shrink-0 flex justify-end pt-0.5">
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
            <div className="flex justify-between items-end  ">
              <div className="flex gap-1 sm:gap-3 items-center">
                <Image
                  alt="bg"
                  src="/assets/images/clutch.svg"
                  width={78}
                  height={20}
                  className="max-sm:w-12"
                />
                <ul className="flex gap-0.5 sm:gap-1 items-center">
                  <li>
                    <Star classes="w-4 h-4" />
                  </li>
                  <li>
                    <Star classes="w-4 h-4" />
                  </li>
                  <li>
                    <Star classes="w-4 h-4" />
                  </li>
                  <li>
                    <Star classes="w-4 h-4" />
                  </li>
                  <li>
                    <Star classes="w-4 h-4" />
                  </li>
                </ul>
                <p className="text-[22px] -ml-1 font-semibold text-black">
                  (5.0)
                </p>
              </div>
              <p className="text-brand-primary text-xs sm:text-lg !leading-[1.5] font-medium ">
                Finished projects reviews
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-14 lg:pt-6">
          <div className="rounded-lg overflow-hidden shadow-4xl relative bg-white">
            <ul className="flex gap-2 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  LLM
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  Medtech
                </Link>
              </li>
            </ul>
            <Image
              alt="stories"
              src="/assets/images/stories-img-3.png"
              width={570}
              height={317}
              className="h-[220px] sm:h-[352px] w-full object-cover object-center"
            />
            <div className="px-6 py-4 bg-white flex gap-3 justify-between items-start">
              <div className="space-y-1.5 pb-7">
                <h5 className="text-base font-extrabold text-brand-body/70">
                  WildFires
                </h5>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Platform to migrate wildfires
                  </Link>
                </h2>
                <p className="text-base text-brand-body lg:line-clamp-2 !leading-[1.5] xl:-mr-10 ">
                  Using LLMs and computer vision to help US Forest Service
                  protect forests.
                </p>
              </div>
              <div className="sm:w-10 shrink-0 flex justify-end pt-0.5">
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-7 lg:pt-4">
          <div className=" lg:pr-12 xl:pr-[82px]  flex gap-7 lg:gap-[62px]  flex-col">
            <div className="flex gap-10 items-end ">
              <div className="flex gap-1.5 items-end">
                <h3 className="text-[32px] lg:text-[48px] font-extrabold text-brand-body">
                  50+
                </h3>
                <p className="text-xs sm:text-base xl:text-lg font-medium leading-[1.6] max-lg:pb-1.5  sm:leading-[1.3] text-brand-primary">
                  Completed projects
                </p>
              </div>
              <div className="flex gap-2 items-end">
                <h3 className="text-[32px] lg:text-[48px] font-extrabold text-brand-body">
                  8
                </h3>
                <p className="text-xs sm:text-base xl:text-lg font-medium leading-[1.6] max-lg:pb-1.5  sm:leading-[1.3] text-brand-primary">
                  Years on the market
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-4xl relative bg-white">
              <ul className="flex gap-2 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
                <li>
                  <Link
                    href="#"
                    className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    LLM
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                  >
                    Robotics
                  </Link>
                </li>
              </ul>
              <Image
                alt="stories"
                src="/assets/images/stories-img-4.png"
                width={570}
                height={317}
                className="h-[220px] sm:h-[315px] w-full object-cover object-center"
              />
              <div className="px-6 py-5 bg-white flex gap-3 justify-between items-start">
                <div className="space-y-1.5">
                  <h5 className="text-base font-extrabold text-brand-body/70">
                    Take&Go
                  </h5>
                  <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                    <Link href="/dashboard" className="   text-brand-primary">
                      Fully autonomous shop
                    </Link>
                  </h2>
                  <p className="text-base text-brand-body lg:line-clamp-2 !leading-[1.5] xl:-mr-10 ">
                    Chain of shops operating 24/7, without staff, cashiers and
                    queues.
                  </p>
                </div>
                <div className="sm:w-10 shrink-0 flex justify-end pt-0.5">
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
          </div>
          <div className="-ml-[10px] mt-2  rounded-lg overflow-hidden shadow-4xl relative bg-white">
            <ul className="flex gap-2 flex-wrap items-center absolute top-4 sm:top-6 left-4 sm:left-6">
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  LLM
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-4 w-[95px] h-[27px] flex justify-center items-center py-2 rounded-[8px] bg-white text-brand-primary font-extrabold text-sm hover:bg-opacity-90 transition-all"
                >
                  Robotics
                </Link>
              </li>
            </ul>
            <Image
              alt="stories"
              src="/assets/images/stories-img-5.png"
              width={570}
              height={413}
              className="h-[220px] sm:h-[414px]  w-full object-cover object-center"
            />
            <div className="px-6 py-[19px]  bg-white flex gap-3 justify-between items-start">
              <div className="space-y-1.5">
                <h5 className="text-base font-extrabold text-brand-body/70">
                  MyFee
                </h5>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    AGV - Automated Guided Vehicles
                  </Link>
                </h2>
                <p className="text-base lg:line-clamp-2 text-brand-body !leading-[1.5]  ">
                  Robust navigation combining LIDAR and other sensors to
                  navigate through dynamically changing warehouses.
                </p>
              </div>
              <div className="sm:w-10 shrink-0 flex justify-end  -mr-1">
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
        </div>
      </div>
    </section>
  );
}
