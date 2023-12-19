"use client";

import Menu from "@/app/lib/svg/menu";
import Times from "@/app/lib/svg/times";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  let [is_menu, setIsMenu] = useState(false);

  const OpenMenu = () => {
    setIsMenu(true);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <header className="sm:shadow-3xl py-4 bg-white px-4 relative z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="w-[245px] shrink-0">
            <Image
              src="/assets/images/logo.svg"
              width={108}
              height={34}
              alt="logo area"
            />
          </Link>
          <div className="w-full">
            <nav
              className={clsx("group w-full", {
                active: is_menu,
              })}
              id="navbar"
            >
              <div className="pt-16 xl:pt-0 px-6 xl:px-0 z-50 transition-all duration-300 fixed xl:static group-[.active]:right-0 -right-[999px] top-0 w-[320px] xl:w-auto bg-white xl:bg-transparent shadow-md xl:shadow-none bottom-0">
                <button
                  onClick={closeMenu}
                  type="button"
                  className="close absolute xl:hidden -left-6 top-0 w-8 h-8 bg-white"
                >
                  <Times />
                </button>
                <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 justify-between w-full">
                  <ul className="flex flex-col xl:flex-row gap-6 xl:gap-11 xl:items-center">
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        What we offer?
                      </Link>
                    </li>
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        Portfolio
                      </Link>
                    </li>
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        Clients
                      </Link>
                    </li>
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        Blog
                      </Link>
                    </li>
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        Careers
                      </Link>
                    </li>
                    <li className="group/link">
                      <Link href="#" className="font-semibold text-base ">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href="/dashboard"
                    className="w-[166px] flex justify-center items-center h-[38px] !leading-none text-center px-4 py-2 rounded-md bg-brand-primary font-bold text-base text-white"
                  >
                    Book consultation
                  </Link>
                </div>
              </div>
              <div
                onClick={closeMenu}
                className="  group-[.active]:bg-black/40 z-30 fixed inset-0 invisible opacity-0 xl:hidden group-[.active]:opacity-100 group-[.active]:visible"
              >
                <span className="sr-only">overlay</span>
              </div>
            </nav>
            <div className="flex justify-end xl:hidden">
              <button type="button" onClick={OpenMenu}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
