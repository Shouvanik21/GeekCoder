import { ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import languages from "../data/languages";

function LanguageSelector({
  fromLanguage,
  toLanguage,
  setFromLanguage,
  setToLanguage,
}) {
  const swapLanguages = () => {
    const temp = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(temp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* From */}

          <div className="flex-1 w-full">
            <label className="block mb-2 text-sm font-semibold text-gray-400">
              From Language
            </label>

            <select
              value={fromLanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
              className="w-full rounded-2xl border border-cyan-400/20 bg-[#0d1117] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          {/* Swap */}

          <motion.button
            whileHover={{
              rotate: 180,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={swapLanguages}
            className="mt-7 lg:mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20"
          >
            <ArrowRightLeft size={22} />
          </motion.button>

          {/* To */}

          <div className="flex-1 w-full">
            <label className="block mb-2 text-sm font-semibold text-gray-400">
              To Language
            </label>

            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className="w-full rounded-2xl border border-purple-400/20 bg-[#0d1117] px-5 py-4 text-white outline-none transition focus:border-purple-400"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LanguageSelector;
