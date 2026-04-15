"use client";

import gsap from "gsap";
import { ReactNode, useRef } from "react";

type MagneticLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

export function MagneticLink({ href, label, children }: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const element = linkRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.28,
      y: y * 0.28,
      duration: 0.35,
      ease: "power3.out",
    });
  }

  function handleLeave() {
    gsap.to(linkRef.current, {
      x: 0,
      y: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.35)",
    });
  }

  return (
    <a
      aria-label={label}
      href={href}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      ref={linkRef}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
