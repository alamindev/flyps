import Link from "next/link";

export default function TopTalent() {
  return (
    <section className="py-8 lg:py-5 max-sm:bg-brand-blue-50 space-y-7 sm:space-y-10">
      <div className="px-4">
        <div className="max-w-screen-md lg:max-w-screen-xl mx-auto ">
          <div className="flex justify-center lg:justify-between items-end">
            <div className="flex gap-1 sm:gap-3 xl:gap-6 flex-col sm:flex-row items-center sm:items-end">
              <h2 className="font-bold tracking-tight max-sm:px-6 text-[32px] max-sm:text-center lg:text-[48px] leading-[1.3] text-brand-body">
                Always hiring top-talent
              </h2>
              <p className="text-brand-primary max-sm:text-center text-lg font-medium pb-1.5">
                Flyps welcomes experts
              </p>
            </div>
            <div className="pb-1.5">
              <Link
                href="#"
                className="hidden shrink-0 lg:flex items-center gap-2.5 text-brand-body text-base"
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
        </div>
      </div>
      <div className="px-4 bg-brand-blue-50 sm:pt-12 sm:pb-14">
        <div className="max-w-screen-md lg:max-w-screen-xl mx-auto ">
          <div className="max-lg:mx-auto max-lg:max-w-[500px] grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-7 lg:grid-cols-4 lg:divide-x divide-brand-primary">
            <div className="space-y-3 lg:px-3 xl:px-9 first:pl-0 pt-2 last:pr-0">
              <h3 className="max-sm:text-center text-lg lg:text-[18px] !leading-[1.5] fong-bold text-brand-primary">
                Content hacker <br />
                (MID)
              </h3>
              <p className="max-sm:text-center text-base text-brand-primary">
                Poznań / 100% remote
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <Link href="#" className="inline-block">
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
            <div className="space-y-3 lg:px-3 xl:px-9  lg:-ml-5 first:pl-0 pt-2 last:pr-0">
              <h3 className="max-sm:text-center text-lg lg:text-[18px] !leading-[1.5] fong-bold text-brand-primary">
                Python Developer
                <br />
                (Senior)
              </h3>
              <p className="max-sm:text-center text-base text-brand-primary">
                Poznań / 100% remote
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <Link href="#" className="inline-block">
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
            <div className="space-y-3 lg:px-3 xl:px-9  lg:-ml-3 first:pl-0 pt-2 last:pr-0">
              <h3 className="max-sm:text-center text-lg lg:text-[18px] !leading-[1.5] fong-bold text-brand-primary">
                AI Engineer
                <br />
                (MID+/Senior)
              </h3>
              <p className="max-sm:text-center text-base text-brand-primary">
                Poznań / 100% remote
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <Link href="#" className="inline-block">
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
            <div className="space-y-4 lg:px-3 xl:px-9  lg:ml-[14px] first:pl-0 pt-1.5 last:pr-0">
              <div className="max-sm:max-w-[250px] mx-auto space-y-0">
                <h3 className="text-[28px] max-sm:text-center font-bold text-brand-primary !leading-[1.2]">
                  Always open for
                </h3>
                <h3 className="text-[28px] max-sm:text-center w-[250px] font-bold bg-text-gradient bg-clip-text text-transparent">
                  talented people
                </h3>
              </div>
              <div className="pb-3 max-sm:flex max-sm:justify-center">
                <Link
                  href="#"
                  className="inline-block px-7 py-2.5 text-brand-primary text-base font-bold shadow-3xl rounded-md bg-white"
                >
                  career@flyps.io
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 flex lg:hidden justify-center items-center">
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
      </div>
    </section>
  );
}
