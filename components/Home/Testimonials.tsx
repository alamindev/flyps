import Star from "@/app/lib/svg/star";
import Image from "next/image";
import Link from "next/link";
export default function Testimonials() {
  return (
    <section className="px-4 py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto space-y-8 md:space-y-12 lg:space-y-24">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:justify-between items-center">
          <div className="lg:w-56  flex gap-1 sm:gap-2 items-center pt-4">
            <Image
              alt="bg"
              src="/assets/images/clutch.svg"
              width={52}
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
          <div className="max-w-[465px] mx-auto space-y-5">
            <h3 className="font-bold text-brand-body text-[32px] md:text-[48px] text-center">
              Testimonials
            </h3>
            <p className="text-base md:text-lg font-medium text-center text-brand-primary">
              Satisfied Clients Are Our Greatest Reward
            </p>
          </div>
          <div className="lg:w-56 hidden lg:flex justify-end pt-4">
            <Link
              href="#"
              className="flex gap-3 items-center text-base font-medium text-brand-body"
            >
              <span>More Testimonials </span>
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
        <div className="max-w-[760px] mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-[38px]">
              <div className="hidden sm:block w-[97px] shrink-0 space-y-3">
                <div className="space-y-0.5 pt-1">
                  <p className="text-base font-medium text-black text-center">
                    5.0
                  </p>
                  <ul className="flex gap-0.5 items-center justify-center">
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
                </div>
                <div className="border-t border-brand-gray-50">
                  <ul className="divide-y divide-brand-gray-50">
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Quality</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Schedule</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Cost</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">
                        Willing to Refer
                      </p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-0.5 bg-g4 hidden lg:block"></div>
              <div className="space-y-6 sm:space-y-2 w-full pt-5">
                <p className="text-base lg:text-[18px] pr-14 !leading-[1.4] text-brand-body">
                  &quot;We are happy with the quality with which they
                  coordinated the project and maintained a flawless flow of
                  information.&ldquo;
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-end sm:pt-1">
                      <h3 className="font-bold text-lg leading-[1.5] lg:text-[18px] text-brand-body">
                        Nusqe Spanton
                      </h3>
                      <p className="text-base font-medium text-brand-primary leading-[1.6]">
                        CEO Provectus Algae
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="#"
                      className=" px-4 sm:px-7 py-0.5 w-[92px] h-[26px] flex justify-center items-center text-brand-primary rounded-full hover:text-white hover:bg-brand-primary transition-all duration-200 border border-brand-primary text-xs font-medium "
                    >
                      BioTech
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[38px]">
              <div className="hidden sm:block w-[97px] shrink-0 space-y-3">
                <div className="space-y-0.5 pt-1">
                  <p className="text-base font-medium text-black text-center">
                    5.0
                  </p>
                  <ul className="flex gap-0.5 items-center justify-center">
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
                </div>
                <div className="border-t border-brand-gray-50">
                  <ul className="divide-y divide-brand-gray-50">
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Quality</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Schedule</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Cost</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">
                        Willing to Refer
                      </p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-0.5 bg-g4 hidden lg:block"></div>
              <div className="space-y-6 sm:space-y-2 w-full pt-5">
                <p className="text-base lg:text-[18px] pr-14 !leading-[1.4] text-brand-body">
                  &quot;We&apos;re impressed with their ability to combine
                  technological solutions with our business.&ldquo;
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-start pt-3 pl-1">
                    <Image
                      alt="bg"
                      src="/assets/images/avatar.png"
                      width={45}
                      height={48}
                      className="w-[46px] object-cover shrink-0 h-[48px] rounded-xs"
                    />
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-end sm:pt-1">
                      <h3 className="font-bold text-lg leading-[1.5] lg:text-[18px] text-brand-body">
                        Nusqe Spanton
                      </h3>
                      <p className="text-base font-medium text-brand-primary leading-[1.6]">
                        CEO Provectus Algae
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="#"
                      className=" px-4 sm:px-7 py-0.5 w-[92px] h-[26px] flex justify-center items-center text-brand-primary rounded-full hover:text-white hover:bg-brand-primary transition-all duration-200 border border-brand-primary text-xs font-medium "
                    >
                      Robotics
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[38px]">
              <div className="hidden sm:block w-[97px] shrink-0 space-y-3">
                <div className="space-y-0.5 pt-1">
                  <p className="text-base font-medium text-black text-center">
                    5.0
                  </p>
                  <ul className="flex gap-0.5 items-center justify-center">
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
                </div>
                <div className="border-t border-brand-gray-50">
                  <ul className="divide-y divide-brand-gray-50">
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Quality</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Schedule</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Cost</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">
                        Willing to Refer
                      </p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-0.5 bg-g4 hidden lg:block"></div>
              <div className="space-y-6 sm:space-y-2 w-full pt-5">
                <p className="text-base lg:text-[18px] pr-14 !leading-[1.4] text-brand-body">
                  &quot;It&apos;s worth collaborating with Flyps if you think
                  your project deserves the involvement of real experts.&ldquo;
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-start pt-3 pl-1">
                    <Image
                      alt="bg"
                      src="/assets/images/avatar.png"
                      width={45}
                      height={48}
                      className="w-[46px] object-cover shrink-0 h-[48px] rounded-xs"
                    />
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-end sm:pt-1">
                      <h3 className="font-bold text-lg leading-[1.5] lg:text-[18px] text-brand-body">
                        Igor Marczak
                      </h3>
                      <p className="text-base font-medium text-brand-primary leading-[1.6]">
                        Founder, SeniorApp
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="#"
                      className=" px-4 sm:px-7 py-0.5 w-[92px] h-[26px] flex justify-center items-center text-brand-primary rounded-full hover:text-white hover:bg-brand-primary transition-all duration-200 border border-brand-primary text-xs font-medium "
                    >
                      Software
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[38px]">
              <div className="hidden sm:block w-[97px] shrink-0 space-y-3">
                <div className="space-y-0.5 pt-1">
                  <p className="text-base font-medium text-black text-center">
                    5.0
                  </p>
                  <ul className="flex gap-0.5 items-center justify-center">
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
                </div>
                <div className="border-t border-brand-gray-50">
                  <ul className="divide-y divide-brand-gray-50">
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Quality</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Schedule</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">Cost</p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                    <li className="flex justify-between items-center py-0.5">
                      <p className="text-xs text-brand-body">
                        Willing to Refer
                      </p>
                      <p className="text-xs text-brand-body">5.0</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-0.5 bg-g4 hidden lg:block"></div>
              <div className="space-y-6 sm:space-y-2 w-full pt-5">
                <p className="text-base lg:text-[18px] pr-14 !leading-[1.4] text-brand-body">
                  &quot;It is safe to say that the end-to-end solution presented
                  to us exceeded our expectations.&ldquo;
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-end sm:pt-1">
                      <h3 className="font-bold text-lg leading-[1.5] lg:text-[18px] text-brand-body">
                        Sebastian Stroik
                      </h3>
                      <p className="text-base font-medium text-brand-primary leading-[1.6]">
                        Sales Manager, Foximo Sp. z o.o.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="#"
                      className=" px-2 sm:px-3 py-0.5 w-[92px] h-[26px] flex justify-center items-center text-brand-primary rounded-full hover:text-white hover:bg-brand-primary transition-all duration-200 border border-brand-primary text-xs font-medium "
                    >
                      IT Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center lg:hidden">
          <Link
            href="#"
            className="flex gap-3 items-center text-base font-medium text-brand-body"
          >
            <span>More Testimonials </span>
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
