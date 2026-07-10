import Image from "next/image";
import { motion } from "framer-motion";

const RimDrivePartner = () => {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex w-full min-h-screen flex-col items-center justify-center gap-6 py-24 text-white md:py-0"
    >
      <motion.span
        variants={itemVariants}
        className="text-center text-lg font-bold"
      >
        Our Partner
      </motion.span>
      <motion.h1
        variants={itemVariants}
        className="text-center text-3xl leading-[140%] font-bold md:text-[3.125rem] md:leading-[120%]"
      >
        네덜란드에서 만나는
        <br />
        함께 성장할 파트너,
        <br />
        RIM DRIVE TECHNOLOGY
      </motion.h1>

      <motion.a
        variants={itemVariants}
        href="https://rimdrivetechnology.nl/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 cursor-pointer border border-white px-18 py-3.5 text-center font-bold backdrop-blur
        transition-colors duration-500 hover:bg-white hover:text-black"
      >
        문의하기
      </motion.a>

      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/home/rimdrive-partner.png"
        width={1920}
        height={1080}
        alt="section-img"
      />
    </motion.section>
  );
};

export default RimDrivePartner;
