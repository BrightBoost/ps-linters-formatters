import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
const securityPlugin = await import("eslint-plugin-security").then(mod => mod.default || mod);


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      js,
      security: securityPlugin,
    },
    rules: {
      ...js.configs.recommended.rules, // brings in the recommended rules
      semi: ["error", "always"],
      "security/detect-eval-with-expression": "error",
    },
  },
]);
