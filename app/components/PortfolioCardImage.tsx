"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type PortfolioCardImageProps = {
  images: string[];
  title: string;
  variant?: "default" | "portrait";
  autoplay?: boolean;
};

export function PortfolioCardImage({
  images,
  title,
  variant = "default",
  autoplay = true,
}: PortfolioCardImageProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!autoplay || images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [autoplay, images.length]);

  return (
    <div
      className={`portfolioImageFrame ${
        variant === "portrait" ? "portfolioImageFramePortrait" : ""
      }`}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${title} project`}
          className={`portfolioImage ${
            variant === "portrait" ? "portfolioImagePortrait" : ""
          }`}
          initial={{ opacity: 0, scale: 1.035, y: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.985, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
