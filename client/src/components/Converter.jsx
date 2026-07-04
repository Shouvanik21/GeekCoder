import { useState } from "react";
import {
  WandSparkles,
  RotateCcw,
  Cpu,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { convertCode } from "../api/converterApi";
import { detectLanguage } from "../api/detectLanguageApi";
import CodeEditor from "./CodeEditor";
import OutputEditor from "./OutputEditor";

function Converter() {
  const [fromLanguage, setFromLanguage] = useState("JavaScript");
  const [toLanguage, setToLanguage] = useState("Python");

  const [code, setCode] = useState("");

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!code.trim()) return;

    try {
      setLoading(true);

      // Detect language
      const detected = await detectLanguage(code);

      if (
        detected.success &&
        detected.language.toLowerCase() !== fromLanguage.toLowerCase()
      ) {
        setLoading(false);

        const proceed = window.confirm(
          `Language mismatch!\n\nDetected: ${detected.language}\nSelected: ${fromLanguage}\n\nDo you want to change the source language automatically?`,
        );

        if (proceed) {
          setFromLanguage(detected.language);
        }

        return;
      }

      // Convert
      const response = await convertCode({
        sourceLanguage: fromLanguage,
        targetLanguage: toLanguage,
        code,
      });

      if (response.success) {
        setOutput(response.convertedCode);
      }
    } catch (error) {
      console.error(error);
      setOutput("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCode("");
    setOutput("");
  };

  return (
    <section id="converter" className="scroll-mt-22.5 w-full mx-auto px-6 py-24">
      {/* Editors */}

      <div className="relative">
        <div id="editors" className="w-full grid xl:grid-cols-2 gap-8 mt-10">
          {/*left editor*/}
          <CodeEditor
            code={code}
            fromLanguage={fromLanguage}
            setFromLanguage={setFromLanguage}
            setCode={setCode}
            language={fromLanguage}
          />

          {/*left editor*/}
          <OutputEditor
            output={output}
            language={toLanguage}
            toLanguage={toLanguage}
            setToLanguage={setToLanguage}
          />
        </div>

        {/*Buttons */}
        <button
          onClick={handleConvert}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
               w-35 h-12 flex items-center justify-center gap-2
               rounded-xl border border-white/10
               bg-[#111318]
               px-6 py-3
               text-xl font-semibold text-white
               shadow-2xl transition-all
               hover:scale-105 hover:border-cyan-400/30 hover:bg-cyan-500" 
        >
          Convert!
          <ArrowRight size={22} />
        </button>
        <button
          onClick={handleReset}
          className="absolute left-1/2 top-[calc(50%+50px)] -translate-x-1/2 z-20
             w-35 h-12 flex items-center justify-center gap-2 rounded-xl border border-white/10
             bg-[#111318] px-6 py-3 text-xl font-semibold text-white
             shadow-2xl transition-all hover:scale-105
             hover:text-white hover:border-red-400/30 hover:bg-red-500"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </section>
  );
}

export default Converter;
