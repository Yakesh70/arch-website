"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type GalleryColumn = {
  label: string;
  images: string[];
};

type HomeGalleryProps = {
  columns: GalleryColumn[];
};

export function HomeGallery({ columns }: HomeGalleryProps) {
  return (
    <motion.section
      className="homeGallery"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Featured architecture portfolio"
    >
      {columns.map((column, index) => (
        <GallerySlider
          images={column.images}
          key={column.label}
          label={column.label}
          offset={index * 1400}
        />
      ))}
      <div className="lineOverlay lineOverlayTop" aria-hidden="true" />
      <div className="lineOverlay lineOverlayBottom" aria-hidden="true" />
    </motion.section>
  );
}

type GallerySliderProps = {
  images: string[];
  label: string;
  offset: number;
};

function GallerySlider({ images, label, offset }: GallerySliderProps) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 8200 + offset);

    return () => window.clearInterval(timer);
  }, [images.length, offset]);

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    const panel = panelRef.current;
    const image = imageRef.current;

    if (!panel || !image) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(image, {
      x: x * -18,
      y: y * -18,
      scale: 1.055,
      duration: 0.9,
      ease: "power3.out",
    });
  }

  function handleLeave() {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1.02,
      duration: 1,
      ease: "power3.out",
    });
  }

  return (
    <article
      className="galleryPanel"
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      ref={panelRef}
    >
      <AnimatePresence initial={false}>
        <motion.img
          alt={label}
          animate={{ opacity: 1, scale: 1.02 }}
          className="galleryImage"
          exit={{ opacity: 0, scale: 1.04 }}
          initial={{ opacity: 0, scale: 1.055 }}
          key={images[active]}
          ref={imageRef}
          src={images[active]}
          transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </article>
  );
}
