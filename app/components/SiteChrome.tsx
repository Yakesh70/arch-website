"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { MagneticLink } from "./MagneticLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Architecture", href: "/architectures" },
  { label: "Interior", href: "/interiors" },
  { label: "Team", href: "/team" },
  { label: "Service", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const socials = [
  { label: "Whatsapp", icon: "WA", href: "https://wa.me/918248686349" },
  {
    label: "Instagram",
    icon: "IG",
    href: "https://www.instagram.com/studiov_arc/",
  },
  {
    label: "Location",
    icon: "LO",
    href: "https://maps.app.goo.gl/4gc6gEn6qiMkHmL17",
  },
  { label: "Facebook", icon: "FB", href: "#" },
  {
    label: "LinkedIn",
    icon: "IN",
    href: "https://www.linkedin.com/search/results/all/?keywords=Studio%20V%20arc",
  },
  { label: "YouTube", icon: "YT", href: "#" },
];

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <main className="siteShell">
      <motion.div className="scrollProgress" style={{ scaleX }} />
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="siteHeader"
        initial={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link className="logoMark magneticLogo" href="/" aria-label="Studio V Arc home">
          <span>Studio</span>
          <strong>V</strong>
          <small>Arc</small>
        </Link>

        <nav className="navMenu" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                className={isActive ? "isActive" : undefined}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </motion.header>

      {children}

      <motion.footer
        animate={{ opacity: 1, y: 0 }}
        className="siteFooter"
        initial={{ opacity: 0, y: 18 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Copyright 2026 - All Rights Are Reserved</p>
        <div className="socialLinks" aria-label="Social links">
          {socials.map((social) => (
            <MagneticLink
              href={social.href}
              key={social.label}
              label={social.label}
            >
              {social.icon}
            </MagneticLink>
          ))}
        </div>
      </motion.footer>
    </main>
  );
}
