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
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!cardRef.current || !overlayRef.current || !titleRef.current) {
      return;
    }

    const card = cardRef.current;
    const overlay = overlayRef.current;
    const titleEl = titleRef.current;
    const image = card.querySelector(".portfolioImage");

    const ctx = gsap.context(() => {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(titleEl, {
        left: 24,
        bottom: 24,
        top: "auto",
        xPercent: 0,
        yPercent: 0,
        letterSpacing: "0.1em",
        opacity: 0.96,
      });

      const enter = () => {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        });

        if (image) {
          gsap.to(image, {
            scale: 1.02,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        gsap.to(titleEl, {
          left: "50%",
          top: "50%",
          bottom: "auto",
          xPercent: -50,
          yPercent: -50,
          letterSpacing: "0.16em",
          opacity: 1,
          duration: 0.72,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        gsap.to(titleEl, {
          left: 24,
          top: "auto",
          bottom: 24,
          xPercent: 0,
          yPercent: 0,
          letterSpacing: "0.1em",
          opacity: 0.96,
          duration: 0.64,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
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
          <span className="portfolioImageTitle portfolioImageTitleLinked" ref={titleRef}>
            {title}
          </span>
        </span>
      </Link>
    </motion.article>
  );
}
