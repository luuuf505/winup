import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === "words" ? text.split(" ") : [...text];
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const from = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -40 }
        : { filter: "blur(10px)", opacity: 0, y: 40 },
    [direction]
  );

  const to = useMemo(
    () => [
      { filter: "blur(4px)", opacity: 0.5, y: 6 },
      { filter: "blur(0px)", opacity: 1, y: 0 }
    ],
    []
  );

  const keyframes = buildKeyframes(from, to);
  const times = [0, 0.6, 1];

  return (
    <p ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap" }}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={from}
          animate={inView ? keyframes : from}
          transition={{
            duration: stepDuration * 2,
            delay: (i * delay) / 1000,
            times,
            ease: "easeOut"
          }}
          onAnimationComplete={i === elements.length - 1 ? onAnimationComplete : undefined}
          style={{ display: "inline-block" }}
        >
          {el === " " ? "\u00A0" : el}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
