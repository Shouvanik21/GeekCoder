import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div id="footer-main" className="w-full mx-auto flex items-center justify-between px-6 py-6">
        {/* App Name */}
        <motion.h2
          whileHover={{ scale: 1.03 }}
          className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-default"
        >
          GeekCoder
        </motion.h2>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Shouvanik21/GeekCoder"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 8 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-cyan-400 hover:text-cyan-400"
        >
          <FaGithub size={22} />
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;
