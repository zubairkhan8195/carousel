import localFont from "next/font/local";

export const segoe_ui = localFont({
  variable: "--font-segoe-ui",
  display: "swap",

  src: [
    {
      path: "./segoe-ui/SegoeUI-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./segoe-ui/SegoeUI.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./segoe-ui/SegoeUI-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./segoe-ui/SegoeUI-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
