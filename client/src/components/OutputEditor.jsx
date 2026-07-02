import Editor from "@monaco-editor/react";
import { Copy, Download, FileCode2 } from "lucide-react";

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

function OutputEditor({ output, language }) {
  const copyCode = () => {
    navigator.clipboard.writeText(output);
  };

  const downloadCode = () => {
    const blob = new Blob([output], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "converted-code.txt";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div id="output-editor" className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl">
      <div id="oe-top" className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="ml-4 flex items-center gap-2 rounded-lg bg-[#21262d] px-4 py-2 text-sm">
            <FileCode2 size={16} />

            <span>output</span>
          </div>
        </div>

        <div id="oe-top-right" className="flex gap-3">
          <button
            onClick={copyCode}
            className="rounded-lg bg-cyan-500 px-3 py-2 hover:bg-cyan-400 transition"
          >
            <Copy size={16} />
          </button>

          <button
            onClick={downloadCode}
            className="rounded-lg bg-purple-500 px-3 py-2 hover:bg-purple-400 transition"
          >
            <Download size={16} />
          </button>
        </div>
      </div>

      <Editor
        height="500px"
        theme="vs-dark"
        language={getMonacoLanguage(language)}
        value={output}
        options={{
          readOnly: true,
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

      <div id="oe-bottom" className="flex justify-between border-t border-white/10 bg-[#161b22] px-5 py-2 text-xs text-gray-400">
        <span>{language}</span>

        <span>{output.split("\n").length} Lines</span>
      </div>
    </div>
  );
}

export default OutputEditor;
