import { useEffect, useRef } from "react";
import "./GrowthLine.css";

// Traço orgânico único que atravessa a página, como um risco de lápis que
// cresce conforme a pessoa rola — metáfora de desenvolvimento infantil.
export default function GrowthLine() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      className="growth-line"
      viewBox="0 0 100 4000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M 20 0
           C 60 150, 10 300, 40 480
           C 70 640, 15 800, 30 980
           C 45 1140, 80 1260, 55 1440
           C 30 1610, 65 1780, 45 1960
           C 25 2120, 70 2260, 50 2440
           C 30 2600, 60 2760, 42 2940
           C 26 3100, 68 3260, 48 3440
           C 30 3600, 58 3780, 40 4000"
        fill="none"
        stroke="var(--olive)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
