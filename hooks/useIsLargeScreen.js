
import { useEffect, useState } from "react";

export default function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsLargeScreen(mediaQuery.matches);
    handleChange(); // initial check
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isLargeScreen;
}
