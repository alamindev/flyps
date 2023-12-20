import Banner from "@/components/Home/Banner";
import Blog from "@/components/Home/Blog";
import CaseStudies from "@/components/Home/CaseStudies";
import ContactUs from "@/components/Home/ContactUs";
import DemandingProject from "@/components/Home/DemandingProject";
import OurService from "@/components/Home/OurService";
import Results from "@/components/Home/Results";
import SuccessStories from "@/components/Home/SuccessStories";
import Testimonials from "@/components/Home/Testimonials";
import TopTalent from "@/components/Home/TopTalent";
import TrustedUs from "@/components/Home/TrustedUs";

import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="relative bg-white">
        <div className="absolute bg-g1 inset-0 top-96 z-30"></div>
        <div className="relative">
          <Image
            alt="bg"
            src="/assets/images/bg-1.png"
            quality={100}
            fill
            sizes="100vw"
            className="lg:block hidden opacity-60 -mt-3"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <Banner />
        </div>
        <div className="-mt-72 sm:-mt-64">
          <SuccessStories />
          <CaseStudies />
        </div>
      </div>
      <DemandingProject />
      <TrustedUs />
      <OurService />
      <Testimonials />
      <TopTalent />
      <Blog />
      <Results />
      <ContactUs />
    </>
  );
}
