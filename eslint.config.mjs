import next from "eslint-config-next/core-web-vitals";

const config = [
  { ignores: [".next/**", "node_modules/**", "out/**"] },
  ...next,
  {
    rules: {
      // Todo el proyecto usa <img> a proposito (sin next/image, igual que el demo hermano)
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
