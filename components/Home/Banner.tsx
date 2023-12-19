import Star from "@/app/lib/svg/star";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="px-4 pb-80 pt-3 md:pt-[75px] z-40 relative">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-4 sm:space-y-2 lg:pr-8">
            <div className="flex gap-7 sm:gap-14 max-md:justify-center items-center">
              <p className="font-medium text-sm ">High-Tech Software House</p>
              <div className="flex gap-1 sm:gap-2 items-center">
                <Image
                  alt="bg"
                  src="/assets/images/clutch.svg"
                  width={42}
                  height={15}
                  className="max-sm:w-8"
                />
                <ul className="flex gap-0.5 items-center">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p className="text-sm font-semibold text-black">(5.0)</p>
              </div>
            </div>
            <h1 className="leading-[1.3] font-extrabold text-brand-primary max-md:text-center max-md:text-[32px] md:max-xl:text-[40px]">
              We make successful high-tech projects
            </h1>

            <div className="pt-3 lg:hidden">
              <div className="rounded-lg overflow-hidden">
                <Image
                  alt="bg"
                  src="/assets/images/banner-img.png"
                  quality={100}
                  width={570}
                  height={290}
                  className="w-full max-sm:h-[185px]"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="mt-px space-x-px flex">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-px w-full">
                    <div className="flex gap-2 flex-col py-2.5 bg-white px-2 items-center justify-center">
                      <h3 className="text-xs sm:text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                        Medtech & Biotech
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-col py-2.5 bg-white px-2 items-center justify-center">
                      <h3 className="text-xs sm:text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                        Large Language Models & ML
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-col py-2.5 bg-white px-2 items-center justify-center">
                      <h3 className="text-xs sm:text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                        Computer Vision & Robotics
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-col py-2.5 bg-white px-2 items-center justify-center">
                      <h3 className="text-xs sm:text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                        Fullstack Solutions
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-col py-2.5 bg-white px-2 items-center justify-center">
                      <h3 className="text-xs sm:text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                        Artificial Intelligence
                      </h3>
                    </div>
                    <Link
                      href="/dashboard"
                      className="flex justify-center items-center  gap-2 bg-white    px-3 shrink-0"
                    >
                      <p className="text-center !leading-[1.2] bg-text-gradient text-transparent bg-clip-text font-bold text-xs sm:text-sm">
                        and more
                      </p>
                      <Image
                        alt="bg"
                        src="/assets/images/right-arrow.svg"
                        width={15}
                        height={17}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-1 sm:pt-5 max-sm:w-full inline-flex max-sm:items-center flex-col gap-6 sm:gap-8 lg:gap-10">
              <h3 className="text-transparent max-sm:text-center bg-text-gradient bg-clip-text inline-block">
                #expert consulting
              </h3>
              <Link
                href="/dashboard"
                className="max-[440px]:w-full w-[200px] inline-block py-2 text-center text-white font-bold transition-all duration-200 hover:bg-opacity-90 rounded-md bg-brand-primary text-base"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="lg:-ml-4 lg:block hidden">
            <div className="rounded-lg overflow-hidden">
              <Image
                alt="bg"
                src="/assets/images/banner-img.png"
                quality={100}
                width={570}
                height={290}
                className="w-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="mt-px space-x-px flex">
                <div className="grid grid-cols-4 gap-px">
                  <div className="flex gap-2 flex-col py-2.5 bg-white px-4 items-center justify-center">
                    <Image
                      alt="icon-1"
                      src="/assets/images/icon-1.svg"
                      width={15}
                      height={17}
                    />
                    <h3 className="text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                      Medtech & Biotech
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-col py-2.5 bg-white px-4 items-center justify-center">
                    <Image
                      alt="icon-2"
                      src="/assets/images/icon-2.svg"
                      width={15}
                      height={17}
                    />
                    <h3 className="text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                      Medtech & Biotech
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-col py-2.5 bg-white px-4 items-center justify-center">
                    <Image
                      alt="icon-3"
                      src="/assets/images/icon-3.svg"
                      width={15}
                      height={17}
                    />
                    <h3 className="text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                      Medtech & Biotech
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-col py-2.5 bg-white px-4 items-center justify-center">
                    <Image
                      alt="icon-4"
                      src="/assets/images/icon-4.svg"
                      width={15}
                      height={17}
                    />
                    <h3 className="text-sm !leading-[1.2] text-center font-bold text-brand-primary">
                      Medtech & Biotech
                    </h3>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="flex justify-center items-center flex-col gap-2 bg-white w-[70px]  px-3 shrink-0"
                >
                  <Image
                    alt="bg"
                    src="/assets/images/right-arrow.svg"
                    width={15}
                    height={17}
                  />
                  <p className="text-center !leading-[1.2] bg-text-gradient text-transparent bg-clip-text font-bold text-sm">
                    and more
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
