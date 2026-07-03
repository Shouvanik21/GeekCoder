import { Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const scrollToConverter = () => {
    const section = document.getElementById("converter");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <div id="nav-main" className="mx-auto h-20 w-full p-25 flex items-center justify-between">
        {/* Logo */}

        <div className="p-6 flex items-center gap-4">
          <motion.div
            whileHover={{
              rotate: 12,
              scale: 1.08,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#111111] shadow-lg shadow-cyan-500/20"
          >
            <Code2 className="text-cyan-400" size={28} />
          </motion.div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-cyan-500 bg-clip-text font-medium">
              GeekCoder
            </h1>

            <p className="text-xs text-gray-400">AI Code Converter</p>
          </div>
        </div>

        {/* CTA */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToConverter}
          id="nav-right"
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 text-gray-100 py-3 font-semibold shadow-xl shadow-cyan-500/20"
        >
          <Sparkles size={18} />
          Start Converting
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
