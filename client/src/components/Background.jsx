function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#030712]" />

      {/* Aurora Layer */}

      <div
        className="
        absolute
        top-[-250px]
        left-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        float-animation
      "
      />

      <div
        className="
        absolute
        bottom-[-300px]
        right-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-purple-600/20
        blur-[150px]
        float-animation
      "
        style={{
          animationDelay: "2s",
        }}
      />

      {/* Center Glow */}

      <div
        className="
        absolute
        top-[20%]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/10
        blur-[120px]
        glow-animation
      "
      />

      {/* Rotating Ring */}

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        border
        border-cyan-500/5
        rounded-full
        rotate-animation
      "
      />

      {/* Grid Overlay */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
      "
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export default Background;
