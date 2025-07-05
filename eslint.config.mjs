import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript specific rules
      // "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      // "@typescript-eslint/prefer-const": "error",

      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // General JavaScript rules
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",

      // Next.js specific optimizations
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "warn",
    },
  },
];

export default eslintConfig;
