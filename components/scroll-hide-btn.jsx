"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

const ScrollHideButton = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      // Set a threshold value (e.g., 100 pixels from the bottom) to determine when to hide the button
      const threshold = 100;
      const isAtEnd =
        window.innerHeight + window.scrollY + threshold >=
        document.body.offsetHeight;

      // Only set isFixed to false if not close to the end of the page
      if (!isAtEnd) {
        setIsFixed(false);

        timeoutId = setTimeout(() => {
          setIsFixed(true);
        }, 600);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      className={`p-5 flex justify-between items-center ${
        isFixed ? "fixed bottom-0" : ""
      }`}
    >
      <Link href="/">
        <Button variant="ghost" size="lg">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ScrollHideButton;
