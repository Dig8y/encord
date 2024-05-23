"use client"

import { cn } from "@/lib/utils"
import { act, useEffect, useRef, useState } from "react"
import annotateIcon from "../../public/homeHeroAnnotate.svg"
import activeIcon from "../../public/homeIconActive.svg"
import indexIcon from "../../public/homeIndexIcon.svg"
import { StaticImageData, } from "next/image"
import Image from "next/image"
import AOS from 'aos';
import VideoComponent from "./visualDataManagmentVideo"
import MouseFollowComponent from "./mouseFollowComponent"

// You can also pass an optional settings object
// below listed default settings

const visualDataManagmentData: {
  icon: StaticImageData,
  title: string,
  subTitle: string,
  description: string,
  video: string

}[] = [{
  icon: annotateIcon,
  title: "Annotate",
  subTitle: "Annotation & workflow tools",
  description: "Build and scale labeling workflows to create Ground Truth 10x faster.",
  video: "https://encord.cdn.prismic.io/encord/ce0108c7-a4b0-401c-913c-6587733d79e5_Annotation+Hero+3-0_2_1.webm"
}, {
  icon: activeIcon,
  title: "Active",
  subTitle: "Model testing & evaluation",
  description: "Monitor, troubleshoot, and evaluate the data and labels impacting model performance.",
  video: "https://encord.cdn.prismic.io/encord/4cd34b3d-0f95-4bc6-a7a1-64f928125942_Encord+Active+Hero+-+3-0.webm"
}, {
  icon: indexIcon,
  title: "Index",
  subTitle: "Data curation and management",
  description: "Understand and manage your visual data, prioritize data for labeling, and initiate active learning pipelines.",
  video: "https://encord.cdn.prismic.io/encord/a8ae4cf7-9ed7-474d-8a86-cd41df9466fe_Index+Hero+MAIN-+TOP.webm"
}]



export default function VisualDataManagmentComponent() {
  const [activeTab, setActiveTab] = useState(0)
  const [videoUrl, setVideoUrl] = useState(visualDataManagmentData[0].video)
  const [mouseEntered, setMouseEntered] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [clientRect, setClientRect] = useState<DOMRect>()

  const [mouseY, setMouseY] = useState(0)
  const [hasResized, setHasResized] = useState(false)

  console.log("🚀 ~ VisualDataManagmentComponent ~ mouseEntered:", mouseEntered)

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mouseEntered) {
      document.addEventListener("mousemove", (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
      });
    }
  }, [mouseEntered])


  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setClientRect(rect);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  console.log("LETS GO", clientRect)





  return (
    <div ref={divRef} className="flex flex-col mx-auto my-6 lg:bg-white bg-[#FAFAFA] lg:flex-row rounded-3xl border overflow-hidden lg:p-0 p-5">
      <div className="lg:max-w-[370px] text-left text-gray-600 bg-[#FAFAFA]">
        <h2 className="text-xs opacity-50 font-medium uppercase lg:p-5 lg:py-5 pb-2.5 py-1.5">
          Encord AI Data Development Platform
        </h2>
        <div className="flex flex-col lg:max-w-md md:justify-start xl:pb-0 lg:pb-5 ">
          {
            visualDataManagmentData.map((data, index) => {
              return (
                <div key={index} className={cn("p-5 cursor-pointer duration-200 transition ease-linear overflow-hidden lg:max-h-[190px]", activeTab === index ? "bg-white lg:rounded-none rounded-xl" : "!max-h-[96px] bg-[#FAFAFA]")} onMouseEnter={(e) => {
                  setActiveTab(index); setVideoUrl(visualDataManagmentData[index].video);
                  setMouseEntered(true)
                }} onMouseLeave={() => setMouseEntered(false)}>
                  <div className="flex gap-x-3 items-center">
                    <Image src={data.icon} alt={`${data.title} icon`} className="w-12 h-12" />
                    <div className="w-full">
                      <h3 className="text-xs font-semibold sm:text-2xl text-[#262626] tracking-tighter_3">{data.title}</h3>
                      <p className="text-sm font-inter tracking-tight_1">{data.subTitle}</p>
                    </div>
                  </div>
                  {
                    activeTab === index && (
                      <div className="hidden lg:block">
                        <p className="font-base lg:text-base text-base mt-6 mb-5 ">
                          {data.description}
                        </p>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>

      </div>
      <div className="justify-center xl:px-7.5 py-10 lg:px-5 p-14  duration-[1s] ease-in lg:flex hidden justify-self-center m-auto">
        <VideoComponent videoUrl={videoUrl} key={videoUrl} />
      </div>
      {/* {
        mouseEntered ?
          <MouseFollowComponent clientRect={clientRect!} mouseX={mouseX} mouseY={mouseY} activeTabTitle={visualDataManagmentData[activeTab].title} key={activeTab} /> : ""
      } */}
    </div >

  )

}