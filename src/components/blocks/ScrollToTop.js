import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component: ScrollToTop
// Description: Scroll to top of the window on route change
// Type: Functional Component

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
