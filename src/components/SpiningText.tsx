"use client";
// Made by @lasfito
import { useRef } from "react";

interface SpinningTextProps {
  text: string;
  size: number;
  children: React.ReactNode;
  mobile?: boolean;
}

function SpinningText({
  text,
  size,
  children,
  mobile = false,
}: SpinningTextProps) {
  const length = text.length;
  const deg = 360 / length;

  const circuloRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative z-10 flex cursor-pointer select-none items-center justify-center rounded-full font-bold text-spining-text"
      id="circle-wrapper"
      title="Click para pausar"
      style={{
        fontSize: `${size * 0.00425}rem`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={(e) => {
        if (!(e.target instanceof HTMLElement) || !circuloRef.current) return;

        if (circuloRef.current.style.animationPlayState === "paused") {
          circuloRef.current.style.animationPlayState = "running";
        } else if (circuloRef.current!.style.animationPlayState === "running") {
          circuloRef.current.style.animationPlayState = "paused";
        }
      }}
    >
      <div
        ref={circuloRef}
        className={`absolute inset-0  animate-spin `}
        style={{
          animation: `spin ${size * 0.08}s linear infinite`,
        }}
        id="circle"
      >
        <p>
          {text.split("").map((letra, i) => (
            <span
              className="absolute left-1/2 "
              key={i}
              style={{
                transform: `rotate(${i * deg}deg)`,
                transformOrigin: `0 ${size / 2}px`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
}

export default SpinningText;
