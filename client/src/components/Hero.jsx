import { motion } from "framer-motion";
import { ArrowRight, Sparkles, WandSparkles, CodeXml, Cpu } from "lucide-react";

function Hero() {
  const scrollToConverter = () => {
    const section = document.getElementById("converter");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div id="hero-main" className="w-full mx-auto px-6 pt-28 pb-24 flex flex-col items-center justify-center text-center">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          id="hero-top"
          className="mt-10 text-center text-6xl md:text-8xl font-black leading-tight"
        >
          <span className="text-white">Transform</span>{" "}
          <span className="text-cyan-400">{"{Code}"}</span>
          <br />
          <span className="text-white">Beyond Boundaries</span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-300 md:text-xl font-light"
        >
          With GeekCoder, just think once and code everywhere!!
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
