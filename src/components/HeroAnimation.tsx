"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

function QuillSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="vr" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="80%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="nib-glow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Vane gauche */}
      <path d="M28 10 C20 25 6 55 4 90 C2 110 6 125 16 135 C8 112 12 75 28 48 Z" fill="url(#vl)" opacity="0.72" />
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <path key={`l${i}`}
          d={`M28 ${22+i*10} Q${17-i*0.9} ${32+i*10} ${7-i*0.4} ${42+i*10}`}
          stroke="url(#vl)" strokeWidth={1.3-i*0.04} strokeLinecap="round" opacity={0.9-i*0.07}
        />
      ))}

      {/* Vane droite */}
      <path d="M28 10 C36 25 50 55 52 90 C54 110 50 125 40 135 C48 112 44 75 28 48 Z" fill="url(#vr)" opacity="0.6" />
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <path key={`r${i}`}
          d={`M28 ${22+i*10} Q${39+i*0.9} ${32+i*10} ${49+i*0.4} ${42+i*10}`}
          stroke="url(#vr)" strokeWidth={1.3-i*0.04} strokeLinecap="round" opacity={0.85-i*0.07}
        />
      ))}

      {/* Rachis */}
      <line x1="28" y1="8" x2="28" y2="172" stroke="url(#sh)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="27.2" y1="14" x2="27.2" y2="155" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />

      {/* Calamus taillé */}
      <path d="M28 162 L24.5 178 Q27 174 28 185 Q29 174 31.5 178 Z" fill="#818cf8" opacity="0.9" />

      {/* Nib + lueur d'encre */}
      <path d="M26.8 174 Q28 168 29.2 174 Q28.5 183 28 186 Q27.5 183 26.8 174 Z"
        fill="#a5b4fc" filter="url(#nib-glow)" />
      <circle cx="28" cy="186" r="1.5" fill="#6366f1" opacity="0.7" filter="url(#nib-glow)" />
    </svg>
  );
}

type Phase = "intro" | "enter" | "line1" | "carriage" | "line2" | "exit" | "done";

export default function HeroAnimation() {
  const quillControls = useAnimationControls();
  const [phase, setPhase] = useState<Phase>("intro");
  const [line1Pct, setLine1Pct] = useState(0);
  const [line2Pct, setLine2Pct] = useState(0);

  useEffect(() => {
    async function run() {
      // 1. Entrée 3D dramatique
      setPhase("enter");
      await quillControls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: -42,
        transition: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          rotateX: { duration: 0.9 },
        },
      });

      await new Promise(r => setTimeout(r, 180));

      // 2. Écriture ligne 1 — la plume glisse de gauche à droite
      setPhase("line1");
      const DUR1 = 1100;
      const T0 = performance.now();
      await new Promise<void>(resolve => {
        const tick = (now: number) => {
          const p = Math.min((now - T0) / DUR1, 1);
          setLine1Pct(p);
          // x de la plume : de -120px (gauche) à +120px (droite)
          quillControls.set({ x: -120 + p * 240, y: p * 6 });
          if (p < 1) requestAnimationFrame(tick);
          else resolve();
        };
        requestAnimationFrame(tick);
      });

      // 3. Retour chariot — plume revient à gauche, descend d'une ligne
      setPhase("carriage");
      await quillControls.start({
        x: -120,
        y: 62,
        transition: { duration: 0.28, ease: "easeInOut" },
      });

      // 4. Écriture ligne 2 — plus courte
      setPhase("line2");
      const DUR2 = 650;
      const T1 = performance.now();
      await new Promise<void>(resolve => {
        const tick = (now: number) => {
          const p = Math.min((now - T1) / DUR2, 1);
          setLine2Pct(p);
          quillControls.set({ x: -120 + p * 180, y: 62 + p * 3 });
          if (p < 1) requestAnimationFrame(tick);
          else resolve();
        };
        requestAnimationFrame(tick);
      });

      // 5. La plume s'envole
      setPhase("exit");
      await quillControls.start({
        opacity: 0,
        y: -90,
        x: 80,
        rotateZ: -80,
        scale: 0.4,
        transition: { duration: 0.55, ease: "easeIn" },
      });
      setPhase("done");
    }
    run();
  }, [quillControls]);

  const line1Clip = `inset(0 ${Math.round((1 - line1Pct) * 100)}% 0 0)`;
  const line2Clip =
    phase === "line2" || phase === "exit" || phase === "done"
      ? `inset(0 ${Math.round((1 - line2Pct) * 100)}% 0 0)`
      : "inset(0 100% 0 0)";

  return (
    <div className="relative flex flex-col items-center" style={{ minHeight: 180 }}>

      {/* ── Plume ── */}
      <motion.div
        animate={quillControls}
        initial={{
          opacity: 0,
          scale: 0.25,
          y: -140,
          x: -120,
          rotateX: "-85deg",
          rotateY: "35deg",
          rotateZ: "-68deg",
        }}
        className="absolute pointer-events-none z-20"
        style={{
          top: "12px",
          left: "50%",
          marginLeft: "-1.75rem",
          transformPerspective: 900,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Lueur d'encre sous le nib pendant l'écriture */}
        {(phase === "line1" || phase === "line2") && (
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 rounded-full bg-indigo-400/80 blur-sm"
            animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
        <motion.div
          animate={phase !== "done" && phase !== "exit" ? { y: [0, -2, 0] } : {}}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <QuillSVG className="w-14 h-[7rem] drop-shadow-[0_0_14px_rgba(99,102,241,0.55)]" />
        </motion.div>
      </motion.div>

      {/* ── Titre ── */}
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-center select-none">

        {/* Ligne 1 */}
        <span className="relative block">
          {/* Texte fantôme : réserve la hauteur dès le début */}
          <span className="invisible" aria-hidden>Apprends à builder</span>
          <span
            className="absolute inset-0 flex justify-center bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-400"
            style={{ clipPath: line1Clip, WebkitClipPath: line1Clip, willChange: "clip-path" }}
          >
            Apprends à builder
          </span>
        </span>

        {/* Ligne 2 */}
        <span className="relative block mt-1">
          <span className="invisible" aria-hidden>avec l'IA</span>
          <span
            className="absolute inset-0 flex justify-center bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-400"
            style={{ clipPath: line2Clip, WebkitClipPath: line2Clip, willChange: "clip-path" }}
          >
            avec l'IA
          </span>
        </span>
      </h1>

      {/* ── Sous-titre — apparaît après l'écriture ── */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={phase === "done" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mt-6 text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed text-center dark:text-zinc-400"
      >
        Le vibecoding a ouvert le développement logiciel à tout le monde.
        Cette plateforme t'apprend à construire l'application que tu veux —
        sans jamais avoir écrit une ligne de code.
      </motion.p>
    </div>
  );
}
