import { useState } from "react";
import { WandSparkles, RotateCcw, Cpu, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
import OutputEditor from "./OutputEditor";

function Converter() {
  const [fromLanguage, setFromLanguage] = useState("JavaScript");
  const [toLanguage, setToLanguage] = useState("Python");

  const [code, setCode] = useState(`function greet(name) {
    console.log("Hello " + name);
}

greet("GeekCoder");
`);

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!code.trim()) return;

    setLoading(true);

    // Temporary demo
    setTimeout(() => {
      setOutput(`def greet(name):
    print("Hello " + name)

greet("GeekCoder")`);

      setLoading(false);
    }, 1800);
  };

  const handleReset = () => {
    setCode("");
    setOutput("");
  };

  return (
    <section id="converter" className="max-w-7xl mx-auto px-6 py-24">
      {/* Language Selector */}

      <div className="mt-12">
        <LanguageSelector
          fromLanguage={fromLanguage}
          toLanguage={toLanguage}
          setFromLanguage={setFromLanguage}
          setToLanguage={setToLanguage}
        />
      </div>

      {/* Editors */}

      <div className="grid xl:grid-cols-2 gap-8 mt-10">
        <CodeEditor code={code} setCode={setCode} language={fromLanguage} />

        <OutputEditor output={output} language={toLanguage} />
      </div>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          onClick={handleConvert}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/20 disabled:opacity-60"
        >
          <WandSparkles size={22} />

          {loading ? "AI is converting..." : "Convert with AI"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="flex items-center gap-3 rounded-2xl border border-red-500 px-10 py-4 text-lg text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <RotateCcw size={22} />
          Reset
        </motion.button>
      </div>

      {/* Loading */}

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="h-12 w-12 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>

          <p className="mt-5 text-gray-400">
            Groq AI is generating optimized code...
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default Converter;
