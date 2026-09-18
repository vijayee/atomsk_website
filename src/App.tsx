import { useEffect, useRef, useState } from "react"

function AtomskLogoMark({
  size = 48,
  color = "#c0c0c0",
  x,
  y,
}: {
  size?: number
  color?: string
  x?: number
  y?: number
}) {
  return (
    <svg
      viewBox="0 0 856 743"
      width={size}
      height={size * (743 / 856)}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
      x={x}
      y={y}
    >
      <g transform="translate(-81.97739,-146.8934)">
        <path d="m 808.45,516.25 c 6.54,2.73 13.09,5.45 19.63,8.17 2.16,11.08 0.57,30.75 0.54,42.75 -0.09,28.06 0.05,56.11 0.02,84.17 -0.01,13.09 -0.01,26.18 0.04,39.28 0.02,5.11 1.16,13.94 -0.21,18.64 -0.84,2.89 -5.65,6 -7.79,8.08 -6.51,6.28 -12.94,12.63 -19.47,18.88 -14.66,14.01 -28.75,28.62 -43.58,42.44 -4.89,4.56 -9.6,11.13 -15.24,14.7 -3.37,2.13 -24.66,8.17 -29.33,9.04 -1.28,-5.8 -0.46,-12.3 -0.51,-18.27 -0.02,-2.45 -0.62,-5.81 0.42,-8.09 1.36,-2.96 6.46,-5.74 8.9,-7.86 7.68,-6.69 15.39,-13.34 23.16,-19.92 2.96,-2.51 14.79,-11.22 15.66,-14.21 0.9,-3.07 0.07,-7.5 0.09,-10.7 0.03,-8.42 0.01,-16.84 0.03,-25.25 0.11,-30.86 0.08,-61.72 0.07,-92.58 -0.01,-9.36 0.03,-18.71 0.02,-28.06 -0.01,-4.24 -1,-9.91 0.15,-13.99 0.92,-3.23 9.7,-10.32 12.41,-13.05 6.84,-6.88 13.77,-13.66 20.55,-20.6 4.45,-4.55 9.04,-10.22 14.44,-13.57 z" />
        <path d="m 215.55,516.2 c 11.63,10 21.99,21.79 32.91,32.58 2.66,2.63 12.77,11.4 13.89,14.09 1.32,3.19 0.38,8.36 0.39,11.79 0.01,9.04 0,18.08 -0.01,27.12 -0.01,30.86 -0.01,61.72 0.04,92.58 0.01,9.35 0.01,18.7 0.04,28.05 0.01,3.54 -0.92,8.6 0.24,11.96 0.83,2.41 8.5,7.78 10.73,9.76 8.46,7.46 17.14,14.68 25.69,22.04 2.58,2.21 9.56,6.99 10.94,9.73 1.13,2.24 0.56,5.7 0.54,8.13 -0.04,5.97 0.32,12.02 -0.01,17.97 -4.91,0.16 -10.51,-2.35 -15.29,-3.9 -4.53,-1.47 -10.06,-2.34 -14.25,-4.58 -4.29,-2.28 -7.93,-7.61 -11.44,-10.95 -8.62,-8.17 -17.28,-16.42 -25.61,-24.89 -11.28,-11.46 -22.98,-22.55 -34.52,-33.76 -2.99,-2.9 -12.87,-10.7 -14.27,-13.86 -1.73,-3.87 -0.54,-10.55 -0.55,-14.77 -0.05,-11.53 -0.01,-23.07 0,-34.6 0.02,-30.55 0,-61.1 0,-91.65 -0.01,-9.04 0.07,-18.07 0.03,-27.11 -0.03,-5.84 -0.7,-12.19 0.87,-17.77 6.55,-2.65 13.1,-5.3 19.64,-7.96 z" />
        <path d="m 262.31,441.52 c 3.49,3.24 5.87,8.01 8.4,12.05 3.8,6.08 7.92,12.05 11.99,17.96 15.7,22.83 30.41,46.38 45.15,69.83 43.9,69.91 87.24,140.09 129.32,211.11 11.95,20.17 24,40.39 35.51,60.82 4.02,7.11 14.27,27.45 19.32,32.05 7.63,-9.92 13.01,-22.17 19.34,-32.97 12.68,-21.62 25.01,-43.46 37.89,-64.97 38.78,-64.78 78.59,-128.83 118.51,-192.91 17.13,-27.48 34.45,-54.96 53.74,-80.97 4.5,-6.06 8.96,-12.27 13.26,-18.47 2.02,-2.91 3.97,-7.07 6.95,-8.71 0.27,19.69 0.06,39.41 0.03,59.11 0,5.23 1.27,19.96 -0.58,24.14 -1.15,2.61 -5.05,5.07 -7.07,7.06 -4.87,4.77 -9.55,9.8 -14.12,14.86 -12.9,14.27 -25.33,29.02 -37.2,44.16 -5.35,6.83 -11.95,13.64 -16.23,21.19 -14.55,25.69 -27.38,52.47 -41.04,78.64 -18.07,34.6 -36.7,69.02 -54.04,103.99 -9.77,19.69 -20.17,39.09 -30.24,58.63 -3.7,7.19 -7.4,14.37 -11.19,21.52 -1.7,3.21 -2.98,6.8 -5.28,9.6 -21.97,1.08 -44.46,1.67 -66.4,-0.11 -2.53,-4.09 -4.27,-8.65 -6.56,-12.88 -8.92,-16.47 -17.14,-33.3 -25.92,-49.84 -23.19,-43.66 -46.08,-87.55 -68.48,-131.62 -8.59,-16.9 -17.46,-33.66 -26.19,-50.49 -4.68,-9.01 -8.97,-18.29 -14.06,-27.09 -4.4,-7.62 -10.83,-14.27 -16.29,-21.14 -11.55,-14.58 -23.38,-28.87 -35.77,-42.74 -5.13,-5.74 -10.46,-11.41 -15.91,-16.84 -1.92,-1.93 -5.98,-4.41 -6.9,-7.01 -1.47,-4.14 -0.31,-21.37 -0.31,-26.83 0,-13.41 0.06,-26.81 0.06,-40.21 -0.01,-6.93 -0.55,-14.06 0.31,-20.92 z" />
        <path d="m 818.73,348.95 c 5.38,4.35 20.67,13.43 23.85,18.15 3.17,4.71 4.4,11.32 5.78,16.73 3.05,11.95 4.91,24.16 6.75,36.34 6.61,43.69 8.4,87.89 8.28,132.04 -0.16,58.38 -3.66,116.64 -15.25,173.94 -5.8,28.69 -14.31,63.05 -31.41,87.29 -3.99,5.64 -11.07,8.71 -16.96,12.03 -12.36,6.97 -24.87,13.54 -37.9,19.18 -43.7,18.9 -90.87,28.66 -137.6,36.51 -12,2.01 -24.04,3.46 -36.12,4.89 -8.13,0.97 -17.45,3.03 -25.53,1.88 1.88,-5.35 4.89,-10.23 7.5,-15.25 3.97,-7.64 7.6,-15.46 11.53,-23.12 1.55,-3 5.08,-12.36 7.39,-14.11 2.46,-1.87 7.63,-1.89 10.61,-2.59 8.21,-1.92 16.4,-4.03 24.55,-6.2 13.12,-3.48 26.28,-7 39.12,-11.44 12.58,-4.34 24.94,-9.61 37.58,-13.67 1.47,4.73 -0.62,10.97 1.87,15.13 9.51,-2.6 18.89,-5.68 28.41,-8.28 5.15,-1.41 11.91,-2.37 16.54,-5.05 2.74,-1.58 4.86,-4.71 7.1,-6.92 4.4,-4.32 8.96,-8.48 13.35,-12.83 12.52,-12.41 25.31,-24.57 37.96,-36.85 7.91,-7.68 15.85,-15.33 23.71,-23.05 2.45,-2.41 7.65,-5.72 8.91,-8.93 1.55,-3.96 0.38,-13.09 0.39,-17.61 0,-13.71 -0.04,-27.43 0,-41.15 0.07,-29.92 0,-59.85 0.02,-89.77 0.01,-16.4 1.08,-33.23 -0.16,-49.56 -9.46,-4.06 -18.93,-8.11 -28.39,-12.16 -1.7,-20.26 -1.96,-40.59 -4.21,-60.82 -0.66,-6 -0.41,-17.93 -2.41,-23.14 -0.77,-1.99 -3.8,-3.56 -5.4,-4.86 -4.98,-4.06 -9.97,-8.1 -14.93,-12.18 11.69,-18.19 23.38,-36.38 35.07,-54.57 z" />
        <path d="m 205.27,348.87 c 11.58,17.91 23.17,35.81 34.76,53.72 -3.19,4.7 -9.87,8.82 -14.4,12.41 -1.86,1.47 -5.42,3.47 -6.32,5.74 -1.83,4.6 -1.18,11.4 -1.75,16.31 -1.75,14.93 -2.8,30.01 -3.64,45.02 -0.4,7.17 0.35,15.6 -1.55,22.45 -9.23,4.06 -18.45,8.12 -27.68,12.18 -0.88,5.8 -0.43,11.86 -0.43,17.74 0,10.29 0.01,20.58 0.01,30.86 0.02,30.55 -0.09,61.1 -0.03,91.65 0.03,13.09 0.07,26.19 0.01,39.28 -0.03,4.59 -1.19,14.34 0.41,18.34 1.43,3.58 7.08,7.08 9.82,9.75 8.05,7.84 16.01,15.79 24.08,23.61 12.67,12.25 25.54,24.35 38,36.81 4.21,4.21 15.1,16.33 19.52,18.83 5.11,2.9 16.39,4.95 22.43,6.65 9.24,2.6 18.08,6.91 27.39,9.03 0.63,-5.34 1.25,-10.67 1.87,-16 23.52,8.59 47.03,16.82 71.28,23.13 8.19,2.14 16.36,4.35 24.58,6.37 3.04,0.75 7.87,0.88 10.5,2.59 2.18,1.42 5.79,10.58 7.26,13.3 3.87,7.16 7.18,14.63 10.86,21.89 2.94,5.78 6.41,11.28 8.61,17.4 -7.59,1.63 -19.51,-1.06 -27.45,-2.04 -22.59,-2.78 -44.97,-6.28 -67.29,-10.74 -41.45,-8.28 -82.76,-19.17 -120.83,-37.97 -9.16,-4.52 -29.46,-14.1 -36.34,-20.73 -5.3,-5.1 -8.91,-13.28 -12,-19.84 -7.23,-15.38 -12.32,-31.49 -16.73,-47.87 -16.95,-63.14 -20.44,-131.43 -20.39,-196.53 0.04,-43.63 1.89,-87.04 8.07,-130.26 1.82,-12.73 3.64,-25.65 6.98,-38.08 1.46,-5.43 2.65,-12.63 6.14,-17.21 2.88,-3.75 19.54,-14.95 24.25,-17.79 z" />
        <path d="m 614.87,261.72 c 8.79,0.64 17.49,2.39 26.22,3.6 21.53,2.97 43.03,6.22 64.53,9.39 8.17,1.2 16.37,2.29 24.54,3.57 2.99,0.47 7.6,0.44 10.19,2.11 6.96,4.46 6.07,15.35 10.88,21.2 -16.46,15.04 -32.93,30.08 -49.39,45.12 -4.31,-1.56 -8.17,-5.67 -11.74,-8.61 -7.51,-6.19 -15.1,-12.3 -22.69,-18.4 -2.5,-2 -4.97,-4.86 -7.79,-6.37 -3.54,-1.9 -9.29,-1.79 -13.26,-2.44 -10.53,-1.71 -21.51,-3.03 -31.84,-5.56 -1.54,-8.64 -0.48,-18.3 -0.48,-27.12 0.01,-5.39 -0.7,-11.37 0.83,-16.49 z" />
        <path d="m 409.59,261.74 c 0,14.46 0,28.91 0,43.37 -10.07,2.8 -20.97,3.9 -31.3,5.6 -4.37,0.73 -9.97,0.68 -14.03,2.51 -3.45,1.55 -6.54,5.1 -9.53,7.42 -10.72,8.33 -20.81,19.08 -32.57,25.83 -15.14,-13.71 -30.29,-27.43 -45.43,-41.14 1.78,-7.87 -1.62,-19.85 6.75,-25.11 3,-1.88 8.12,-1.8 11.56,-2.28 7.47,-1.04 14.95,-2.12 22.41,-3.22 19.5,-2.87 38.96,-5.93 58.48,-8.67 11.04,-1.55 22.52,-4.24 33.66,-4.31 z" />
        <path d="m 429.22,261.54 c 0.59,11.41 0.11,23 0.11,34.44 0,22.44 0.03,44.89 0.02,67.33 0,9.97 -0.06,19.95 -0.02,29.92 0.02,4.23 -0.89,9.77 0.21,13.85 0.65,2.4 3.97,4.66 5.72,6.32 5.29,4.99 10.57,10 15.9,14.95 13.41,12.45 26.67,25.1 39.89,37.75 6.24,5.96 13.72,14.82 20.95,19.18 7.37,-5.27 13.74,-12.64 20.34,-18.87 13.47,-12.71 27.09,-25.28 40.37,-38.18 5.06,-4.92 10.27,-9.68 15.37,-14.56 1.78,-1.7 5.13,-4.07 5.92,-6.45 1.23,-3.72 0.32,-9.11 0.36,-13.05 0.09,-9.66 -0.02,-19.33 -0.03,-28.99 -0.02,-22.44 0.01,-44.89 0.02,-67.33 0,-12.04 -0.67,-24.32 0.3,-36.31 3.22,0 6.44,0 9.66,0 0.7,5.48 0.27,11.14 0.27,16.67 -0.01,9.66 0.11,19.33 0.04,28.99 -0.18,25.55 -0.1,51.13 0.04,76.68 0.07,11.85 -0.01,23.69 -0.01,35.54 0.01,3.53 1.06,12.28 -0.2,15.3 -1.21,2.92 -5.26,5.31 -7.53,7.44 -6.43,6.03 -12.88,12.04 -19.4,17.98 -13.51,12.32 -26.92,24.85 -40.16,37.47 -8.15,7.76 -16.25,16.58 -25.36,23.19 -7.74,-4.73 -14.3,-12.95 -21.09,-19.05 -16.06,-14.44 -31.7,-29.4 -47.43,-44.2 -5.78,-5.44 -11.6,-10.86 -17.47,-16.2 -1.87,-1.69 -5.75,-3.91 -6.62,-6.35 -1.52,-4.28 -0.23,-11.04 -0.27,-15.58 -0.09,-12.16 0,-24.32 0.02,-36.47 0.04,-26.19 0.03,-52.37 0.01,-78.56 -0.01,-13.31 -1.58,-29.96 0.44,-42.85 3.21,0 6.42,0 9.63,0 z" />
        <path d="m 512,213.14 c 7.38,3.85 14.23,8.93 21.18,13.51 10.53,6.95 21.23,13.65 31.74,20.64 4.48,2.98 8.92,6.03 13.45,8.95 1.52,0.98 4.6,2.23 5.47,3.88 1.43,2.7 0.36,12.73 0.38,16.22 0.08,13.71 0,27.43 0.03,41.15 0.03,19.01 0,38.03 -0.02,57.04 -0.01,5.88 1.29,21.16 -0.1,25.96 -0.66,2.3 -4.27,4.47 -5.99,6.03 -4.74,4.3 -9.26,8.84 -14,13.14 -11.88,10.8 -23.45,22.11 -34.96,33.31 -5.52,5.37 -10.98,11.61 -17.18,16.15 -6.55,-3.74 -15.51,-14.04 -21.19,-19.62 -10.69,-10.51 -21.82,-20.59 -32.62,-30.98 -4.45,-4.27 -9.03,-8.42 -13.5,-12.68 -1.49,-1.41 -4.39,-3.25 -5.04,-5.24 -1.38,-4.24 -0.2,-19.73 -0.21,-25.13 -0.04,-19.33 0.03,-38.66 0.01,-57.98 -0.02,-13.72 0,-27.43 -0.02,-41.15 0,-3.64 -1.07,-13.56 0.5,-16.45 0.86,-1.58 4.02,-2.85 5.5,-3.82 4.52,-2.96 9.05,-5.9 13.56,-8.86 10.94,-7.16 21.94,-14.22 32.83,-21.44 6.47,-4.3 13.02,-9.6 20.18,-12.63 z" />
        <path d="m 939.37,148.48 c -0.38,4.88 -5.97,10.68 -8.86,14.75 -7.26,10.23 -14.35,20.59 -21.42,30.96 -28.05,41.13 -55.63,82.63 -84.01,123.53 -23.44,33.79 -45.5,68.51 -68.63,102.5 -48.81,71.76 -95.39,145.12 -141.43,218.69 -21.51,34.36 -42.87,68.94 -63.57,103.81 -7.42,12.51 -14.92,24.97 -22.39,37.45 -3.81,6.36 -7.26,14.65 -12.38,19.97 -1.34,-7.23 -0.42,-15.21 -0.42,-22.55 -0.02,-14.03 -0.07,-28.06 -0.03,-42.09 0.13,-41.14 -0.06,-82.29 -0.03,-123.44 0.02,-17.77 0.08,-35.53 0.03,-53.3 -0.01,-5.11 -1.24,-19 0.31,-23.13 1.06,-2.84 6.32,-6.07 8.53,-8.22 7.57,-7.37 15.56,-14.38 23.3,-21.58 27.47,-25.53 55,-51 82.48,-76.51 67.26,-62.43 135,-124.42 203.2,-185.82 24.11,-21.7 47.97,-43.67 72.09,-65.37 11,-9.91 21.8,-20.25 33.23,-29.65 z" />
        <path d="m 83.7,148 c 14.77,11.17 28.24,24.82 41.96,37.26 21.25,19.29 42.56,38.49 63.76,57.83 63.74,58.13 127.64,116.09 191.1,174.54 29.53,27.19 58.75,54.71 88.26,81.93 9.23,8.52 18.58,16.97 27.63,25.69 3.05,2.93 8.6,6.39 10.53,10.15 1.64,3.19 0.44,13.74 0.48,17.75 0.18,15.58 -0.02,31.17 -0.01,46.76 0.06,47.06 0.04,94.13 0.05,141.2 0.01,13.8 0.21,27.61 -0.15,41.39 -0.14,5.5 1.29,12.54 -0.92,17.57 -17.64,-30.82 -36.5,-61.06 -55.06,-91.34 C 374.83,583.86 295.27,461.12 213.54,339.61 182.75,293.83 152.08,247.87 120.44,202.66 111.45,189.82 102.5,176.91 93.74,163.91 91.03,159.9 84.33,152.45 83.7,148 Z" />
      </g>
    </svg>
  )
}

