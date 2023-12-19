import Star from "@/app/lib/svg/star";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" relative">
      <Image
        alt="bg"
        src="/assets/images/texture.png"
        quality={100}
        fill
        sizes="100vw"
        className="mix-blend-luminosity min-[480px]:block hidden"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <Image
        alt="bg"
        src="/assets/images/texture-mobile.png"
        quality={100}
        fill
        sizes="100vw"
        className="mix-blend-luminosity  min-[480px]:hidden block"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <div className="bg-brand-primary    px-4 py-12 sm:pt-24 sm:pb-20">
        <div className="max-w-screen-md lg:max-w-screen-xl mx-auto relative space-y-10 sm:space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-4">
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-6 sm:space-y-10">
                <Link href="#">
                  <Image
                    alt="bg"
                    src="/assets/images/footer-logo.svg"
                    width={260}
                    height={40}
                  />
                </Link>
                <p className="text-base text-white w-[190px]">
                  There is no time to be behind, lets work together!
                </p>
                <div className="sm:pt-2">
                  <div className="flex gap-1 sm:gap-2 items-center">
                    <Image
                      alt="bg"
                      src="/assets/images/clutch-white.svg"
                      width={60}
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
                    <p className="text-lg font-semibold text-white">(5.0)</p>
                  </div>
                </div>
              </div>
              <ul className="flex items-center gap-5 sm:pb-14">
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="none"
                      viewBox="0 0 23 23"
                    >
                      <path
                        fill="#fff"
                        d="M21.422.662H1.88A1.227 1.227 0 00.663 1.88v19.54a1.227 1.227 0 001.218 1.219h10.521V14.14H9.545v-3.324h2.857V8.372c0-2.838 1.73-4.386 4.276-4.386.852 0 1.704 0 2.555.128v2.958h-1.749c-1.383 0-1.648.66-1.648 1.62v2.116h3.296l-.43 3.324h-2.866v8.507h5.586a1.228 1.228 0 001.218-1.218V1.88A1.227 1.227 0 0021.422.662z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="none"
                      viewBox="0 0 23 23"
                    >
                      <path
                        fill="#fff"
                        d="M20.978.662H1.765C.823.662.069 1.395.069 2.22V20.99c0 .824.754 1.557 1.696 1.557h19.213c.942 0 1.696-.733 1.696-1.557V2.22c0-.824-.754-1.557-1.696-1.557zM6.756 19.342H3.46V8.903h3.296v10.44zm-1.6-11.904c-1.037 0-1.979-.824-1.979-1.923 0-1.099.848-1.923 1.978-1.923 1.036 0 1.978.824 1.978 1.923 0 1.1-.942 1.923-1.978 1.923zm14.221 11.813h-3.296v-5.128c0-1.19 0-2.839-1.79-2.839s-1.978 1.374-1.978 2.655v5.22H9.017V8.903h3.108v1.374h.094c.471-.824 1.601-1.74 3.203-1.74 3.39 0 4.05 2.198 4.05 5.036v5.677h-.095z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="none"
                      viewBox="0 0 23 23"
                    >
                      <path
                        fill="#fff"
                        d="M16.958 7.104a1.319 1.319 0 100-2.637 1.319 1.319 0 000 2.637zM11.092 6.008a5.643 5.643 0 100 11.285 5.643 5.643 0 000-11.285zm0 9.305a3.662 3.662 0 110-7.325 3.662 3.662 0 010 7.325z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M11.092 2.642c2.934 0 3.282.011 4.44.064a6.081 6.081 0 012.04.378 3.64 3.64 0 012.086 2.086c.242.653.37 1.343.378 2.04.053 1.159.065 1.506.065 4.44s-.011 3.282-.064 4.44a6.083 6.083 0 01-.379 2.041 3.638 3.638 0 01-2.085 2.085 6.081 6.081 0 01-2.04.379c-1.16.053-1.507.064-4.44.064-2.935 0-3.282-.011-4.44-.064a6.082 6.082 0 01-2.041-.379 3.64 3.64 0 01-2.086-2.085 6.083 6.083 0 01-.378-2.04c-.053-1.16-.064-1.507-.064-4.44 0-2.935.011-3.282.064-4.44a6.082 6.082 0 01.378-2.041 3.64 3.64 0 012.086-2.086 6.082 6.082 0 012.04-.378c1.159-.053 1.506-.064 4.44-.064zm0-1.98c-2.984 0-3.358.013-4.53.066a8.064 8.064 0 00-2.667.511A5.62 5.62 0 00.68 4.453 8.064 8.064 0 00.17 7.12C.116 8.292.103 8.666.103 11.65c0 2.985.013 3.359.066 4.53.018.912.191 1.814.51 2.668a5.619 5.619 0 003.215 3.214c.854.32 1.756.493 2.667.51 1.172.054 1.546.067 4.53.067s3.359-.013 4.53-.066a8.07 8.07 0 002.668-.511 5.618 5.618 0 003.214-3.214c.32-.854.493-1.756.51-2.668.054-1.171.067-1.545.067-4.53 0-2.984-.013-3.358-.067-4.53a8.066 8.066 0 00-.51-2.667 5.619 5.619 0 00-3.215-3.214 8.065 8.065 0 00-2.667-.51c-1.171-.054-1.546-.067-4.53-.067z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="19"
                      fill="none"
                      viewBox="0 0 30 19"
                    >
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M.5 9.428v8.696l4.834-.022c5.085-.023 5.177-.028 6.244-.29.556-.14 1.456-.591 1.909-.96a5.16 5.16 0 001.777-2.915c.11-.496.12-1.51.023-2.04-.24-1.36-1.072-2.391-2.385-2.97l-.304-.135.39-.222c.539-.318 1.152-.926 1.376-1.377.568-1.132.562-2.826-.017-3.986C13.67 1.841 12.226 1 10.202.787 9.823.75 7.994.728 5.059.728H.5v8.701zM9.617 3.87c.625.129 1.02.34 1.244.664.24.345.304.58.304 1.103 0 .825-.315 1.344-.98 1.64-.637.278-.993.306-3.641.306H4.113V3.725l2.54.028c2.035.023 2.62.045 2.964.117zm.327 6.734c.516.15.802.318 1.1.636.39.412.493.724.488 1.471-.018 1.388-.706 2.14-2.127 2.341-.218.028-1.491.056-2.838.056H4.113v-4.632l2.769.022c2.316.017 2.815.034 3.062.106zm9.315-7.98v1.058h7.798V1.564h-7.798v1.06zm-2.318 6.524c.722-2.324 2.764-3.919 5.355-4.175.7-.067.98-.067 1.692-.006 2.19.201 3.686 1.02 4.758 2.592.751 1.104 1.044 2.18 1.101 4.025l.035 1.076h-9.765v.24c0 .329.19 1.025.384 1.41.568 1.131 2.174 1.761 3.699 1.45.75-.157 1.318-.52 1.68-1.071l.2-.301h3.6l-.05.229c-.161.685-.654 1.466-1.371 2.168-1.026 1.014-2.184 1.522-3.922 1.733-1.588.19-3.388-.139-4.69-.864-1.513-.836-2.304-1.794-2.763-3.344-.442-1.477-.419-3.629.057-5.162zm8.91-.033c-.316-.636-1.072-1.165-1.886-1.338-.734-.15-1.675-.05-2.265.24-.356.172-.82.63-1.055 1.03-.155.274-.338.787-.436 1.227l-.034.156h6.02v-.156c0-.25-.16-.791-.344-1.16z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:gap-10 lg:-ml-5 pr-5">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg lg:text-[18px] !leading-[1.4] text-white">
                  What we offer?
                </h3>
                <ul className="grid gap-2.5">
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Interim CTO
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      QA Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Fundraising Consultant
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Devops Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Backend Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Frontend Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Software Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Project Manager
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Product Owner
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      AI Engineer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg lg:text-[18px] !leading-[1.4] text-white">
                  Specializations
                </h3>
                <ul className="grid gap-2.5">
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Computer Vision and robotics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Medtech & Biotech
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Large Language Models
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Deep Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Backend Engineer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Live Video Streaming
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Artificial Inteligence
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Data Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-sm ">
                      Fullstack solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:gap-16 justify-between lg:pl-8">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-lg lg:text-[18px] !leading-[1.4] text-white">
                  About
                </h3>
                <p className="text-sm text-white !leading-[1.5]">
                  Flyps sp. z o.o. with headquarters in Kielce, 25-663 Kielce,
                  Karola Olszewskiego 6, entered into the Register of
                  Entrepreneurs kept by the District Court Kielce, <br />X
                  Commercial Division of the National Court Register under the
                  number KRS 0000638297, with share capital in the amount of PLN
                  10500, having the tax identification number NIP 9591977339{" "}
                  <br />
                  <br />
                  Main office: Poznań, Bydgoska 2/8, 61-127
                </p>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h3 className="font-bold   text-[18px] text-white ">
                  Join our team
                </h3>
                <p className="text-white text-sm">
                  There are hundreds of reasons why you should join Flyps.{" "}
                  <strong>Get to know some of them.</strong>
                </p>
                <div className="pt-2">
                  <Link
                    href="#"
                    className="text-base inline-block text-brand-primary rounded-[10px] bg-white text-center py-2 w-[190px]"
                  >
                    career@flyps.io
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center">
            <p className="text-base text-white w-48">
              FLYPS © 2023 All rights reserved.
            </p>
            <Link
              href="#"
              className="hidden sm:block text-[#6483FF] text-center w-48"
            >
              Cookie settings
            </Link>
            <div className="w-48 flex justify-start sm:justify-end">
              <Link
                href="#"
                className=" flex items-center gap-2 text-white text-base"
              >
                <span>Legal information</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="8"
                  fill="none"
                  viewBox="0 0 15 8"
                >
                  <path
                    fill="#fff"
                    d="M1 3.5a.5.5 0 000 1v-1zm13.354.854a.5.5 0 000-.708L11.172.464a.5.5 0 10-.708.708L13.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM1 4.5h13v-1H1v1z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
