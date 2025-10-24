"use client";

import { useEffect, useRef, useState } from "react";
import { createAnimatable, utils } from "animejs";

export default function CircleFollower() {
  const demoRef = useRef(null);
  const circleRef = useRef(null);
  const [circleAnim, setCircleAnim] = useState(null);
  const rgb = useRef([164, 255, 79]);

  useEffect(() => {
    if (!demoRef.current || !circleRef.current) return;

    let bounds = demoRef.current.getBoundingClientRect();

    const refreshBounds = () => {
      bounds = demoRef.current.getBoundingClientRect();
    };

    // Create animatable
    const circle = createAnimatable(circleRef.current, {
      x: 0,
      y: 0,
      backgroundColor: 0,
      ease: "outExpo",
    });

    // Set initial animation (optional)
    circle.x(0, 500, "out(2)");
    circle.y(0, 500, "out(3)");
    circle.backgroundColor(rgb.current, 250);

    setCircleAnim(circle);

    const onMouseMove = (e) => {
      const { width, height, left, top } = bounds;
      const hw = width / 2;
      const hh = height / 2;
      const x = utils.clamp(e.clientX - left - hw, -hw, hw);
      const y = utils.clamp(e.clientY - top - hh, -hh, hh);

      rgb.current[0] = utils.mapRange(x, -hw, hw, 0, 164);
      rgb.current[2] = utils.mapRange(x, -hw, hw, 79, 255);

      circle.x(x).y(y).backgroundColor(rgb.current);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", refreshBounds);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", refreshBounds);
    };
  }, []);

  return (
    <div
      id="docs-demos"
      ref={demoRef}
      className="relative w-full h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden"
    >
      <div
        ref={circleRef}
        className="circle absolute w-16 h-16 rounded-full"
        style={{ backgroundColor: "rgb(164,255,79)" }}
      />
    </div>
  );
}

