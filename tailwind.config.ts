import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    // 다른 JSX를 포함하는 디렉토리 경로 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
