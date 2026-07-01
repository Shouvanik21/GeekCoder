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
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-6xl md:text-8xl font-black leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            GeekCoder
          </span>
          <br />
          <span className="text-white">Transform</span>{" "}
          <span className="text-green-400">{"{Code}"}</span>
          <br />
          <span className="text-white">Across Languages</span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-400 md:text-xl"
        >
          Convert code between Java, Python, C++, JavaScript, Go, Rust and many
          more languages using lightning-fast AI powered by Groq.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
