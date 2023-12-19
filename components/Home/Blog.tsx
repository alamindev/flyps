import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="bg-white px-4 pb-4 sm:pb-12 pt-12 sm:pt-20 lg:pt-32   space-y-7 sm:space-y-10">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto space-y-8 lg:space-y-12">
        <div className="flex justify-center lg:justify-between items-end">
          <div className="flex gap-1 sm:gap-3 xl:gap-5 flex-col sm:flex-row items-center sm:items-end">
            <h2 className="font-bold max-sm:px-6 text-[32px] max-sm:text-center lg:text-[48px] leading-[1.3] text-brand-body">
              Blog
            </h2>
            <p className="text-brand-primary max-sm:text-center text-lg font-medium pb-0.5">
              See our tech and business insights
            </p>
          </div>
          <Link
            href="#"
            className="hidden shrink-0 lg:flex items-center gap-2 text-brand-body text-base"
          >
            <span>More blog posts</span>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-8">
          <div className="md:col-span-5 overflow-hidden rounded-lg shadow-5xl relative bg-white">
            <Image
              alt="stories"
              src="/assets/images/blog-img-1.png"
              width={450}
              height={245}
              className="h-[245px] w-full object-cover object-center"
            />
            <div className="px-5 pt-4 pb-7  bg-white flex gap-2 justify-between items-start">
              <div className=" space-y-1 max-w-[350px]">
                <h4 className="text-base leading-[1.3] font-semibold uppercase text-brand-gray-100">
                  llm, robotics, medtech
                </h4>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Case study: Enviromental Protection Industry
                  </Link>
                </h2>
              </div>
              <div className="sm:w-5 shrink-0 flex justify-end">
                <Link href="#">
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
          <div className="md:col-span-7 overflow-hidden rounded-lg shadow-5xl relative bg-white">
            <Image
              alt="stories"
              src="/assets/images/blog-img-2.png"
              width={642}
              height={245}
              className="h-[245px] w-full object-cover object-center"
            />
            <div className="px-5 pt-4 pb-7  bg-white flex gap-2 justify-between items-start">
              <div className=" space-y-1 max-w-[350px]">
                <h4 className="text-base leading-[1.3] font-semibold uppercase text-brand-gray-100">
                  LLM, robotics
                </h4>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Using the LlamaIndex (former GPTIndex) with ChatGPT
                  </Link>
                </h2>
              </div>
              <div className="sm:w-5 shrink-0 flex justify-end">
                <Link href="#">
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
          <div className="md:col-span-6 lg:col-span-4 overflow-hidden rounded-lg shadow-5xl relative bg-white">
            <Image
              alt="stories"
              src="/assets/images/blog-img-3.png"
              width={380}
              height={245}
              className="h-[245px] w-full object-cover object-center"
            />
            <div className="px-5 pt-4 pb-7  bg-white flex gap-2 justify-between items-start">
              <div className=" space-y-1 max-w-[350px]">
                <h4 className="text-base leading-[1.3] font-semibold uppercase text-brand-gray-100">
                  MEDTECH
                </h4>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    MedTech meets VR
                  </Link>
                </h2>
              </div>
              <div className="sm:w-5 shrink-0 flex justify-end">
                <Link href="#">
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
          <div className="md:col-span-6 lg:col-span-4 overflow-hidden rounded-lg shadow-5xl relative bg-white">
            <Image
              alt="stories"
              src="/assets/images/blog-img-3.png"
              width={380}
              height={245}
              className="h-[245px] w-full object-cover object-center"
            />
            <div className="px-5 pt-4 pb-7  bg-white flex gap-2 justify-between items-start">
              <div className=" space-y-1 max-w-[350px]">
                <h4 className="text-base leading-[1.3] font-semibold uppercase text-brand-gray-100">
                  robotics
                </h4>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Exchanging Experience in Computer Vison
                  </Link>
                </h2>
              </div>
              <div className="sm:w-5 shrink-0 flex justify-end">
                <Link href="#">
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
          <div className="md:col-span-6 lg:col-span-4 overflow-hidden rounded-lg shadow-5xl relative bg-white">
            <Image
              alt="stories"
              src="/assets/images/blog-img-5.png"
              width={380}
              height={245}
              className="h-[245px] w-full object-cover object-center"
            />
            <div className="px-5 pt-4 pb-7  bg-white flex gap-2 justify-between items-start">
              <div className=" space-y-1 max-w-[350px]">
                <h4 className="text-base leading-[1.3] font-semibold uppercase text-brand-gray-100">
                  tour
                </h4>
                <h2 className="text-lg lg:text-[18px] !leading-[1.5] font-extrabold">
                  <Link href="/dashboard" className="   text-brand-primary">
                    Knowledge transfer at Berlin SIBB Event
                  </Link>
                </h2>
              </div>
              <div className="sm:w-5 shrink-0 flex justify-end">
                <Link href="#">
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
        </div>
        <div className="  flex lg:hidden justify-center items-center">
          <Link
            href="#"
            className=" flex items-center gap-2 text-brand-body text-base"
          >
            <span>See all opened positions</span>
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