/* ————— Shared bits ————— */

function SpectrumTick({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-px w-10 spectrum-line ${className}`}
      aria-hidden="true"
    />
  )
}

function SectionEyebrow({
  index,
  label,
  color = "#818cf8",
}: {
  index: string
  label: string
  color?: string
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <SpectrumTick />
      <span
        style={{
          fontFamily: "PolenticalNeon, Outfit, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color,
        }}
      >
        {index}
      </span>
      <span
        className="w-1 h-1 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily: "PolenticalNeon, Outfit, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#9b9bb4",
        }}
      >
        {label}
      </span>
      <SpectrumTick />
    </div>
  )
}

/* ————— Scroll reveal ————— */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  )
}

/* ————— Animated number ————— */

function CountUp({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    let raf: number
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, target])

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

/* ————— Top scroll progress ————— */

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full spectrum-line origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}

/* ————— Hero backdrop: engineering grid + drifting glow + particles ————— */

function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let raf: number
    let t = 0

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.00012 + 0.00004,
      opacity: Math.random() * 0.5 + 0.08,
    }))

    function draw() {
      const w = canvas!.width
      const h = canvas!.height
      ctx.clearRect(0, 0, w, h)

      // Base
      ctx.fillStyle = "#07070d"
      ctx.fillRect(0, 0, w, h)

      // Engineering grid
      const grid = 56
      ctx.strokeStyle = "rgba(99, 102, 241, 0.055)"
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let gx = 0; gx <= w; gx += grid) {
        ctx.moveTo(gx + 0.5, 0)
        ctx.lineTo(gx + 0.5, h)
      }
      for (let gy = 0; gy <= h; gy += grid) {
        ctx.moveTo(0, gy + 0.5)
        ctx.lineTo(w, gy + 0.5)
      }
      ctx.stroke()

      // Drifting glow orbs
      const orbs = [
        {
          x: 0.24 + Math.sin(t * 0.4) * 0.05,
          y: 0.34 + Math.cos(t * 0.3) * 0.05,
          r: 0.42,
          color: "#6366f1",
          a: 0.13,
        },
        {
          x: 0.78 + Math.cos(t * 0.25) * 0.05,
          y: 0.3 + Math.sin(t * 0.35) * 0.06,
          r: 0.34,
          color: "#8b5cf6",
          a: 0.11,
        },
        {
          x: 0.6 + Math.sin(t * 0.18) * 0.04,
          y: 0.75 + Math.cos(t * 0.22) * 0.05,
          r: 0.28,
          color: "#c026d3",
          a: 0.07,
        },
        {
          x: 0.1 + Math.cos(t * 0.3) * 0.03,
          y: 0.85 + Math.sin(t * 0.26) * 0.04,
          r: 0.24,
          color: "#312e81",
          a: 0.1,
        },
      ]
      for (const orb of orbs) {
        const g = ctx.createRadialGradient(
          orb.x * w,
          orb.y * h,
          0,
          orb.x * w,
          orb.y * h,
          orb.r * w,
        )
        g.addColorStop(
          0,
          orb.color +
            Math.round(orb.a * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        g.addColorStop(1, orb.color + "00")
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      }

      // Rising particles
      for (const p of particles) {
        p.y -= p.speed
        if (p.y < 0) p.y = 1
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`
        ctx.fill()
      }

      // Horizon glow line
      const hy = h * 0.72
      const hg = ctx.createLinearGradient(0, hy - 60, 0, hy + 60)
      hg.addColorStop(0, "rgba(139, 92, 246, 0)")
      hg.addColorStop(0.5, "rgba(139, 92, 246, 0.05)")
      hg.addColorStop(1, "rgba(139, 92, 246, 0)")
      ctx.fillStyle = hg
      ctx.fillRect(0, hy - 60, w, 120)

      // Vignette
      const vig = ctx.createRadialGradient(
        w / 2,
        h / 2,
        h * 0.25,
        w / 2,
        h / 2,
        h * 0.95,
      )
      vig.addColorStop(0, "rgba(0,0,0,0)")
      vig.addColorStop(1, "rgba(4,4,9,0.75)")
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, w, h)

      t += 0.008
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  )
}

