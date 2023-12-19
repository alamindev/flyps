import Image from "next/image";
import Link from "next/link";

export default function OurService() {
  return (
    <section className="px-4 py-12 md:py-28 bg-g3 lg:py-44">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto space-y-8 sm:space-y-10">
        <div className="flex justify-center lg:justify-between items-end">
          <div className="flex gap-1 sm:gap-5 flex-col sm:flex-row items-center sm:items-end">
            <h2 className="font-bold text-[32px] max-sm:text-center lg:text-[48px] leading-[1.3] text-white">
              Our Services
            </h2>
            <p className="text-white max-sm:text-center text-lg font-medium pb-2">
              What we offer to grow Your Business
            </p>
          </div>
          <Link
            href="#"
            className="hidden lg:flex items-center gap-2 text-white text-base"
          >
            <span>More Services</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-3"
                src="/assets/images/icon-3.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                Computer Vision & Robotics
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                We encorporate solutions that enable robots to process visual
                data.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-2"
                src="/assets/images/icon-2.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                Large Language Models
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                LLMs fine-tuned by Flyps, comprehend and produce human-like text
                for diverse tasks.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-4"
                src="/assets/images/icon-4.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                Deep & Machine Learning
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                Our Engeneers facilitate multi-layered neural networks’ learning
                to grasp and process complex data.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-1"
                src="/assets/images/icon-1.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                Medtech & Biotech
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                We have an extensive experience with healthcare and
                enviornemntal applications.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-5"
                src="/assets/images/icon-5.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                Artificial Inteligence
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                We code machines to help people with tasks like problem-solving,
                learning, and decision-making.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
          <div className="rounded-lg shadow-5xl bg-white p-6 space-y-3">
            <div className="flex gap-2 items-center">
              <Image
                alt="icon-6"
                src="/assets/images/icon-6.svg"
                width={20}
                height={17}
              />
              <h4 className="font-extrabold text-lg sm:text-[18px] text-brand-body">
                UI/UX Design & Fullstack
              </h4>
            </div>
            <div className="min-h-[63px]">
              <p className="text-sm sm:text-lg text-brand-body line-clamp-3 !leading-[1.5]">
                Flyps ensures user-friendly interfaces, and development covering
                both frontend and backend web expertise.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="">
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
        </div>
        <div className="flex lg:hidden justify-center">
          <Link
            href="#"
            className="flex items-center gap-2 text-white text-base"
          >
            <span>More Services</span>
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
    </section>
  );
}
