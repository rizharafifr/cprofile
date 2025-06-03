import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo/HeroInfo";
import ServiceSection from "@/components/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <>
      {/* Title */}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Tingkatkan Gaya Hidup Anda <br /> Bersama Kami
        </h1>
      </div>
      {/* End Title */}

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto relative">
        <Image src={DataImage.Hero} alt="Hero Image" priority />
        <HeroInfo />
      </div>
      {/* End Hero Image */}

      {/* Layanan */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 gap-10">
        <ServiceSection />
      </div>
      {/* End Layanan */}
    </>
  );
}
