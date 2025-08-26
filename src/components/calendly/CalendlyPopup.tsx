"use client";

import React, { useEffect, useState } from "react";
import "./CalendlyLoader.css";
import { InlineWidget } from "react-calendly";

export default function CalendlyPopup() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  let heightPixel = "90%";
  if (screenWidth >= 830 && screenWidth < 1400) {
    heightPixel = "80%";
  } else if (screenWidth < 830) {
    heightPixel = "60%";
  }

  let widthPixel = "90%";
  if (screenWidth >= 450 && screenWidth < 1400) {
    widthPixel = "100%";
  } else if (screenWidth < 450) {
    widthPixel = "95%";
  }

  const loaderDivArr = [-0.32, -0.16, 0];

  const styleObject = {
    width: widthPixel,
    height: heightPixel,
  };

  return (
    <div
      className={
        "bg-[#1f1f1f66] flex justify-center items-center z-[9000] w-full h-full absolute left-0 top-0 bottom-0 right-0"
      }
    >
      <div
        className={"w-full absolute flex z-[9000] justify-center items-center"}
      >
        {loaderDivArr.map((lD) => {
          return (
            <div
              style={{ animationDelay: `${lD}s` }}
              key={lD}
              className={
                "CalendlyLoaderCircle inline-block w-[18px] h-[18px] bg-[#e1e1e1] rounded-full"
              }
            ></div>
          );
        })}
      </div>
      <div
        className={
          "flex justify-center items-center h-[800px] w-[1600px] z-[9001]"
        }
      >
        <InlineWidget
          styles={styleObject}
          url="https://calendly.com/vrijblijvendgesprek"
        />
      </div>
    </div>
  );
}
