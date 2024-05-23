export default function VideoComponent({ videoUrl }: {
  videoUrl: string
}) {
  return (
    <div data-aos="fade-up" data-aos-delay="10">
      <video autoPlay={true} loop playsInline preload="auto" className="xl:h-[400px] lg:h-[370px] h-72 rounded-2xl  aos-init aos-animate shadow-xl" >
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}