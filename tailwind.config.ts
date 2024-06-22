import { withUt } from "uploadthing/tw";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default withUt({
  content: ["./src/**/*.tsx", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}) satisfies Config;

//
