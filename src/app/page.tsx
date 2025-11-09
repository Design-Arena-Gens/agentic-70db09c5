"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";

const crows = [
  { id: "crow-1", delay: 1.2, duration: 18, top: "12%", size: 44, reverse: false },
  { id: "crow-2", delay: 3.4, duration: 16, top: "38%", size: 38, reverse: true },
  { id: "crow-3", delay: 5.1, duration: 19, top: "24%", size: 48, reverse: false },
  { id: "crow-4", delay: 0.4, duration: 22, top: "56%", size: 34, reverse: true },
];

const highlightCards = [
  {
    title: "Ethereal Entrance",
    body: "A swirling Sharingan opens the battlefield, pulling you into Itachi's genjutsu before his silhouette slices through the mist.",
  },
  {
    title: "Akatsuki Aura",
    body: "Vibrant chakra embers pulse with each beat, draping the red clouds along his cloak in living motion.",
  },
  {
    title: "Crows in Flight",
    body: "Murder-formations ripple across the moonlit sky, foreshadowing the phantom clones that never leave a trace.",
  },
];

function Crow({
  delay,
  duration,
  top,
  size,
  reverse,
}: (typeof crows)[number]) {
  return (
    <motion.div
      className={styles.crow}
      style={{ top }}
      initial={{ opacity: 0, x: reverse ? "30vw" : "-30vw", y: 0 }}
      animate={{
        opacity: [0, 0.8, 1, 0],
        x: reverse ? ["30vw", "-25vw"] : ["-30vw", "28vw"],
        y: reverse ? [0, -30, 10] : [0, -20, 12],
        rotate: reverse ? [12, -4, 18] : [-8, 6, -12],
        scale: reverse ? [0.7, 1, 0.85] : [0.6, 0.95, 0.8],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 120 80"
        width={size}
        height={size * 0.66}
        className={styles.crowGraphic}
        aria-hidden
      >
        <path
          d="M5 60 C 18 36, 40 20, 64 24 C 82 28, 96 16, 115 8 C 102 24, 96 32, 90 42 C 78 38, 66 40, 54 54 C 44 66, 26 72, 5 70 Z"
          fill="currentColor"
        />
        <path
          d="M44 26 C 40 18, 42 12, 52 10 C 64 8, 70 16, 68 26 C 60 24, 52 24, 44 26 Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
}

function ItachiSilhouette() {
  return (
    <motion.svg
      viewBox="0 0 220 320"
      className={styles.itachi}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1.6, ease: "easeOut" }}
      role="img"
      aria-labelledby="itachi-title"
    >
      <title id="itachi-title">Stylized illustration of Itachi Uchiha emerging from a crimson mist</title>
      <defs>
        <linearGradient id="cloak-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#120414" />
          <stop offset="45%" stopColor="#24081e" />
          <stop offset="100%" stopColor="#43091f" />
        </linearGradient>
        <linearGradient id="highlight-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4f7b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff9800" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M110 30 C 90 32, 74 44, 78 70 L 84 114 C 56 146, 40 200, 48 272 C 52 300, 62 312, 82 310 L 96 308 L 88 238 L 112 176 L 136 238 L 128 308 L 142 310 C 162 312, 172 300, 176 272 C 184 200, 168 146, 140 112 L 144 72 C 148 44, 128 30, 110 30 Z"
        fill="url(#cloak-gradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 1.8, ease: "easeInOut" }}
      />
      <motion.path
        d="M92 86 C 86 108, 100 124, 120 124 C 132 124, 144 116, 144 100 C 144 86, 134 72, 120 70 C 102 68, 96 72, 92 86 Z"
        fill="#0b0d16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      />
      <motion.circle
        cx="120"
        cy="100"
        r="18"
        fill="url(#highlight-gradient)"
        stroke="#3c071b"
        strokeWidth="2"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
      />
      <motion.circle
        cx="120"
        cy="100"
        r="9"
        fill="#140711"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      />
      <motion.path
        d="M102 152 C 96 152, 84 162, 84 188 C 84 202, 90 214, 98 220 C 102 224, 106 224, 110 222 L 110 188 C 110 168, 106 152, 102 152 Z"
        fill="rgba(255,79,123,0.25)"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 0.6, 0.4], y: [12, 0, -8] }}
        transition={{ delay: 1.6, duration: 1.4, repeat: Infinity, repeatDelay: 2.4 }}
      />
      <motion.path
        d="M128 152 C 134 152, 146 162, 146 188 C 146 202, 140 214, 132 220 C 128 224, 124 224, 120 222 L 120 188 C 120 168, 124 152, 128 152 Z"
        fill="rgba(255,79,123,0.25)"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 0.6, 0.4], y: [12, 0, -6] }}
        transition={{ delay: 1.8, duration: 1.4, repeat: Infinity, repeatDelay: 2.2 }}
      />
      <motion.path
        d="M72 216 C 60 236, 58 258, 62 282 C 64 298, 74 306, 92 304 L 88 236 Z"
        fill="#190911"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />
      <motion.path
        d="M148 216 C 160 236, 162 258, 158 282 C 156 298, 146 306, 128 304 L 132 236 Z"
        fill="#190911"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />
      <motion.path
        d="M76 184 C 52 190, 42 208, 40 240 C 38 268, 42 288, 54 300 C 64 310, 80 314, 100 312 L 90 240 Z"
        fill="#250912"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      />
      <motion.path
        d="M164 184 C 188 190, 198 208, 200 240 C 202 268, 198 288, 186 300 C 176 310, 160 314, 140 312 L 150 240 Z"
        fill="#250912"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      />
      <motion.path
        d="M100 118 C 86 120, 70 132, 68 150 C 66 164, 74 174, 86 180 C 80 162, 88 140, 100 136 C 118 130, 132 132, 142 142 C 150 150, 154 162, 148 180 C 160 172, 168 160, 166 146 C 162 128, 140 118, 120 118 C 112 118, 106 118, 100 118 Z"
        fill="rgba(255,79,123,0.35)"
        style={{ mixBlendMode: "screen" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.4] }}
        transition={{ delay: 1.6, duration: 1.2, repeat: Infinity, repeatType: "mirror", repeatDelay: 2.8 }}
      />
    </motion.svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <motion.div
        className={styles.radialGlow}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.85] }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <motion.div
            className={styles.moon}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.08, 1], opacity: [0, 1, 0.92] }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <motion.div
            className={styles.sharingan}
            initial={{ opacity: 0, rotate: -60, scale: 0.2 }}
            animate={{ opacity: 0.7, rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          >
            <div className={styles.ring} />
            <div className={styles.ring} />
            <div className={styles.ring} />
          </motion.div>
          <ItachiSilhouette />
          {crows.map((crow) => (
            <Crow key={crow.id} {...crow} />
          ))}
          <motion.div
            className={styles.groundMist}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: [0, 0.85, 0.7], y: [30, 0, -8] }}
            transition={{ delay: 0.9, duration: 1.4, ease: "easeOut" }}
          />
        </section>

        <section className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            Itachi Uchiha: Moonlit Manifestation
          </motion.h1>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            Witness the legendary prodigy rise from a scarlet haze as crows carve his
            presence into the night. This micro-scene captures Itachi&apos;s arrival with
            ethereal motion, immersive chakra glow, and Akatsuki symbolism crafted for
            the web.
          </motion.p>
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          >
            <Link href="#story" className={styles.primaryAction}>
              Enter The Genjutsu
            </Link>
            <a
              className={styles.secondaryAction}
              href="https://naruto.fandom.com/wiki/Itachi_Uchiha"
              target="_blank"
              rel="noreferrer"
            >
              Learn His Legacy
            </a>
          </motion.div>
        </section>

        <section className={styles.story} id="story">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Scene Breakdown
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className={styles.storyIntro}
          >
            Every motion stroke is tuned to dramatize Itachi&apos;s unsettling calm: a
            sharingan pulse anchors the composition while crows ricochet across the
            stage. Layered gradients and additive glows give the cloak depth without
            relying on external assets.
          </motion.p>
          <div className={styles.cardGrid}>
            {highlightCards.map((card, index) => (
              <motion.article
                key={card.title}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: "easeOut" }}
              >
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            className={styles.caption}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <p>
              Built as a deploy-ready Next.js experience: no external imagery, pure CSS
              and SVG artistry translated into motion for browsers and Vercel edge
              rendering.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
