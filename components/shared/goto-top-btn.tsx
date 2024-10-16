"use client";
import * as React from "react";
import { Button } from "../ui/button";

export const GoToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="sticky bottom-10 flex justify-end -pr-10">
        {visible && (
          <Button
            onClick={handleScrollToTop}
            className="bg-white border-primary text-primary hover:text-none p-3 rounded-full shadow-lg  transition"
            aria-label="Go to top"
            size="icon"
            variant="outline"
          >
            ↑
          </Button>
        )}
      </div>
    </>
  );
};
