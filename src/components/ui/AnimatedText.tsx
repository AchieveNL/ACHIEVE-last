"use client";
import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  animationType?: "typewriter" | "gradient" | "morphing" | "neon" | "particle";
  speed?: number;
}

export const TypewriterText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  speed = 100,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + children[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, speed]);

  return (
    <span className={`${className} relative`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const GradientText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`${className} bg-gradient-to-r from-achieve-purple via-blue-500 to-achieve-purple bg-clip-text text-transparent animate-gradient-x bg-300% font-bold`}
    >
      {children}
    </span>
  );
};

export const MorphingText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`${className} relative inline-block cursor-pointer transition-all duration-300 transform hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`transition-all duration-300 ${
          isHovered ? "blur-sm opacity-0" : "blur-0 opacity-100"
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 transition-all duration-300 font-bold ${
          isHovered ? "blur-0 opacity-100" : "blur-sm opacity-0"
        }`}
      >
        {children.toUpperCase()}
      </span>
    </span>
  );
};

export const NeonText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`${className} relative font-bold animate-pulse`}
      style={{
        textShadow: `
          0 0 5px #8138FB,
          0 0 10px #8138FB,
          0 0 15px #8138FB,
          0 0 20px #8138FB,
          0 0 35px #8138FB,
          0 0 40px #8138FB
        `,
        filter: "brightness(1.2)",
      }}
    >
      {children}
    </span>
  );
};

export const ParticleText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <span className={`${className} relative inline-block group`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-achieve-purple rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        ))}
      </span>
    </span>
  );
};

// Combined component with all animations
const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  animationType = "gradient",
  speed = 100,
}) => {
  switch (animationType) {
    case "typewriter":
      return (
        <TypewriterText className={className} speed={speed}>
          {children}
        </TypewriterText>
      );
    case "gradient":
      return <GradientText className={className}>{children}</GradientText>;
    case "morphing":
      return <MorphingText className={className}>{children}</MorphingText>;
    case "neon":
      return <NeonText className={className}>{children}</NeonText>;
    case "particle":
      return <ParticleText className={className}>{children}</ParticleText>;
    default:
      return <GradientText className={className}>{children}</GradientText>;
  }
};

export default AnimatedText;
