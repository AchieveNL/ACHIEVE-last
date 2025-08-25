"use client";

import React, { useState } from "react";

interface CollapsibleDescriptionProps {
  description: string;
  showMoreText: string;
  showLessText: string;
  characterLimit?: number;
}

const CollapsibleDescription: React.FC<CollapsibleDescriptionProps> = ({
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
