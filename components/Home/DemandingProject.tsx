import Link from "next/link";
export default function DemandingProject() {
  return (
    <section className="bg-white py-6 lg:py-[35px] px-4">
      <div className="max-w-screen-md lg:max-w-screen-xl mx-auto ">
        <div className="flex max-lg:flex-col max-xl:flex-wrap gap-6 lg:gap-6 justify-between items-center">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0.5 items-center w-full">
            <h3 className="text-[28px] tracking-wider max-lg:text-center !leading-[1.3] font-extrabold text-brand-primary">
              Demanding project?
            </h3>
            <h6 className="text-base max-md:w-40 tracking-[1px] lg:text-[28px] max-lg:text-center !leading-[1.3] text-brand-primary">
              We can help you overcome the challenges
            </h6>
          </div>
          <Link
            href="#"
            className="shrink-0 w-full sm:w-[159px] inline-block py-2 text-white bg-brand-primary rounded-md text-center font-bold text-base hover:bg-opacity-90 transition-all"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
