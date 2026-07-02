import Editor from "@monaco-editor/react";
import { FileCode2 } from "lucide-react";

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

function CodeEditor({ code, setCode, language }) {
  return (
    <div id="input-editor" className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl">
      {/* VS Code Header */}

      <div id="ie-top" className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="ml-4 flex items-center gap-2 rounded-lg bg-[#21262d] px-4 py-2 text-sm">
            <FileCode2 size={16} />

            <span>main</span>
          </div>
        </div>

        <span id="ie-top-right" className="text-sm text-cyan-400">{language}</span>
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

      <div id="ie-bottom" className="flex justify-between border-t border-white/10 bg-[#161b22] px-5 py-2 text-xs text-gray-400">
        <span>{language}</span>

        <span>{code.split("\n").length} Lines</span>
      </div>
    </div>
  );
}

export default CodeEditor;
