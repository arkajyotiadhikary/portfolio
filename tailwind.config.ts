import type { Config } from "tailwindcss";

const config: Config = {
      content: [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
            colors: {
                  dark: "#402B3A",
                  light: "#F8F4EC",
                  pink: "#FF9BD2",
                  darkpink: "#D63484",
            },
            extend: {
                  backgroundImage: {
                        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-conic":
                              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  },
            },
      },
      plugins: [],
};
export default config;
