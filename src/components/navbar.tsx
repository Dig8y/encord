"use client";


import { ChevronUpIcon } from "@radix-ui/react-icons";
import encordBlack from "../../public/encord-black.svg"
import encordWhite from "../../public/encord-white.svg"
import Image
  from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const [navStyle, setNavStyle] = useState(0)
  document.addEventListener("scroll", () => {
    const windowScrollHeight = window.scrollY
    if (windowScrollHeight < 10) {
      // nothing
      setNavStyle(0)
    } else if (windowScrollHeight > 10 && windowScrollHeight < 25) {
      // border shadow
      setNavStyle(1)
    } else if (windowScrollHeight > 25) {
      // white bg & shadow
      setNavStyle(2)
    }
  })

  console.log(navStyle)


  return (
    <>
      <header className={cn(`backdrop-blur-[10px] lg:backdrop-blur-[0px] fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-transparent`, navStyle === 1 ? "shadow-lg" : navStyle === 2 ? "shadow-lg !bg-[#FAFAFA]" : "")}>
        <div className="z-10 px-5 mx-auto bg-transparent max-w-7xl sm:px-6 xl:px-16">
          <div className="flex items-center justify-between py-4 max-h-[72px] lg:py-[15px]">
            <div className="flex-shrink-0 mr-4 h-12">
              {
                navStyle === 2 ? <Image src={encordBlack} alt={"encores black logo"} /> : <Image src={encordWhite} alt={"encores white logo"} />
              }
            </div>
            <nav className="hidden lg:flex md:flex-grow">
              <ul className={cn("flex items-center justify-end flex-grow flex-shrink-0 gap-y-12 gap-x-8 flex-nowrap text-black", navStyle === 2 ? "text-black" : "text-white")}>
                <li className="relative">
                  <button className="text-gray-2500 group rounded-md inline-flex gap-2 items-center text-base font-medium focus:outline-none">
                    <span>Platform</span>
                    <ChevronUpIcon className="" width={24} height={24} />
                  </button>
                  <div className={"sr-only"} />
                </li>
                <li>
                  <Link href={"#"} className="inline-flex items-center text-sm lgxl_mid:text-base font-medium  focus:outline-none">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="inline-flex items-center text-sm lgxl_mid:text-base font-medium  focus:outline-none">
                    Pricing
                  </Link>
                </li>
                <li className="relative">
                  <button className="text-gray-2500 group rounded-md inline-flex gap-2 items-center text-base font-medium focus:outline-none">
                    <span>Resouces</span>
                    <ChevronUpIcon width={24} height={24} />
                  </button>
                  <div className={"sr-only"} />
                </li>
                <li className="relative">
                  <button className="text-gray-2500 group rounded-md inline-flex gap-2 items-center text-base font-medium focus:outline-none">
                    <span>Company</span>
                    <ChevronUpIcon width={24} height={24} />
                  </button>
                  <div className={"sr-only"} />
                </li>
              </ul>
              <ul className="flex flex-wrap items-center justify-end flex-grow">
                <li>
                  <Link href={"#"} className={cn("mr-3 text-base font-manrope text-[#1E0842] font-semibold lg:px-4 lg:py-2 rounded-full border border-gray-2200 hover:border-gray-2500 focus:border-gray-2500 max-w-max group flex items-center justify-center py-2 px-4 font-semibold ease-in-out duration-500 rounded-full font-manrope tracking-tight_1", navStyle === 2 ? "" : "bg-white")}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-sm sm:text-base font-manrope outline_btn font-semibold w-full sm:w-auto lg:py-2 lg:px-4 rounded-full itk-btn_dark hover:[background:#5658dd] !duration-0 text-white text-purple-1500 max-w-max group flex items-center justify-center py-2 px-4 font-semibold ease-in-out duration-500 rounded-full font-manrope tracking-tight_1 bg-gradient-to-l from-[#5e44ff] to-[#c5bbff]">
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <div></div> */}
          </div>
        </div>
      </header>
    </>
  )
}