/* ————— Violet card render (stylized expansion card) ————— */

function VioletCardRender() {
  // Connector finger geometry
  const fingerY = 300
  const fingerH = 34
  const pinW = 6
  const pinGap = 3
  const groupA = Array.from({ length: 8 }, (_, i) => 150 + i * (pinW + pinGap))
  const groupB = Array.from({ length: 22 }, (_, i) => 236 + i * (pinW + pinGap))

  const traces = [
    "M270 190 H220 V150 H168",
    "M270 215 H232 V242 H182 V268",
    "M400 184 H452 V150 H494",
    "M400 246 H442 V282 L428 298",
    "M300 265 V286 H246 L222 298",
    "M352 265 V282 H392 L410 298",
  ]

  return (
    <svg
      viewBox="0 0 640 420"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of the Violet expansion card"
    >
      <defs>
        <linearGradient id="pcbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15151f" />
          <stop offset="55%" stopColor="#0e0e19" />
          <stop offset="100%" stopColor="#0a0a13" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9b977" />
          <stop offset="100%" stopColor="#7d6230" />
        </linearGradient>
        <linearGradient id="bracketGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2c2c44" />
          <stop offset="100%" stopColor="#14142a" />
        </linearGradient>
        <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1e34" />
          <stop offset="100%" stopColor="#0f0f1f" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cardShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Floor shadow + violet aura */}
      <ellipse cx="330" cy="392" rx="250" ry="22" fill="url(#cardShadow)" />
      <ellipse
        cx="330"
        cy="388"
        rx="210"
        ry="14"
        fill="#6d28d9"
        opacity="0.12"
      />

      {/* PCIe bracket */}
      <rect
        x="98"
        y="88"
        width="20"
        height="248"
        rx="2"
        fill="url(#bracketGrad)"
        stroke="#37375a"
        strokeWidth="1"
      />
      <rect x="102" y="100" width="12" height="30" rx="2" fill="#0b0b16" />
      {[150, 178, 206, 234, 262].map((y) => (
        <rect
          key={y}
          x="103"
          y={y}
          width="10"
          height="18"
          rx="2"
          fill="#0b0b16"
        />
      ))}
      <circle cx="108" cy="322" r="4" fill="#0b0b16" stroke="#37375a" />

      {/* Board body */}
      <rect
        x="118"
        y="108"
        width="402"
        height="196"
        rx="10"
        fill="url(#pcbGrad)"
        stroke="#2e2e4e"
        strokeWidth="1.5"
      />

      {/* Corner mounting holes */}
      {[
        [148, 136],
        [492, 136],
        [492, 276],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle
            cx={cx}
            cy={cy}
            r="9"
            fill="#0a0a14"
            stroke="#3b3b60"
            strokeWidth="1.5"
          />
          <circle cx={cx} cy={cy} r="3" fill="#1c1c30" />
        </g>
      ))}

      {/* Capacitor bank */}
      {[176, 198, 220, 242].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="126"
            width="12"
            height="30"
            rx="3"
            fill="#1c1c30"
            stroke="#34345a"
          />
          <line
            x1={x + 2}
            y1="132"
            x2={x + 10}
            y2="132"
            stroke="#3f3f6a"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Power stages (right side) */}
      {[448, 470, 492].map((x) => (
        <rect
          key={x}
          x={x}
          y="176"
          width="14"
          height="52"
          rx="2"
          fill="#191930"
          stroke="#33335a"
        />
      ))}

      {/* Traces — underlay */}
      {traces.map((d) => (
        <path
          key={`u-${d}`}
          d={d}
          fill="none"
          stroke="rgba(99,102,241,0.16)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {/* Traces — animated flow */}
      {traces.map((d) => (
        <path
          key={`t-${d}`}
          d={d}
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="trace-flow"
          opacity="0.85"
        />
      ))}
      {/* Trace endpoint pads */}
      {[
        [168, 150],
        [182, 268],
        [494, 150],
      ].map(([cx, cy]) => (
        <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="3.5" fill="#6366f1" />
      ))}

      {/* Core aura */}
      <ellipse
        cx="335"
        cy="215"
        rx="120"
        ry="78"
        fill="url(#coreGlow)"
        className="animate-core-pulse"
      />

      {/* Main AE core */}
      <rect
        x="268"
        y="163"
        width="134"
        height="104"
        rx="8"
        fill="url(#chipGrad)"
        stroke="#4b4b78"
        strokeWidth="1.5"
      />
      <rect
        x="276"
        y="171"
        width="118"
        height="88"
        rx="5"
        fill="none"
        stroke="#33335c"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <AtomskLogoMark size={42} color="rgba(167,139,250,0.9)" x={314} y={191} />
      <text
        x="335"
        y="256"
        textAnchor="middle"
        fontFamily="PolenticalNeon, Outfit, sans-serif"
        fontSize="8.5"
        letterSpacing="2.5"
        fill="#6d6d96"
      >
        AE CORE
      </text>

      {/* Silkscreen */}
      <text
        x="148"
        y="300"
        fontFamily="PolenticalNeon, Outfit, sans-serif"
        fontSize="11"
        letterSpacing="4"
        fill="#4d4d74"
      >
        VIOLET V1
      </text>
      <text
        x="335"
        y="300"
        textAnchor="middle"
        fontFamily="PolenticalNeon, Outfit, sans-serif"
        fontSize="7"
        letterSpacing="2"
        fill="#4d4d74"
      >
        AE MULTIPLIER
      </text>
      <text
        x="494"
        y="300"
        textAnchor="end"
        fontFamily="PolenticalNeon, Outfit, sans-serif"
        fontSize="7"
        letterSpacing="2"
        fill="#3d3d5c"
      >
        BY ATOMSK
      </text>

      {/* Edge solder dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={140 + i * 14} cy="118" r="1.6" fill="#3a3a5e" />
      ))}

      {/* Connector notch */}
      <rect x="222" y="300" width="12" height={fingerH + 6} fill="#07070d" />

      {/* Gold connector fingers */}
      {[...groupA, ...groupB].map((x) => (
        <rect
          key={x}
          x={x}
          y={fingerY}
          width={pinW}
          height={fingerH}
          rx="1"
          fill="url(#goldGrad)"
          opacity="0.9"
        />
      ))}

      {/* Highlight sweep across board */}
      <line
        x1="130"
        y1="112"
        x2="380"
        y2="112"
        stroke="rgba(167,139,250,0.35)"
        strokeWidth="1"
      />
    </svg>
  )
}

/* ————— Navigation ————— */

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Numbers", href: "#numbers" },
  { label: "Company", href: "#company" },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(7,7,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid #22223a" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <AtomskLogoMark size={40} color="#ffffff" />
          <span className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "PolenticalNeon, Barlow, sans-serif",
                fontWeight: 400,
                fontSize: "1.3rem",
                letterSpacing: "0.1em",
              }}
              className="text-white uppercase"
            >
              Atomsk
            </span>
            <span className="spectrum-line h-px w-full mt-1 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
              }}
              className="nav-link uppercase text-[#9b9bb4] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#updates"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
            className="uppercase px-5 py-2.5 text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)] hover:-translate-y-px"
          >
            Get updates
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-px bg-white transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-transform duration-300 ${
              open ? "-translate-y-[9.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 340 : 0,
          background: "rgba(7,7,13,0.97)",
          borderBottom: open ? "1px solid #22223a" : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.95rem",
                letterSpacing: "0.12em",
              }}
              className="uppercase text-[#c5c5da]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#updates"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
            className="uppercase text-center px-5 py-3 text-white mt-2"
          >
            Get updates
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ————— Hero ————— */

