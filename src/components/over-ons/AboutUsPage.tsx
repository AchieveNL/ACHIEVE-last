"use client";
import { useHomePageAnimation } from "@/hooks/useHomePageAnimation";
import LottieHelper from "../ui/LottieHelper";

import DynamicText from "../utils/DynamicText";
import { AboutUs, Locale } from "@/types/dbdatas";
import AnimatedText from "../ui/AnimatedText";

function AboutUsPage({
  locale,
  data,
}: {
  locale: Locale;
  data: AboutUs | null;
}) {
  const { animationData, loading } = useHomePageAnimation("aboutus");

  return (
    <section className={`flex container items-center 1000:flex-col py-[70px]`}>
      <div className={`basis-[50%] mb-[30px]`}>
        <LottieHelper jsonFile={animationData} />
      </div>
      <div className={`basis-[50%] flex flex-col gap-y-3`}>
        <div className={`mb-[1.5rem]`}>
          {locale === "en" ? (
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              Hello! We are{" "}
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                Achieve.
              </AnimatedText>
            </h1>
          ) : (
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              Hallo! Wij zijn{" "}
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                Achieve.
              </AnimatedText>
            </h1>
          )}
        </div>
        <div className={`text-base text-achieve-gray-600 leading-relaxed `}>
          {data && <DynamicText htmlString={data.introduction[locale]} />}
        </div>
      </div>
    </section>
  );
}
export default AboutUsPage;
