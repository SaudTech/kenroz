"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Eye, EyeOff, Lock, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Parallax for glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rot = useTransform(mouseX, [0, 1], [-2, 2]);
  const glowX = useTransform(mouseX, [0, 1], [-30, 30]);
  const glowY = useTransform(mouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const t = setTimeout(() => setShowUI(true), 900); // cinematic reveal
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (showUI && inputRef.current) inputRef.current.focus();
  }, [showUI]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        localStorage.setItem("site-unlocked", "true");
        window.location.href = "/";
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-[9999] top-0 left-0 min-h-screen min-w-screen bg-black overflow-hidden">
    <div className="overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Backdrop gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_90%_110%,rgba(236,72,153,0.25),transparent)]">
        <div className="absolute inset-0 animate-[pulse_10s_ease-in-out_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.05),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-28 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ rotate: rot }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ rotate: rot }}
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-500/20 to-indigo-500/20" />
      </motion.div>

      {/* Sparkle particles */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatedParticles />
      </div>

      {/* Cinematic intro */}
      <AnimatePresence>
        {!showUI && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 text-white"
            >
              <Sparkles className="h-6 w-6 animate-pulse" />
              <span className="tracking-widest text-sm uppercase">Preparing experience…</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.main
        className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={showUI ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={showUI ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-balance bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={showUI ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            Coming Soon
          </motion.h1>
          <motion.p
            className="mx-auto mt-3 max-w-xl text-pretty text-base text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={showUI ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            We’re crafting something beautiful. Enter the access key to preview the work-in-progress.
          </motion.p>
        </motion.div>

        {/* Error shake wrapper keyed by error message */}
        <motion.div
          key={error}
          animate={error ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full max-w-md"
        >
          <motion.div
            className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            {/* Floating glow follows cursor */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-3xl"
              style={{ translateX: glowX, translateY: glowY }}
            >
              <div className="h-full w-full rounded-3xl bg-gradient-to-tr from-indigo-400/10 via-fuchsia-400/10 to-cyan-300/10 blur-3xl" />
            </motion.div>

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Lock className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-white/60">Authorized Preview</p>
                  <h2 className="text-lg font-semibold text-white/90">Enter Access Key</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="peer w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 pr-12 text-white/90 placeholder-white/40 outline-none transition focus:border-white/25 focus:bg-white/10"
                    aria-label="Access password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2 text-white/60 hover:bg-white/10 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-4 py-3 font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.99 }}
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-90 transition group-hover:opacity-100" />
                  <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(115deg,transparent_0%,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%,transparent_100%)] [background-size:250%_100%] group-hover:animate-[shimmer_1.8s_ease-in-out_infinite]" />
                  <span className="relative flex items-center gap-2">
                    {loading ? (
                      <>
                        <span className="mr-1 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                        Verifying…
                      </>
                    ) : (
                      <>Enter</>
                    )}
                  </span>
                </motion.button>
              </form>

              <AnimatePresence>
                {error && (
                  <motion.p
                    className="mt-3 text-center text-sm text-rose-300/90"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="mt-5 text-center text-xs text-white/50">
                Protected preview • All rights reserved
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* Page chrome */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]; [background-size:40px_40px]" />
    </div>
    </div>
  );
}

/* ---- Lightweight decorative particles (no hooks outside component) ---- */
function AnimatedParticles() {
  const dots = Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    r: Math.random() * 1.8 + 0.6,
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    dur: Number((Math.random() * 6 + 6).toFixed(2)),
    delay: Number((Math.random() * 3).toFixed(2)),
  }));

  return (
    <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
      {dots.map((d) => (
        <motion.circle
          key={d.id}
          r={d.r}
          cx={`${d.cx}%`}
          cy={`${d.cy}%`}
          fill="url(#g)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], y: [-4, -12, -4], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: d.dur,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
      <defs>
        <radialGradient id="g">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