function HeroCallout({
  label,
  side,
  top,
  delay,
}: {
  label: string
  side: "left" | "right"
  top: string
  delay: string
}) {
  return (
    <div
      className={`hidden lg:flex items-center gap-3 absolute ${
        side === "left" ? "-left-8 flex-row-reverse" : "-right-8"
      } animate-fade-up`}
      style={{
        top,
        animationDelay: delay,
        animationFillMode: "forwards",
        opacity: 0,
      }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-60"
          style={{ animation: "pulse-glow 2s ease infinite" }}
        />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a78bfa]" />
      </span>
      <span
        className={`h-px w-12 bg-gradient-to-r ${
          side === "left"
            ? "from-[#8b5cf6]/70 to-transparent rotate-180"
            : "from-[#8b5cf6]/70 to-transparent"
        }`}
      />
      <span
        style={{
          fontFamily: "PolenticalNeon, Outfit, sans-serif",
          fontSize: "0.68rem",
          letterSpacing: "0.22em",
          color: "#9b9bb4",
        }}
        className="uppercase whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackdrop />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #07070d)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
        {/* Copy */}
        <div>
          <div
            className="animate-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-9"
            style={{
              border: "1px solid rgba(139,92,246,0.35)",
              background: "rgba(139,92,246,0.07)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]"
              style={{ animation: "pulse-glow 2s ease infinite" }}
            />
            <span
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.24em",
                color: "#c4b5fd",
                textTransform: "uppercase",
              }}
            >
              Advanced Efficiency Multiplier technology
            </span>
          </div>

          <h1
            className="animate-fade-up-delay-1"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.6rem, 5.6vw, 4.9rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
            }}
          >
            <span className="text-white block">Inference chips</span>
            <span className="spectrum-text block">
              with{" "}
              <span className="relative inline-block">
                AE Multipliers.
                <span className="spectrum-line absolute left-0 right-0 -bottom-1.5 h-[3px] opacity-80" />
              </span>
            </span>
          </h1>

          <p
            className="mt-8 text-[#9b9bb4] max-w-lg animate-fade-up-delay-2"
            style={{
              fontFamily: "PolenticalNeon, Outfit, sans-serif",
              fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
              lineHeight: 1.8,
            }}
          >
            Atomsk hardware runs large language and diffusion models on AE
            Multipliers — our Advanced Efficiency Multiplier architecture.
            Compressed HPMT weights decode directly in hardware.
            Datacenter-class models at desktop power and price.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a
              href="#updates"
              className="group relative px-8 py-4 text-white text-center transition-all duration-300 hover:scale-[1.03] violet-glow overflow-hidden"
              style={{
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 700,
                fontSize: "0.92rem",
                letterSpacing: "0.06em",
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6 55%, #a855f7)",
              }}
            >
              <span className="relative z-10">Get updates →</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #7c7ff6, #a78bfa 55%, #c084fc)",
                }}
              />
            </a>
            <a
              href="#numbers"
              className="px-8 py-4 text-center text-[#a5b4fc] transition-all duration-300 hover:text-white hover:bg-white/5 frame-ticks"
              style={{
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 700,
                fontSize: "0.92rem",
                letterSpacing: "0.06em",
                border: "1px solid rgba(129,140,248,0.28)",
              }}
            >
              See the numbers
            </a>
          </div>

          {/* Meta row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up-delay-4">
            {[
              "Bit-exact decode",
              "CPU · simulation · FPGA",
              "250 MHz FPGA validation",
            ].map((m) => (
              <div key={m} className="flex items-center gap-2.5">
                <span
                  className="w-1 h-1 rotate-45 bg-[#8b5cf6]"
                  style={{ boxShadow: "0 0 6px rgba(139,92,246,0.9)" }}
                />
                <span
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    color: "#9b9bb4",
                    textTransform: "uppercase",
                  }}
                >
                  {m}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card render */}
        <div className="relative animate-fade-up-delay-2">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 65%)",
            }}
          />
          <div className="animate-float-y">
            <VioletCardRender />
          </div>
          <HeroCallout
            label="AE Multiplier datapath"
            side="right"
            top="38%"
            delay="0.9s"
          />
          <HeroCallout label="PCIe card" side="right" top="72%" delay="1.05s" />
          <HeroCallout
            label="Under 75 W target"
            side="left"
            top="30%"
            delay="1.2s"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span
          style={{
            fontFamily: "PolenticalNeon, Outfit, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9b9bb4",
          }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8b5cf6] to-transparent" />
      </div>
    </section>
  )
}

