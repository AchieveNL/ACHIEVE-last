"use client";

import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Link } from "@/i18n/navigation";

interface CollapsibleDescriptionProps {
  textFirst: string;
  textSecond: string;
  description: string;
  showMoreText: string;
  showLessText: string;
  characterLimit?: number;
}

const CollapsibleDescription: React.FC<CollapsibleDescriptionProps> = ({
  textFirst,
  textSecond,
  description,
  showMoreText,
  showLessText,
  characterLimit = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    description.length > characterLimit
      ? description.substring(0, characterLimit) + "..."
      : description;

  const shouldShowToggle = description.length > characterLimit;

  return (
    <div className="text-center max-w-xs text-gray-600 mx-auto">
      <p className="transition-all duration-300 leading-relaxed">
        {isExpanded ? description : truncatedDescription}
      </p>

      {isExpanded && (
        <div className={"flex justify-center items-center w-full gap-x-3 p-4"}>
          <CustomButton
            text={textFirst}
            clickFor={"calendly"}
            fontSize={12}
            paddingX={7}
            paddingY={7}
            scaleNum={1.1}
            iconSize={18}
          />
          <Link href="/tarieven">
            <CustomButton
              text={textSecond}
              fontSize={12}
              paddingX={7}
              paddingY={7}
              scaleNum={1.1}
              iconSize={18}
            />
          </Link>
        </div>
      )}

      {/* Toggle Button */}
      {shouldShowToggle && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-primary text-sm font-medium hover:text-purple-700 transition-colors duration-200 mt-2 block mx-auto underline"
        >
          {isExpanded ? showLessText : showMoreText}
        </button>
      )}
    </div>
  );
};

export default CollapsibleDescription;
