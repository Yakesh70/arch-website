"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { PortfolioCardImage } from "./PortfolioCardImage";

type ArchitectureListingCardProps = {
  href: string;
  images: string[];
  title: string;
};

export function ArchitectureListingCard({
  href,
  images,
  title,
}: ArchitectureListingCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLSpanElement | null>(null);
  const bottomTitleRef = useRef<HTMLSpanElement | null>(null);
  const centerTitleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (
      !cardRef.current ||
      !overlayRef.current ||
      !bottomTitleRef.current ||
      !centerTitleRef.current
    ) {
      return;
    }

    const card = cardRef.current;
    const overlay = overlayRef.current;
    const bottomTitle = bottomTitleRef.current;
    const centerTitle = centerTitleRef.current;
    const image = card.querySelector(".portfolioImage");

    const ctx = gsap.context(() => {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(bottomTitle, {
        opacity: 0.96,
        y: 0,
      });
      gsap.set(centerTitle, {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.96,
        y: 10,
      });

      const enter = () => {
        gsap.killTweensOf([overlay, bottomTitle, centerTitle, image]);

        gsap.to(overlay, {
          opacity: 1,
          duration: 0.42,
          ease: "power3.out",
        });
 
        if (image) {
  gsap.to(image, {
    scale: 1.12,
    duration: 0.001,
    ease: "power3.out",
          });
        }

        gsap.to(bottomTitle, {
          opacity: 0,
          y: 8,
          duration: 0.22,
          ease: "power2.out",
        });

        gsap.to(centerTitle, {
          xPercent: -50,
          yPercent: -50,
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.34,
          delay: 0.04,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf([overlay, bottomTitle, centerTitle, image]);

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.36,
          ease: "power3.out",
        });

        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.001,
            ease: "power1.out",
          });
        }

        gsap.to(centerTitle, {
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.96,
          y: 10,
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.to(bottomTitle, {
          opacity: 0.96,
          y: 0,
          duration: 0.28,
          delay: 0.02,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("focus", enter);
      card.addEventListener("blur", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
        card.removeEventListener("focus", enter);
        card.removeEventListener("blur", leave);
      };
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <motion.article
      className="portfolioCard portfolioCardLinked"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Link className="portfolioProjectToggle portfolioProjectLink" href={href} ref={cardRef}>
        <PortfolioCardImage
          autoplay={false}
          images={images}
          title={title}
          variant="default"
        />
        <span className="portfolioImageMeta portfolioImageMetaLinked">
          <span className="portfolioImageMetaOverlay" ref={overlayRef} />
          <span
            className="portfolioImageTitle portfolioImageTitleLinked portfolioImageTitleBottom"
            ref={bottomTitleRef}
          >
            {title}
          </span>
          <span
            className="portfolioImageTitle portfolioImageTitleLinked portfolioImageTitleCenter"
            ref={centerTitleRef}
          >
            {title}
          </span>
        </span>
      </Link>
    </motion.article>
  );
}
