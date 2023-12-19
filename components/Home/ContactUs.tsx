import Star from "@/app/lib/svg/star";
import Image from "next/image";
import Link from "next/link";
export default function ContactUs() {
  return (
    <section className="sm:bg-g2 px-4 max-sm:pb-14 sm:max-md:py-14">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-7 justify-between items-center ">
          <div className="w-[250px] max-md:max-auto shrink-0 space-y-5 sm:space-y-6">
            <h3 className="font-bold max-md:text-center text-[28px] leading-[1.4] text-brand-primary">
              Bring your project in{" "}
              <span className="bg-text-gradient text-transparent bg-clip-text">
                expert hands
              </span>
            </h3>
            <div className="lg:w-56  max-md:justify-center flex gap-1 sm:gap-2 items-center">
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
            <div className="md:pt-6 pt-1 space-y-4">
              <h4 className="text-[32px] sm:text-[28px] font-bold sm:font-semibold text-brand-body max-md:text-center">
                Contact us
              </h4>
              <ul className="grid gap-4 sm:gap-6">
                <li>
                  <Link
                    href="#"
                    className="flex gap-5  max-md:justify-center items-center text-brand-body text-[18px] font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#313236"
                        d="M16.95 18c-2.083 0-4.142-.454-6.175-1.363-2.033-.908-3.883-2.195-5.55-3.862-1.667-1.667-2.954-3.517-3.862-5.55C.453 5.192 0 3.133 0 1.05 0 .75.1.5.3.3.5.1.75 0 1.05 0H5.1a.93.93 0 01.625.237A.914.914 0 016.05.8l.65 3.5c.033.267.025.492-.025.675-.05.183-.142.342-.275.475L3.975 7.9c.333.617.73 1.213 1.187 1.787.459.575.963 1.13 1.513 1.663.517.517 1.058.996 1.625 1.438.567.441 1.167.845 1.8 1.212l2.35-2.35a1.4 1.4 0 01.588-.338 1.61 1.61 0 01.712-.062l3.45.7c.233.067.425.188.575.363A.88.88 0 0118 12.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3zM3.025 6l1.65-1.65L4.25 2H2.025c.083.683.2 1.358.35 2.025.15.667.367 1.325.65 1.975zm8.95 8.95c.65.283 1.313.508 1.988.675.675.167 1.354.275 2.037.325v-2.2l-2.35-.475-1.675 1.675z"
                      ></path>
                    </svg>
                    <span>+ 48 513 731 878</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-5  max-md:justify-center items-center text-brand-body text-[18px] font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#313236"
                        d="M10 0l9.05 5.4c.3.183.533.433.7.75.167.317.25.65.25 1V18c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0118 20H2c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 010 18V7.15c0-.35.083-.683.25-1 .167-.317.4-.567.7-.75L10 0zm0 11.65L17.8 7 10 2.35 2.2 7l7.8 4.65zM10 14L2 9.2V18h16V9.2L10 14z"
                      ></path>
                    </svg>
                    <span>business@flyps.io</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-5  max-md:justify-center items-center text-brand-body text-[18px] font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="none"
                      viewBox="0 0 17 17"
                    >
                      <path
                        fill="#313236"
                        d="M3.527 2.48c0 .978-.786 1.77-1.756 1.77S.014 3.459.014 2.48.8.709 1.771.709c.97 0 1.756.793 1.756 1.77zm.015 3.187H0v11.334h3.542V5.667zm5.654 0h-3.52v11.334h3.52v-5.95c0-3.308 4.27-3.578 4.27 0v5.95H17V9.825c0-5.582-6.32-5.379-7.804-2.631V5.667z"
                      ></path>
                    </svg>
                    <span>Flyps</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[736px] sm:shadow-5xl sm:bg-white sm:pt-12 lg:pt-24 sm:pb-12 lg:pb-28 sm:px-4 md:px-10 lg:px-20">
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="last_name"
                    className="block text-lg text-brand-body"
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter last name"
                    className="placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base px-4 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="first_name"
                    className="block text-lg text-brand-body"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter first name"
                    className="placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base px-4 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                  />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-lg text-brand-body"
                  >
                    Company e-mail*
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter e-mail"
                    className="placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base px-4 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone_number"
                    className="block text-lg text-brand-body"
                  >
                    Phone number*
                  </label>
                  <div className="relative">
                    <div className="flex gap-1.5 items-center absolute top-1/2 -translate-y-1/2 left-4">
                      <p className="text-lg text-brand-body">+48</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="6"
                        fill="none"
                        viewBox="0 0 7 6"
                      >
                        <path
                          fill="#313236"
                          d="M3.5 6L.469.75H6.53L3.5 6z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base pl-14 pr-5 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="about_us"
                    className="block text-lg text-brand-body"
                  >
                    How did you hear about us
                  </label>
                  <input
                    type="text"
                    id="about_us"
                    name="about_us"
                    placeholder="(optional)"
                    className="placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base px-4 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                  />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-lg text-brand-body"
                  >
                    How can we help?*
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={4}
                    className="resize-none placeholder:text-brand-gray-150 sm:shadow-2.5xl bg-brand-blue-50 sm:bg-white w-full text-brand-body text-base px-4 py-3 focus:outline-none focus:ring-0 border-0 !border-b border-b-brand-primary"
                    placeholder="Enter message (optional)"
                  ></textarea>
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <div className="flex gap-2">
                    <input
                      id="policy"
                      className="w-4 h-4 rounded-md"
                      name="policy"
                      type="checkbox"
                    />
                    <label
                      htmlFor="policy"
                      className="text-sm text-brand-body !leading-[1.4]"
                    >
                      I have read and accept the{" "}
                      <Link href="#" className="underline">
                        Privacy Policy
                      </Link>{" "}
                      &{" "}
                      <Link href="#" className="underline">
                        Cookie Policy
                      </Link>
                      . *
                    </label>
                  </div>
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <div className="flex gap-2 sm:justify-end max-sm:pt-2">
                    <button
                      type="button"
                      className="px-6 py-2.5 max-sm:w-full bg-brand-primary leading-[1.2] rounded-md text-white text-base font-bold hover:bg-opacity-90 transition-all"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