/* ————— Stat strip ————— */

const STAT_ITEMS = [
  "$499 target retail",
  "128 GB on-card memory",
  "Under 75 W",
  "Up to 70B-parameter models",
]

function StatStrip() {
  const row = [...STAT_ITEMS, ...STAT_ITEMS]
  return (
    <div
      className="relative py-5 overflow-hidden marquee-paused"
      style={{
        background: "#0a0a13",
        borderTop: "1px solid #22223a",
        borderBottom: "1px solid #22223a",
      }}
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex items-center shrink-0"
            aria-hidden={half === 1}
          >
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center shrink-0">
                <span
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: i % 2 ? "#6d6d90" : "#a5a5c6",
                  }}
                  className="px-6"
                >
                  {item}
                </span>
                <span
                  className="inline-block w-1.5 h-1.5 rotate-45"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #d946ef)",
                    opacity: 0.8,
                  }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #0a0a13, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0a13, transparent)" }}
      />
    </div>
  )
}

/* ————— The problem ————— */

function ProblemSection() {
  return (
    <section className="relative py-28 px-6" style={{ background: "#07070d" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow index="01" label="The problem" />
          <h2
            className="text-center text-white"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            Inference is a memory problem,
            <br />
            <span className="gradient-text">not a math problem.</span>
          </h2>
          <p
            className="mt-7 max-w-2xl mx-auto text-center text-[#9b9bb4]"
            style={{
              fontFamily: "PolenticalNeon, Outfit, sans-serif",
              fontSize: "1.02rem",
              lineHeight: 1.85,
            }}
          >
            Running a large model means streaming billions of weights past the
            arithmetic, once per token. Conventional accelerators pay for
            multipliers that sit idle waiting for data. Our format moves the
            decode into the memory path, so bandwidth is the only bottleneck
            left. That is exactly where an accelerator should spend its money.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ————— Technology ————— */

const TECH_POINTS = [
  {
    num: "01",
    body: "Weights ship in HPMT, our hardware-native compressed format.",
  },
  {
    num: "02",
    body: "The datapath decodes weights directly through AE Multipliers.",
  },
  {
    num: "03",
    body: "At our default setting, Mistral-7B perplexity changes by just +0.14 — better than leading 4-bit quantization methods at comparable size.",
  },
  {
    num: "04",
    body: "Verified bit-exact: one weight file, identical decode on CPU, simulation, and FPGA.",
  },
]

function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative py-28 px-6"
      style={{
        background: "#0a0a13",
        borderTop: "1px solid #22223a",
        borderBottom: "1px solid #22223a",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow index="02" label="Technology" />
          <h2
            className="text-center text-white"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            Compressed at rest.
            <br />
            <span className="gradient-text">Exact in flight.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {TECH_POINTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div
                className="card-hover frame-ticks relative p-8 h-full group"
                style={{ background: "#0d0d18", border: "1px solid #22223a" }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] spectrum-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                  }}
                  className="text-outline"
                >
                  {p.num}
                </span>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "#c5c5da",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ————— Products ————— */

const VIOLET_SPECS = [
  "$499 retail",
  "128 GB quad DDR5, user-installable",
  "Under 75 W",
  "7B-class conversational speed",
  "70B-class models entirely on-card",
]

const ULTRAVIOLET_SPECS = [
  "2,600+ tokens/s per card at batch 16",
  "45 mJ per token",
  ">10× lower cost per token vs. H100-class systems",
  "SD3-class images in ~2.2 s",
]

function SpecList({
  label,
  items,
  accent,
}: {
  label: string
  items: string[]
  accent: string
}) {
  return (
    <div className="mt-7 pt-6" style={{ borderTop: "1px solid #1f1f38" }}>
      <p
        style={{
          fontFamily: "NameSmile, Barlow, sans-serif",
          fontWeight: 700,
          fontSize: "0.72rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: "1rem",
        }}
      >
        {label}
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3.5">
            <span
              className="inline-block w-1.5 h-1.5 rotate-45 shrink-0"
              style={{
                background: "linear-gradient(135deg, #6366f1, #d946ef)",
              }}
            />
            <span
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.92rem",
                color: "#c5c5da",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#07070d" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[380px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow index="03" label="Products" />
          <h2
            className="text-center text-white mb-6"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            <span className="gradient-text">Products.</span>
          </h2>
          <p
            className="text-[#9b9bb4] max-w-xl mx-auto text-center"
            style={{
              fontFamily: "PolenticalNeon, Outfit, sans-serif",
              fontSize: "1.02rem",
              lineHeight: 1.8,
            }}
          >
            Violet and Ultraviolet are in development. All chip specifications
            are target or modeled figures.
          </p>
        </Reveal>

        {/* Timeline spine */}
        <div className="hidden md:block relative mt-10 mb-[-1px]">
          <div className="h-px w-full spectrum-line opacity-40" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-stretch mt-8 md:mt-10">
          {/* Violet */}
          <Reveal>
            <div id="violet" className="h-full relative">
              <div
                className="hidden md:block absolute -top-[21px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
                style={{
                  background: "#a78bfa",
                  boxShadow:
                    "0 0 0 5px rgba(167,139,250,0.18), 0 0 16px rgba(167,139,250,0.8)",
                }}
              />
              <div
                className="card-hover frame-ticks p-9 h-full relative"
                style={{
                  background: "#0d0d18",
                  border: "1px solid rgba(124,58,237,0.45)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] spectrum-line" />
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c4b5fd",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]"
                    style={{ animation: "pulse-glow 2s ease infinite" }}
                  />
                  In development · Consumer
                </div>
                <h3
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 900,
                    fontSize: "2.6rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                  className="text-white mb-2"
                >
                  Violet.
                </h3>
                <p
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#a78bfa",
                    letterSpacing: "0.02em",
                    marginBottom: "1.4rem",
                    lineHeight: 1.4,
                  }}
                >
                  A 70B-class lab on a PCIe card.
                </p>
                <p
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    color: "#9b9bb4",
                  }}
                >
                  Local inference keeps your data on your machine and your costs
                  flat. Violet makes local practical for models that used to
                  need a rack.
                </p>
                <SpecList
                  label="Target specs"
                  items={VIOLET_SPECS}
                  accent="#c4b5fd"
                />
                <p
                  className="mt-7"
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "#9b9bb4",
                  }}
                >
                  FPGA developer kits available first, for early partners.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Ultraviolet */}
          <Reveal delay={0.15}>
            <div id="ultraviolet" className="h-full relative">
              <div
                className="hidden md:block absolute -top-[21px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
                style={{ background: "#07070d", border: "2px solid #6366f1" }}
              />
              <div
                className="card-hover p-9 h-full relative"
                style={{ background: "#0b0b16", border: "1px solid #22223a" }}
              >
                <div
                  className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(99,102,241,0.12), transparent 70%)",
                  }}
                />
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
                  style={{
                    background: "rgba(99,102,241,0.09)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#a5b4fc",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] opacity-60" />
                  In development · Datacenter
                </div>
                <h3
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 900,
                    fontSize: "2.6rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                  className="gradient-text mb-2"
                >
                  Ultraviolet.
                </h3>
                <p
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#818cf8",
                    letterSpacing: "0.02em",
                    marginBottom: "1.4rem",
                    lineHeight: 1.4,
                  }}
                >
                  Datacenter economics, re-cut.
                </p>
                <p
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    color: "#9b9bb4",
                  }}
                >
                  The same datapath, scaled to HBM3e.
                </p>
                <SpecList
                  label="Modeled specs"
                  items={ULTRAVIOLET_SPECS}
                  accent="#a5b4fc"
                />
                <p
                  className="mt-7"
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                    color: "#6d6d90",
                  }}
                >
                  Based on internal TCO modeling. Methodology available on
                  request.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* First hardware callout */}
        <Reveal delay={0.2}>
          <div
            className="mt-12 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden"
            style={{ background: "#0d0d18", border: "1px solid #22223a" }}
          >
            <div className="absolute inset-y-0 left-0 w-[3px] spectrum-line" />
            <div className="pl-3">
              <p
                style={{
                  fontFamily: "NameSmile, Barlow, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  color: "#f2f2fa",
                  marginBottom: "0.3rem",
                }}
              >
                First hardware: FPGA developer kits.
              </p>
              <p
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.88rem",
                  color: "#9b9bb4",
                }}
              >
                For early partners.
              </p>
            </div>
            <a
              href="#updates"
              className="shrink-0 px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.5)] hover:-translate-y-px"
              style={{
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                color: "#fff",
              }}
            >
              Get updates →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ————— Numbers ————— */

