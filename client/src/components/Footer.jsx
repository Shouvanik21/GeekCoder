import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div id="footer-main" className="w-full mx-auto flex items-center justify-between px-6 py-6">
        {/* App Name */}
        <div className="bottom">
            <div id="box" className="flex items-center justify-between gap-2 text-white border border-[2px] border-cyan-400/30 bg-[#111111] rounded-md shadow-cyan-500/20">
                Made with <FontAwesomeIcon icon={faHeart} style={{color: "rgb(116, 192, 252)",}} /> by <h3>Shouvanik</h3>
            </div>
        </div>

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
