"use client";
import React, { useState } from "react";
import Image from "next/image";

const CompanyCard = ({
  name,
  logo,
  uniqueId,
}: {
  name: string;
  logo: string;
  uniqueId?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className="relative w-[200px] h-[120px] cursor-pointer overflow-hidden rounded-xl p-4 flex items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-company={uniqueId || name}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={120}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            isHovered ? "grayscale-0" : "grayscale"
          }`}
        />
      </div>
    </figure>
  );
};
export default CompanyCard;
