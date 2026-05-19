"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { MagneticLink } from "./MagneticLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Architecture", href: "/architectures" },
  { label: "Interior", href: "/interiors" },
  { label: "Team", href: "/team" },
  { label: "Service", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialIcons = {
  whatsapp: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8.65 25.1 4.4 26.65l1.48-4.37A11.4 11.4 0 1 1 8.65 25.1Z" />
      <path d="M12.1 10.36c-.26-.58-.54-.6-.79-.61h-.68c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.49 3.99 6.16 5.43 3.05 1.2 3.67.96 4.33.9.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.93-1.11-2.64Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="7" width="18" height="18" rx="5" />
      <circle cx="16" cy="16" r="4.3" />
      <circle cx="21.7" cy="10.9" r="1" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 27.5s8-7.52 8-14a8 8 0 0 0-16 0c0 6.48 8 14 8 14Z" />
      <circle cx="16" cy="13.5" r="3" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <text x="10.4" y="25.8">f</text>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <text x="5.8" y="24.6">in</text>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="5" y="9" width="22" height="14" rx="4" />
      <path d="m14.3 12.6 6.2 3.4-6.2 3.4v-6.8Z" />
    </svg>
  ),
};

const socials = [
  {
    label: "Whatsapp",
    icon: socialIcons.whatsapp,
    href: "https://wa.me/918248686349",
  },
  {
    label: "Instagram",
    icon: socialIcons.instagram,
    href: "https://www.instagram.com/studiov_arc/",
  },
  {
    label: "Location",
    icon: socialIcons.location,
    href: "https://maps.app.goo.gl/4gc6gEn6qiMkHmL17",
  },
  { label: "Facebook", icon: socialIcons.facebook, href: "#" },
  {
    label: "LinkedIn",
    icon: socialIcons.linkedin,
    href: "https://www.linkedin.com/search/results/all/?keywords=Studio%20V%20arc",
  },
  { label: "YouTube", icon: socialIcons.youtube, href: "#" },
];

type SiteChromeProps = {
  children: ReactNode;
  pinFooter?: boolean;
  showFooter?: boolean;
};

export function SiteChrome({
  children,
  pinFooter = false,
  showFooter = true,
}: SiteChromeProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <main className={`siteShell ${pinFooter ? "siteShellPinnedFooter" : ""}`}>
      <motion.div className="scrollProgress" style={{ scaleX }} />
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="siteHeader"
        initial={false}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link className="logoMark magneticLogo" href="/" aria-label="Studio V Arc home">
          <span>Studio</span>
          <strong>V</strong>
          <small>Arc</small>
        </Link>

        <button
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          className={`menuToggle ${isMenuOpen ? "isOpen" : ""}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navMenu ${isMenuOpen ? "isOpen" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
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
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </motion.header>

      {children}

      {showFooter ? (
        <motion.footer
          animate={{ opacity: 1, y: 0 }}
          className="siteFooter"
          initial={false}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: "16px", fontWeight: 500}}>&copy; 2026 - All Rights Are Reserved</p>
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
      ) : null}
    </main>
  );
}
