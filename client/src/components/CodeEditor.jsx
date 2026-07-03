import Editor from "@monaco-editor/react";
import { FileCode2 } from "lucide-react";
import languages from "../data/languages";

function getMonacoLanguage(lang) {
  const map = {
    "C++": "cpp",
    "C#": "csharp",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    Java: "java",
    Go: "go",
    Rust: "rust",
    PHP: "php",
    Ruby: "ruby",
    Swift: "swift",
    Kotlin: "kotlin",
    HTML: "html",
    CSS: "css",
    JSON: "json",
    XML: "xml",
    SQL: "sql",
    C: "c",
  };

  return map[lang] || "plaintext";
}

function CodeEditor({
  code,
  setCode,
  language,
  fromLanguage,
  setFromLanguage,
}) {
  return (
    <div
      id="input-editor"
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl"
    >
      <div id="ls-left" className="flex-1 w-full bg-[#333333]">
        <label className="block mb-2 text-sm font-semibold text-gray-400">
          From Language
        </label>

        <select
          value={fromLanguage}
          onChange={(e) => setFromLanguage(e.target.value)}
          className="w-full rounded-md border border-[#222222] bg-[#222222] px-5 py-4 text-white outline-none transition focus:border-cyan-400 text-sm"
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* VS Code Header */}

      <div
        id="ie-top"
        className="flex items-center justify-between border-b border-white/10 bg-[#1e1e1e] px-5 py-3"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="ml-4 flex items-center gap-2 rounded-lg bg-[#21262d] px-4 py-2 text-sm">
            <FileCode2 size={16} />

            <span className="p-2">main</span>
          </div>
        </div>

        <span id="ie-top-right" className="text-sm text-cyan-400">
          {language}
        </span>
      </div>

      <Editor
        height="500px"
        theme="vs-dark"
        language={getMonacoLanguage(language)}
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 15,
          fontFamily: "Fira Code, monospace",
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          padding: {
            top: 18,
          },
        }}
      />

      {/* Footer */}

      <div
        id="ie-bottom"
        className="flex justify-between border-t border-white/10 bg-[#1e1e1e] px-5 py-2 text-xs text-gray-400"
      >
        <span>{language}</span>

        <span>{code.split("\n").length} Lines</span>
      </div>
    </div>
  );
}

export default CodeEditor;
