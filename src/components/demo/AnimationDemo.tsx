"use client";
import React from "react";
import AnimatedText from "../ui/AnimatedText";
import AchieveGlitchText from "../ui/AchieveGlitchText";
import { useClientTranslations } from "../hooks/useClientTranslations";

const AnimationDemo = () => {
  const { locale } = useClientTranslations("hero");

  const dataText = locale === "en" ? "data" : "data";
  const creativityText = locale === "en" ? "creativity" : "creativiteit";

  return (
    <div className="min-h-screen bg-gradient-to-br from-achieve-gray-50 to-achieve-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-achieve-navy mb-4">
            Animation Showcase
          </h1>
          <p className="text-achieve-gray-600">
            Choose your favorite animation style for the hero section
          </p>
        </div>

        {/* Current Glitch Animation */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Current: Glitch Effect
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AchieveGlitchText
              speed={0.5}
              enableShadows={true}
              enableOnHover={false}
              className="text-achieve-purple"
            >
              {dataText}
            </AchieveGlitchText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AchieveGlitchText
              speed={0.5}
              enableShadows={true}
              enableOnHover={false}
              className="text-achieve-purple"
            >
              {creativityText}
            </AchieveGlitchText>
          </div>
        </div>

        {/* Animated Gradient */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Option 1: Animated Gradient
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AnimatedText
              animationType="gradient"
              className="text-achieve-purple"
            >
              {dataText}
            </AnimatedText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AnimatedText
              animationType="gradient"
              className="text-achieve-purple"
            >
              {creativityText}
            </AnimatedText>
          </div>
        </div>

        {/* Typewriter Effect */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Option 2: Typewriter Effect
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AnimatedText
              animationType="typewriter"
              className="text-achieve-purple"
              speed={150}
            >
              {dataText}
            </AnimatedText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AnimatedText
              animationType="typewriter"
              className="text-achieve-purple"
              speed={150}
            >
              {creativityText}
            </AnimatedText>
          </div>
        </div>

        {/* Morphing Text */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Option 3: Morphing Text (Hover Effect)
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AnimatedText
              animationType="morphing"
              className="text-achieve-purple"
            >
              {dataText}
            </AnimatedText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AnimatedText
              animationType="morphing"
              className="text-achieve-purple"
            >
              {creativityText}
            </AnimatedText>
          </div>
          <p className="text-sm text-achieve-gray-500 mt-4">
            Hover over the words to see the effect
          </p>
        </div>

        {/* Neon Glow */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Option 4: Neon Glow Effect
          </h2>
          <div className="text-3xl text-white leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AnimatedText animationType="neon" className="text-achieve-purple">
              {dataText}
            </AnimatedText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AnimatedText animationType="neon" className="text-achieve-purple">
              {creativityText}
            </AnimatedText>
          </div>
        </div>

        {/* Particle Effect */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Option 5: Particle Effect (Hover)
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <AnimatedText
              animationType="particle"
              className="text-achieve-purple"
            >
              {dataText}
            </AnimatedText>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <AnimatedText
              animationType="particle"
              className="text-achieve-purple"
            >
              {creativityText}
            </AnimatedText>
          </div>
          <p className="text-sm text-achieve-gray-500 mt-4">
            Hover over the words to see particles
          </p>
        </div>

        {/* Floating + Gradient Combination */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-achieve-navy mb-6">
            Option 6: Floating + Gradient Combination
          </h2>
          <div className="text-3xl text-achieve-navy leading-relaxed">
            {locale === "en" ? "Growing based on " : "Groeien op basis van "}
            <span className="animate-float">
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple"
              >
                {dataText}
              </AnimatedText>
            </span>
            {locale === "en" ? " and the power of " : " en de kracht van "}
            <span className="animate-float" style={{ animationDelay: "1s" }}>
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple"
              >
                {creativityText}
              </AnimatedText>
            </span>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-achieve-gray-600">
            Each animation can be customized with different speeds, colors, and
            timing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;
