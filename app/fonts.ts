import localFont from "next/font/local";

export const latinFont = localFont({
  src: "../public/fonts/distillery-strong.ttf",
  display: "swap",
  variable: "--font-latin", // Opsional: untuk CSS variable
});
