import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './testgsap.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = textRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "150vh", background: "linear-gradient(45deg, #f3ec78, #af4261)" }}>
      <h1
        ref={textRef}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginTop: "50vh",
        }}
      >
        Wellness in Wonderland
      </h1>
    </div>
  );
};

export default AnimatedText;
