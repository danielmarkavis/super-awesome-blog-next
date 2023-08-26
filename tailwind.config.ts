import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "sub": "var(--sub)",
        "level-0": "var(--level-0)",
        "level-1": "var(--level-1)",
        "level-2": "var(--level-2)",
        "accent": "var(--accent)",
        "accent-alt": "var(--accent-alt)",
        "transparent": {
          DEFAULT: "transparent",
        },
        "none": {
          DEFAULT: "none",
        },
      },
    },
  },
  plugins: [],
}
export default config
