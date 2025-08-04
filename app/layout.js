import { Roboto } from "next/font/google";
import "./globals.css";
import TabletWrapper from "@/components/TabletWrapper";
import VantaBackground from "@/components/VantaBackground";
import StatusBar from "@/components/gui/StatusBar";
import BackgroundMusic from "@/components/music/BackgroundMusic";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "The Android Club | VIT Chennai",
  description:
    "Official website of The Android Club, VIT Chennai. Explore our events, projects, and tech-driven community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-poppins antialiased`}>
        <VantaBackground />
        <BackgroundMusic />
        <TabletWrapper> {children}</TabletWrapper>
      </body>
    </html>
  );
}