function NumbersSection() {
  return (
    <section
      id="numbers"
      className="relative overflow-hidden py-28 px-6"
      style={{
        background: "#0a0a13",
        borderTop: "1px solid #22223a",
        borderBottom: "1px solid #22223a",
      }}
    >
      {/* Ambient diagonal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(99,102,241,0.07) 50%, rgba(217,70,239,0.06) 65%, transparent 85%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px spectrum-line opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px spectrum-line opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow index="04" label="Numbers" />
          <h2
            className="text-center text-white mb-14"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            Measured, <span className="gradient-text">not promised.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <p
              className="spectrum-text spectrum-animated"
              style={{
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(4rem, 12vw, 10rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              <CountUp target={250} suffix=" MHz" />
            </p>
            <p
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#c5c5da",
              }}
              className="mt-4"
            >
              Bit-exact FPGA validation
            </p>
          </div>
        </Reveal>

        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ background: "#1a1a2e", border: "1px solid #1a1a2e" }}
        >
          {[
            {
              value: "+0.14",
              label:
                "Perplexity on Mistral-7B at default compression (internal measurement)",
            },
            {
              value: "1",
              label:
                "Weight file — identical decode on CPU, simulation, and FPGA",
            },
            {
              value: "Under NDA",
              label:
                "Datacenter figures are modeled, labeled, and reproducible",
            },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.1}>
              <div
                className="px-8 py-10 text-center h-full"
                style={{ background: "#0a0a13" }}
              >
                <p
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)",
                    lineHeight: 1,
                  }}
                  className="gradient-text"
                >
                  {s.value}
                </p>
                <div className="spectrum-line h-px w-8 mx-auto my-4 opacity-60" />
                <p
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    color: "#9b9bb4",
                    lineHeight: 1.7,
                  }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ————— Company ————— */

const CONSOLE_LINES = [
  { prompt: true, text: "hpmt verify model.weights" },
  { label: "CPU", text: "bit-exact match", ok: true },
  { label: "SIM", text: "bit-exact match", ok: true },
  { label: "FPGA", text: "bit-exact match · 250 MHz", ok: true },
  { label: "CORE", text: "AE Multiplier datapath", ok: true },
]

function ValidationPanel() {
  return (
    <div
      className="frame-ticks"
      style={{
        background: "#0a0a13",
        border: "1px solid #22223a",
        boxShadow:
          "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(99,102,241,0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-5 py-3.5"
        style={{ borderBottom: "1px solid #1a1a2e", background: "#0d0d18" }}
      >
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: "#3a3a5c" }}
        />
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: "#3a3a5c" }}
        />
        <span className="w-3 h-3 rounded-full spectrum-line" />
        <span
          className="ml-3"
          style={{
            fontFamily: "PolenticalNeon, Outfit, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6d6d90",
          }}
        >
          hpmt — validation console
        </span>
      </div>
      {/* Body */}
      <div className="px-6 py-6 space-y-3.5">
        {CONSOLE_LINES.map((line, i) =>
          line.prompt ? (
            <div key={i} className="flex items-center gap-2.5">
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  color: "#8b5cf6",
                  fontSize: "0.88rem",
                }}
              >
                $
              </span>
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.88rem",
                  color: "#f2f2fa",
                }}
              >
                {line.text}
              </span>
            </div>
          ) : (
            <div key={i} className="flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: "#34d399",
                  boxShadow: "0 0 6px rgba(52,211,153,0.7)",
                }}
              />
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.82rem",
                  letterSpacing: "0.14em",
                  color: "#818cf8",
                  minWidth: "5.5rem",
                }}
              >
                {line.label}
              </span>
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.82rem",
                  color: "#9b9bb4",
                }}
              >
                {line.text}
              </span>
            </div>
          ),
        )}
        <div className="flex items-center gap-2.5 pt-1">
          <span
            style={{
              fontFamily: "PolenticalNeon, Outfit, sans-serif",
              color: "#8b5cf6",
              fontSize: "0.88rem",
            }}
          >
            $
          </span>
          <span
            className="inline-block w-2.5 h-4 animate-blink"
            style={{ background: "#a78bfa" }}
          />
        </div>
      </div>
    </div>
  )
}

