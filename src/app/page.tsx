"use client"
import Image from "next/image";
import "./home-page.css"
import heroGradient from "../../public/hero-faded-bg.png";
import heroImage from "../../public/landing-page-img.webp";
import vizAi from "../../public/VizAi.svg";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import VisualDataManagmentComponent from "@/components/visualDataManagmentComponent";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),

})

export default function Home() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",

    },
  })


  function onSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values)
    form.reset({
      email: ""
    })

  }

  return (
    <main className="min-h-[100vh] -z-10" >
      <section className="">
        <article className="relative pt-28 lg:pt-36 sm:py-32 heroSectionBg lg:max-h-[740px] bg-[#1e0743]">
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(121deg, #c5bbff -76.83%, #c5bbff00 30.09%)" }} />
          <Image src={heroGradient} alt="Hero Gradient" className="absolute inset-0 z-10 w-full h-full" />
          <div className="relative z-10 flex flex-col items-center justify-center mx-5 lg:flex-row lg:gap-5 max-w-7xl xl:max-w-full xl:px-16 xl:mx-auto sm:mx-6">
            <div className="flex flex-col gap-9 sm:gap-6">
              <div className="flex flex-col gap-6 ">
                <h1 className="text-white max-w-[302px] xl:text-6xl text-2xl sm:text-5xl md: xs:max-w-[396px] sm:max-w-[600px] lg:max-w-[700px] xl:leading-[68px]  lg:mx-0 mx-auto font-bold text-center lg:text-start xs:px-0 -tracking-[1.5] sm:-tracking-[2.4px] lg:-tracking-[2px] ">
                  All the tools you need to{" "} <strong style={{ background: "linear-gradient(90deg, #c6bdff, #cac2ff 7%, #ac9eff 18.5%, #ffecde 48.5%, #e5d9f1 52%, #d2cbff 79%, #e6e2ff)", WebkitTextFillColor: "#0000", WebkitBackgroundClip: "text", fontWeight: 700, backgroundClip: "text" }}>Build Better</strong> <strong style={{ background: "linear-gradient(90deg, #c6bdff, #cac2ff 7%, #ac9eff 18.5%, #ffecde 48.5%, #e5d9f1 52%, #d2cbff 79%, #e6e2ff)", WebkitTextFillColor: "#0000", WebkitBackgroundClip: "text", fontWeight: 700, backgroundClip: "text" }}>Models</strong>{", "}faster
                </h1>
                <p className="lg:max-w-2xl xs:max-w-[511px] sm:max-w-[648px] tablet_alignment sm:mt-2 lg:mt-0 mx-auto lg:mx-0 text-sm tracking-tight_1 text-center lg:text-left text-[#FAFAFA]/70  sm:text-lg font-inter">Encord is the leading data development platform for computer vision & multimodal AI teams. Intelligently manage, clean and curate data, streamline your labeling and workflow management, and evaluate model performance.</p>
                <div className="mx-auto lg:mx-[unset] w-full max-w-[288px] sm:max-w-md">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
                      <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <input
                              {...field}
                              type="email"
                              placeholder="Your work email"
                              className="w-full text-gray-2500 placeholder-gray-2200 placeholder:text-base placeholder:tracking-[-0.8px] rounded-full leading-6 border border-transparent disabled:bg-gray-300 bg-white pl-[22px] pr-20 sm:pr-32 py-3.5 focus:outline-none focus:ring-1 focus:ring-purple-600 shadow-lg" />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <button type="submit" className="text-white bg-gradient-to-r from-[#5e44ff] to-[#c5bbff] rounded-full py-2.5 px-5 font-semibold text-base shadow-lg absolute right-1.5 top-1/2 -translate-y-1/2 focus:outline-none absolute">Get Started</button>
                    </form>
                  </Form>
                </div>


              </div>
              <div className="branding_loop_width_index lg:max-w-[625px]">
                <p className="text-xs font-semibold text-center uppercase lg:text-left text-white/70 tracking-widest_1">Trusted by pioneering AI teams</p>
                <div className="max-w-[400px] sm:max-w-[625px] overflow-hidden">
                  <div className="tag-list">
                    <div className="loop-slider">
                      <div className="inner">
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                        <div className="tag">
                          <Image src={vizAi} alt="viz ai" className="object-scale-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[512px] md:h-[482px] w-[341px] h-[322px]" >
              <Image src={heroImage} alt="Hero Image" style={{ objectFit: "cover", opacity: 1 }}  />
            </div>
          </div>
          <div className="py-14 sm:hidden">
            <h2 className="text-2xl font-semibold text-white text-center max-w-[302px] xs:max-w-[396px] sm:max-w-[600px] mx-auto">The complete data development platform for AI model development</h2>
            <p className="text-sm  text-[#FAFAFA]/70 mt-5 mx-auto text-center xs:max-w-[511px] sm:max-w-[648px]">Unlock the potential of AI for your organization. Streamline your data-centric AI pipelines to build better models and deploy high-quality production AI, faster.</p>

          </div>
        </article>
        <section className="relative z-10 sm:-mt-20 lg:-mt-22 mx-5 max-w-7xl xl:px-6 xl:mx-auto sm:mx-10 min-h-[52px]">
          <div className="hidden sm:block">
            <VisualDataManagmentComponent />
          </div>
          {/* NEXT SHIZZLE */}
          <section className="lg:mt-32 sm:mt-28 text-center sm:min-h-[244px] xl:min-h-[212px]">


          </section>
        </section>
      </section>
    </main>
  );
}

// page-heading text-white max-w-[302px] xs:max-w-[396px] sm:max-w-[600px] lg:max-w-[700px] lg:mx-0 mx-auto xl:text-5.5xl xl:leading-[68px] sm:text-4.5xl text-2.5xl font-bold text-center lg:text-start xs:px-0 -tracking-[1.5] sm:-tracking-[2.4px] lg:-tracking-[3px]

{/* <input className={"w-full text-gray-2500 placeholder-gray-2200 placeholder:text-base placeholder:tracking-[-0.8px] rounded-full leading-6 border border-transparent disabled:bg-gray-300 bg-white pl-[22px] pr-20 sm:pr-32 py-3.5 focus:outline-none focus:ring-1 focus:ring-purple-600 shadow-lg"} placeholder="Your work email" /> */ }