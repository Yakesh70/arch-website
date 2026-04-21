"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type PortfolioCardImageProps = {
  images: string[];
  title: string;
};

export function PortfolioCardImage({
  images,
  title,
}: PortfolioCardImageProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="portfolioImageFrame">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${title} project`}
          className="portfolioImage"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