function CompanySection() {
  return (
    <section
      id="company"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#07070d" }}
    >
      <div
        className="absolute -left-40 top-1/3 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <SpectrumTick />
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#818cf8",
                }}
              >
                05
              </span>
              <span
                className="w-1 h-1 rounded-full bg-[#818cf8]"
                style={{ boxShadow: "0 0 8px #818cf8" }}
              />
              <span
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#9b9bb4",
                }}
              >
                Company
              </span>
            </div>
            <h2
              className="text-white mb-8"
              style={{
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
              }}
            >
              Small team.
              <br />
              <span className="gradient-text">One idea.</span>
            </h2>
            <div
              className="space-y-5"
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.98rem",
                lineHeight: 1.85,
                color: "#9b9bb4",
              }}
            >
              <p>
                Atomsk was founded on a single observation: the mathematics
                decides the economics of inference.
              </p>
              <p>The hardware is validated on FPGA today.</p>
              <p style={{ color: "#c5c5da" }}>
                First silicon is in development.
              </p>
              <p>Founded by [Founder name] · [Location]</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <ValidationPanel />
            {/* Validation badge */}
            <div
              className="absolute -bottom-5 left-8 px-5 py-3 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                fontFamily: "NameSmile, Barlow, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                boxShadow: "0 12px 40px rgba(99,102,241,0.4)",
              }}
            >
              <AtomskLogoMark size={20} color="#ffffff" />
              Validated on FPGA
            </div>
            {/* Decorative rear panel */}
            <div
              className="absolute -top-6 -right-6 -z-10 inset-y-12 left-16"
              style={{
                border: "1px solid #1f1f38",
                background:
                  "linear-gradient(160deg, rgba(139,92,246,0.05), transparent 60%)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ————— Roadmap + updates ————— */

const ROADMAP_ITEMS = [
  "FPGA developer kits for early partners.",
  "Violet silicon in development.",
  "Datacenter TCO white paper on request.",
]

function UpdatesSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="updates"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0a13", borderTop: "1px solid #22223a" }}
    >
      <div
        className="absolute left-1/2 top-16 -translate-x-1/2 w-[680px] h-[360px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionEyebrow index="06" label="Roadmap" />
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "NameSmile, Barlow, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            What happens next
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            className="mt-14 relative p-10 md:p-12 text-left frame-ticks"
            style={{
              background: "#0d0d18",
              border: "1px solid rgba(139,92,246,0.4)",
              boxShadow:
                "0 0 60px rgba(99,102,241,0.12), 0 40px 90px -30px rgba(0,0,0,0.8)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-[3px] spectrum-line" />
            <div
              className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(139,92,246,0.13), transparent 70%)",
              }}
            />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
              <div className="flex-1">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.3)",
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c4b5fd",
                  }}
                >
                  In development
                </div>
                <ul className="space-y-3.5 mt-2">
                  {ROADMAP_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3.5">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#8b5cf6"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M5 8l2.5 2.5L11 5.5"
                          stroke="#d946ef"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "PolenticalNeon, Outfit, sans-serif",
                          fontSize: "0.93rem",
                          color: "#c5c5da",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:pt-2 md:text-right md:w-72">
                <div
                  style={{
                    fontFamily: "NameSmile, Barlow, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                    marginBottom: "1.4rem",
                  }}
                  className="gradient-text"
                >
                  Get updates
                </div>
                {submitted ? (
                  <p
                    style={{
                      fontFamily: "PolenticalNeon, Outfit, sans-serif",
                      fontSize: "0.92rem",
                      color: "#c4b5fd",
                    }}
                  >
                    On the list.
                  </p>
                ) : (
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (email.trim()) setSubmitted(true)
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      aria-label="Email address"
                      className="w-full px-4 py-3.5 text-white placeholder-[#6d6d90] focus:outline-none focus:border-[#8b5cf6] transition-colors"
                      style={{
                        fontFamily: "PolenticalNeon, Outfit, sans-serif",
                        fontSize: "0.9rem",
                        background: "#0a0a13",
                        border: "1px solid #22223a",
                      }}
                    />
                    <button
                      type="submit"
                      className="block w-full px-9 py-4 text-center text-white transition-all duration-300 hover:scale-[1.02] violet-glow"
                      style={{
                        fontFamily: "NameSmile, Barlow, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        letterSpacing: "0.08em",
                        background:
                          "linear-gradient(135deg, #6366f1, #8b5cf6 55%, #a855f7)",
                      }}
                    >
                      Get updates
                    </button>
                  </form>
                )}
                <p
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.75rem",
                    color: "#6d6d90",
                    marginTop: "1.5rem",
                    lineHeight: 1.7,
                  }}
                >
                  Investor and datacenter inquiries: [contact email]
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fact bar */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "AE Multiplier datapath",
              "Bit-exact on FPGA at 250 MHz",
              "Specs labeled target or modeled",
              "Nothing ships yet",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2.5">
                <span
                  className="inline-block w-1.5 h-1.5 rotate-45"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #d946ef)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.78rem",
                    color: "#9b9bb4",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ————— Footer ————— */

