import { useEffect, useRef, useState } from "react";

export const useBody = () => {
  const divRef = useRef(null);
  const [isScrollTop, setIsScrollTop] = useState(false);

  useEffect(() => {
    function checkScroll() {
      if (divRef.current) {
        const topBottom = divRef.current.getBoundingClientRect();
        if (topBottom.top <= 430) {
          setIsScrollTop(true);
        } else if (topBottom.top >= 430) {
          setIsScrollTop(false);
        }
      }
    }
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  function scrolledPage() {
    divRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return { divRef, isScrollTop, scrolledPage };
};
