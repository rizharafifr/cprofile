import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo/HeroInfo";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import ProjectSection from "@/components/Project/ProjectSection";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      {/* Title */}
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Tingkatkan Gaya Hidup Anda <br /> Bersama Kami
        </h1>
      </motion.div>
      {/* End Title */}

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image src={DataImage.Hero} alt="Hero Image" priority />
        </motion.div>
        <HeroInfo />
      </div>
      {/* End Hero Image */}

      {/* Layanan */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 gap-10"
        id="layanan"
      >
        <ServiceSection />
      </div>
      {/* End Layanan */}

      {/* Proyek */}
      <div className="mt-32" id="proyek">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl/normal text-center font-semibold"
        >
          Proyek Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-base/loose text-center"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, non?
        </motion.p>

        <ProjectSection />
      </div>
      {/* End Proyek */}

      {/* Contact */}
      <div
        className="mt-32 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-4"
        id="kontak"
      >
        <h2 className="text-3xl font-bold">Ngoding.</h2>
        <div className="flex gap-10">
          <Link href={"#beranda"}>Beranda</Link>
          <Link href={"#layanan"}>Layanan</Link>
          <Link href={"#proyek"}>Proyek</Link>
        </div>
        <div className="flex gap-4">
          <Link href={"#"}>
            <i className="ri-youtube-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-reddit-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-twitter-fill ri-2x"></i>
          </Link>
        </div>
      </div>
      {/* End Contact */}
    </>
  );
}