function Footer() {
  return (
    <footer
      className="relative px-6 pt-20 pb-12"
      style={{ background: "#05050a" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px spectrum-line opacity-60" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <AtomskLogoMark size={46} color="#ffffff" />
              <span className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "PolenticalNeon, Barlow, sans-serif",
                    fontWeight: 400,
                    fontSize: "1.3rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  className="text-white"
                >
                  Atomsk
                </span>
                <span className="spectrum-line h-px w-full mt-1 opacity-60" />
              </span>
            </div>
            <p
              style={{
                fontFamily: "PolenticalNeon, Outfit, sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#9b9bb4",
              }}
            >
              Inference chips with AE Multipliers.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p
                style={{
                  fontFamily: "NameSmile, Barlow, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#f2f2fa",
                  marginBottom: "1.25rem",
                }}
              >
                Site
              </p>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block mb-2.5 transition-colors hover:text-white"
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.88rem",
                    color: "#9b9bb4",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "NameSmile, Barlow, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#f2f2fa",
                  marginBottom: "1.25rem",
                }}
              >
                Products
              </p>
              {[
                { label: "Violet", href: "#violet" },
                { label: "Ultraviolet", href: "#ultraviolet" },
                { label: "FPGA dev kits", href: "#updates" },
                { label: "Get updates", href: "#updates" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block mb-2.5 transition-colors hover:text-white"
                  style={{
                    fontFamily: "PolenticalNeon, Outfit, sans-serif",
                    fontSize: "0.88rem",
                    color: "#9b9bb4",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #1a1a2e", paddingTop: "2rem" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p
            style={{
              fontFamily: "PolenticalNeon, Outfit, sans-serif",
              fontSize: "0.78rem",
              color: "#6d6d90",
              letterSpacing: "0.06em",
            }}
          >
            © 2025 Atomsk, Inc. All rights reserved.
          </p>
          <div className="flex gap-7">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "PolenticalNeon, Outfit, sans-serif",
                  fontSize: "0.78rem",
                  color: "#9b9bb4",
                  letterSpacing: "0.08em",
                }}
                className="hover:text-white transition-colors uppercase"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: "#07070d", overflowX: "hidden" }}>
      <div className="noise-overlay" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <ProblemSection />
        <TechnologySection />
        <ProductsSection />
        <NumbersSection />
        <CompanySection />
        <UpdatesSection />
      </main>
      <Footer />
    </div>
  )
}
