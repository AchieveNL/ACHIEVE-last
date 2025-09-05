import sanitizeHtml from "sanitize-html";
import React from "react";

interface DynamicTextProps {
  htmlString: string;
  allowedTags?: string[];
  allowedAttributes?: { [key: string]: string[] };
  className?: string;
}

const DynamicText: React.FC<DynamicTextProps> = ({
  htmlString,
  allowedTags = [
    "a",
    "strong",
    "i",
    "em",
    "br",
    "h1",
    "h2",
    "h3",
    "h4",
    "u",
    "s",
    "p",
    "ul",
    "ol",
    "li",
  ],
  allowedAttributes = { a: ["href"] },
  className,
}) => {
  const sanitizedHTML = sanitizeHtml(htmlString, {
    allowedTags,
    allowedAttributes,
  });

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default DynamicText;
